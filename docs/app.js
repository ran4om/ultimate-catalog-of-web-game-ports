// Router and page renderers for the catalog. Everything is hash-routed, so the site
// works from any static host: #/ home, #/catalog, #/category/:id, #/game/:id.
import { createScene } from "./scene.js";

const LETTERS = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
const app = document.getElementById("app");
const labelBox = document.getElementById("orb-labels");

let cats = [];
let catById = new Map();
let games = [];
let gameById = new Map();
let stats = { total: 0, playable: 0, withSource: 0 };
let scene;

const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const safeUrl = (u) => (/^https?:\/\//.test(u || "") ? esc(u) : "#");
const letterKey = (l) => (l === "#" ? "hash" : l);

function badges(g) {
  return [
    g.playable ? `<span class="badge play">▶ Play</span>` : `<span class="badge">🌐 Info</span>`,
    g.hasSource ? `<span class="badge src">📦 Source</span>` : "",
  ].join("");
}

function gameCard(g) {
  const c = catById.get(g.category);
  return `<a class="card tilt reveal" href="#/game/${esc(g.id)}" style="--accent:${c.color}">
    <span class="card-glare" aria-hidden="true"></span>
    <span class="card-top"><span class="card-cat">${esc(c.name)}</span>${g.featured ? `<span class="star" title="Featured">★</span>` : ""}</span>
    <span class="card-title">${esc(g.title)}</span>
    <span class="card-badges">${badges(g)}</span>
  </a>`;
}

function observeReveals(root) {
  for (const el of root.querySelectorAll(".reveal:not(.in)")) revealObserver.observe(el);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      revealObserver.unobserve(e.target);
    }
  },
  { rootMargin: "0px 0px -6% 0px" },
);

function mountOrbLabels() {
  labelBox.innerHTML = cats.map((c) => `<span class="orb-label" data-id="${esc(c.id)}">${esc(c.name)}</span>`).join("");
  const labels = new Map([...labelBox.querySelectorAll(".orb-label")].map((el) => [el.dataset.id, el]));
  scene.setLabels(labels);
  scene.setActive(true);
}

