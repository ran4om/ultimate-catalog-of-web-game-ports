# Ultimate Catalog of Web Game Ports

A genre-sorted catalog of browser game ports, merged from two awesome lists:
Carter54git's Ultimate Catalog and bitburner's Awesome Browser Game Ports.
Duplicates are merged into one entry with every known port listed.

## Layout

- `sources/` – copies of the two upstream READMEs, kept for provenance.
- `scripts/build.mjs` – parses both sources, classifies games into genres and
  writes `data/games.json`, `docs/data/games.json` and `README.md`. Has no
  dependencies; run with `node scripts/build.mjs`. Genre lists (`GENRES`,
  `ALIASES`, `SPECIAL`) live at the top of the file.
- `docs/` – static website (hash-routed, no build step): `index.html`,
  `styles.css`, `app.js` (router and pages) and `scene.js` (Three.js backdrop).
- `docs/vendor/three/` – vendored Three.js 0.186.1 (`three.module.js`,
  `three.core.js`, LICENSE). Don't edit.
- `data/games.json` – generated data, same content as `docs/data/games.json`.

## Running

- Rebuild the data: `node scripts/build.mjs`
- Serve the site: `python3 -m http.server -d docs 8000`, then open
  http://localhost:8000 (ES modules and `fetch` need HTTP, not `file://`).

## Conventions

- Generated files (`README.md`, `data/`, `docs/data/`) come from `build.mjs`.
  Change the generator, then rebuild; don't hand-edit them.
- Genre fixes go in the lists in `scripts/build.mjs`. Run the build afterwards
  and spot-check the affected titles.
- The site respects `prefers-reduced-motion`: the scene freezes time and CSS
  animations are disabled. Keep new motion behind the same check.