function renderHome() {
  const featured = games.filter((g) => g.featured && g.playable).slice(0, 8);
  const picks = featured.length ? featured : games.filter((g) => g.playable).slice(0, 8);
  const random = games[Math.floor(Math.random() * games.length)];

  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow reveal">Ultimate Catalog · Web game ports</p>
      <h1 class="hero-title reveal">
        <span>Play the classics</span>
        <span class="gradient-text">in a browser tab</span>
      </h1>
      <p class="lede reveal">${stats.total} games, merged from two awesome lists and sorted by genre. ${stats.playable} run in the browser right now, and ${stats.withSource} ship with source code.</p>
      <div class="hero-cta reveal">
        <a class="btn primary" href="#/catalog">Browse the catalog</a>
        <a class="btn" href="#/game/${esc(random.id)}">Surprise me</a>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title reveal">Explore by genre</h2>
      <p class="muted reveal">Hover an orb or the ring to pause it. Click through to a genre.</p>
      <div class="ring-stage">
        <div class="ring">
          ${cats.map((c, i) => `
            <div class="ring-item" style="--i:${i}">
              <a class="ring-card tilt" href="#/category/${esc(c.id)}" style="--accent:${c.color}">
                <span class="ring-count">${c.count}</span>
                <span class="ring-name">${esc(c.name)}</span>
              </a>
            </div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <h2 class="section-title reveal">Featured picks</h2>
      <div class="grid">${picks.map(gameCard).join("")}</div>
    </section>`;

  mountOrbLabels();
  observeReveals(app);
}

function renderCatalog(fixedId) {
  const fixed = fixedId ? catById.get(fixedId) : null;
  const filter = { q: "", cat: fixedId || "" };

  app.innerHTML = `
    <section class="page-head">
      <p class="eyebrow reveal">${fixed ? "Genre" : "Catalog"}</p>
      <h1 class="gradient-text reveal">${esc(fixed ? fixed.name : "Every game")}</h1>
      <p class="lede reveal">${esc(fixed ? fixed.blurb : `${games.length} games. Search, filter, or jump by letter.`)}</p>
      <div class="controls reveal">
        <input id="q" type="search" placeholder="Search titles…" autocomplete="off" aria-label="Search games">
        ${fixed ? "" : `<select id="cat" aria-label="Genre">
          <option value="">All genres</option>
          ${cats.map((c) => `<option value="${esc(c.id)}">${esc(c.name)} (${c.count})</option>`).join("")}
        </select>`}
      </div>
      <nav class="letters" id="letters" aria-label="Jump to letter"></nav>
    </section>
    <div id="list"></div>`;

  const list = app.querySelector("#list");
  const letters = app.querySelector("#letters");

  function draw() {
    const rows = games.filter(
      (g) => (!filter.cat || g.category === filter.cat) && (!filter.q || g.search.includes(filter.q)),
    );
    const groups = new Map(LETTERS.map((l) => [l, []]));
    for (const g of rows) groups.get(groups.has(g.letter) ? g.letter : "#").push(g);

    letters.innerHTML = LETTERS.map((l) => {
      const n = groups.get(l).length;
      return `<button type="button" class="letter" data-jump="${letterKey(l)}" ${n ? "" : "disabled"}>${l}</button>`;
    }).join("");

    list.innerHTML =
      [...groups]
        .filter(([, items]) => items.length)
        .map(
          ([l, items]) => `
          <section class="letter-group" id="L${letterKey(l)}">
            <h2 class="letter-head"><span>${l}</span><small>${items.length}</small></h2>
            <div class="grid">${items.map(gameCard).join("")}</div>
          </section>`,
        )
        .join("") || `<p class="empty">Nothing matches that search.</p>`;
    observeReveals(list);
  }

  app.querySelector("#q").addEventListener("input", (e) => {
    filter.q = e.target.value.trim().toLowerCase();
    draw();
  });
  app.querySelector("#cat")?.addEventListener("change", (e) => {
    filter.cat = e.target.value;
    draw();
  });

  draw();
  observeReveals(app);
}

function portRow(p) {
  return `<div class="port tilt">
    <span class="port-label">${esc(p.label)}</span>
    <span class="port-actions">
      ${p.play ? `<a class="btn primary" href="${safeUrl(p.play)}" target="_blank" rel="noopener noreferrer">▶ Play</a>` : ""}
      ${p.source ? `<a class="btn" href="${safeUrl(p.source)}" target="_blank" rel="noopener noreferrer">📦 Source</a>` : ""}
      ${p.site ? `<a class="btn ghost" href="${safeUrl(p.site)}" target="_blank" rel="noopener noreferrer">🌐 Site</a>` : ""}
    </span>
    <span class="port-origin">From ${p.origin === "ultimate" ? "Ultimate Catalog" : "Awesome Browser Game Ports"}</span>
  </div>`;
}

function renderGame(id) {
  const g = gameById.get(id);
  if (!g) return renderNotFound();
  const c = catById.get(g.category);
  const related = games.filter((x) => x.category === c.id && x.id !== g.id).slice(0, 6);

  app.innerHTML = `
    <a class="back" href="#/category/${esc(c.id)}">← ${esc(c.name)}</a>
    <article class="detail reveal" style="--accent:${c.color}">
      <p class="eyebrow">${esc(c.name)}</p>
      <h1 class="gradient-text">${esc(g.title)}</h1>
      <div class="card-badges">${badges(g)}${g.featured ? `<span class="badge">★ Featured</span>` : ""}</div>
      <div class="ports">${g.ports.map(portRow).join("")}</div>
    </article>
    <section class="section">
      <h2 class="section-title reveal">More in ${esc(c.name)}</h2>
      <div class="grid">${related.map(gameCard).join("")}</div>
    </section>`;
  observeReveals(app);
}

function renderNotFound() {
  app.innerHTML = `<p class="empty">That page doesn't exist. <a href="#/">Back home</a>.</p>`;
}

function route() {
  scene.setActive(false);
  scene.setLabels(null);
  labelBox.innerHTML = "";
  window.scrollTo(0, 0);

  // "#/game/abc" -> ["", "game", "abc"]
  const [, page = "", arg = ""] = location.hash.slice(1).split("/");
  const id = decodeURIComponent(arg);

  if (page === "") {
    renderHome();
    document.title = "Ultimate Catalog · Web Game Ports";
  } else if (page === "catalog") {
    renderCatalog("");
    document.title = "Catalog · Ultimate Catalog";
  } else if (page === "category" && catById.has(id)) {
    renderCatalog(id);
    document.title = `${catById.get(id).name} · Ultimate Catalog`;
  } else if (page === "game") {
    renderGame(id);
    document.title = `${gameById.get(id)?.title ?? "Game"} · Ultimate Catalog`;
  } else {
    renderNotFound();
  }
}

// One delegated click handler: letter jumps, and orb clicks while the home scene is up.
app.parentElement.addEventListener("click", (e) => {
  const jump = e.target.closest("[data-jump]");
  if (jump) {
    document.getElementById(`L${jump.dataset.jump}`)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    return;
  }
  if (e.target.closest("a, button, input, select")) return;
  const orb = scene.hoveredId();
  if (orb) location.hash = `#/category/${orb}`;
});

// Tilt and glare: pointer position becomes CSS variables on the hovered card.
if (!reduceMotion) {
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest?.(".tilt");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    card.style.setProperty("--rx", `${((0.5 - y) * 12).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
    card.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
  });
  document.addEventListener("pointerout", (e) => {
    const card = e.target.closest?.(".tilt");
    if (!card || card.contains(e.relatedTarget)) return;
    card.style.removeProperty("--rx");
    card.style.removeProperty("--ry");
  });
}

async function boot() {
  const res = await fetch("data/games.json");
  if (!res.ok) throw new Error(`games.json: HTTP ${res.status}`);
  const data = await res.json();

  cats = data.categories;
  catById = new Map(cats.map((c) => [c.id, c]));
  games = data.games
    .map((g) => ({ ...g, search: [g.title, ...g.ports.map((p) => p.label)].join(" ").toLowerCase() }))
    .sort((a, b) => collator.compare(a.title, b.title));
  gameById = new Map(games.map((g) => [g.id, g]));
  stats = {
    total: data.total,
    playable: data.playable,
    withSource: games.filter((g) => g.hasSource).length,
  };

  scene = createScene(document.getElementById("scene"), cats);
  window.addEventListener("scroll", () => scene.setScroll(window.scrollY), { passive: true });
  window.addEventListener("hashchange", route);
  route();
}

boot().catch((err) => {
  console.error(err);
  app.innerHTML = `<p class="empty">Couldn't load the catalog data. Serve the <code>docs/</code> folder over HTTP (see README).</p>`;
});
