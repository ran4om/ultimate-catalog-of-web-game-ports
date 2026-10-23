// Full-screen WebGL backdrop: an aurora sky shader, a warp starfield, a wireframe
// core and one glowing orb per genre. Orbs are raycast so they can be hovered and
// clicked, and their labels are projected from 3D space onto the page.
import * as THREE from "./vendor/three/three.module.js";

const BG = 0x04010a;

const SKY_VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec3 vDir;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
          mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
      mix(mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
          mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
      f.z);
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec3(1.7, 9.2, 3.1);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 d = normalize(vDir);
    float t = uTime * 0.04;
    vec3 q = d * 2.2 + vec3(uMouse * 0.25, 0.0);
    float n1 = fbm(q + vec3(t, -t * 0.6, t * 0.3));
    float n2 = fbm(d * 4.0 - vec3(t * 1.4, 0.0, t));

    vec3 deep = vec3(0.016, 0.004, 0.05);
    vec3 violet = vec3(0.42, 0.18, 0.95);
    vec3 cyan = vec3(0.05, 0.85, 1.0);
    vec3 pink = vec3(1.0, 0.25, 0.65);

    vec3 col = mix(deep, violet, smoothstep(0.35, 0.8, n1));
    col = mix(col, cyan, smoothstep(0.55, 0.95, n2) * 0.55);
    col += pink * smoothstep(0.7, 1.0, n1 * n2 * 1.6) * 0.35;
    col *= 0.55 + 0.45 * smoothstep(-0.2, 0.9, d.y);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createScene(canvas, categories) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  } catch (err) {
    console.warn("WebGL unavailable; the page keeps its CSS background.", err);
    canvas.hidden = true;
    return { setActive() {}, setLabels() {}, setScroll() {}, hoveredId: () => null };
  }

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(BG, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 300);
  camera.position.set(0, 0, 18);

  // Aurora sky: a large inverted sphere shaded with animated value noise.
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(150, 48, 32),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() } },
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
    }),
  );
  scene.add(sky);

  // Warp starfield. Stars stream towards the camera and wrap at the back.
  const STARS = 2600;
  const starPos = new Float32Array(STARS * 3);
  const starCol = new Float32Array(STARS * 3);
  const starSpeed = new Float32Array(STARS);
  const palette = ["#a5f3fc", "#f0abfc", "#ffffff", "#fde68a"].map((c) => new THREE.Color(c));
  for (let i = 0; i < STARS; i++) {
    starPos[i * 3] = (Math.random() - 0.5) * 120;
    starPos[i * 3 + 1] = (Math.random() - 0.5) * 80;
    starPos[i * 3 + 2] = -200 + Math.random() * 220;
    const c = palette[i % palette.length];
    starCol.set([c.r, c.g, c.b], i * 3);
    starSpeed[i] = 0.4 + Math.random() * 1.6;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute("color", new THREE.BufferAttribute(starCol, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  scene.add(stars);

  // Core: two counter-rotating wireframe icospheres.
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(3.2, 2),
    new THREE.MeshBasicMaterial({ color: 0x67e8f9, wireframe: true, transparent: true, opacity: 0.32 }),
  );
  const innerCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.4, 1),
    new THREE.MeshBasicMaterial({ color: 0xc084fc, wireframe: true, transparent: true, opacity: 0.2 }),
  );
  scene.add(core, innerCore);

  scene.add(new THREE.AmbientLight(0x8b5cf6, 0.6));
  const key = new THREE.PointLight(0x22d3ee, 80, 80);
  key.position.set(6, 8, 12);
  const rim = new THREE.PointLight(0xf472b6, 50, 80);
  rim.position.set(-8, -4, -6);
  scene.add(key, rim);

  // One orb per genre, each on its own orbit around the core.
  const orbGroup = new THREE.Group();
  scene.add(orbGroup);
  const orbs = categories.map((cat, i) => {
    const color = new THREE.Color(cat.color);
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 32, 24),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.55, roughness: 0.25, metalness: 0.2 }),
    );
    mesh.userData = {
      id: cat.id,
      angle: (i / categories.length) * Math.PI * 2,
      radius: 7.2 + (i % 3) * 1.5,
      speed: 0.1 + (i % 4) * 0.03,
      lift: Math.sin(i * 1.7) * 2.6,
      baseScale: 1,
    };
    orbGroup.add(mesh);
    return mesh;
  });

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const skyMouse = sky.material.uniforms.uMouse.value;
  let pointerIn = false;
  let hovered = null;
  let active = false;
  let labels = null;
  let scrollY = 0;

  window.addEventListener("pointermove", (e) => {
    pointerIn = true;
    pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
    skyMouse.lerp(pointer, 0.2);
  });
  // Leaving the window fires pointerout with no relatedTarget.
  document.addEventListener("pointerout", (e) => {
    if (!e.relatedTarget) pointerIn = false;
  });

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.position.z = w < 700 ? 25 : 18;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  const projected = new THREE.Vector3();
  const start = performance.now();
  let last = start;

  // With reduced motion, time stays frozen: the scene keeps its still frame, but hover and labels still work.
  function frame(now = performance.now()) {
    const dt = reduceMotion ? 0 : Math.min((now - last) / 1000, 0.05);
    last = now;
    const t = reduceMotion ? 0 : (now - start) / 1000;
    sky.material.uniforms.uTime.value = t;

    const pos = starGeo.attributes.position;
    for (let i = 0; i < STARS; i++) {
      let z = pos.getZ(i) + starSpeed[i] * dt * 14;
      if (z > 20) z = -200;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;

    core.rotation.y = t * 0.08;
    core.rotation.x = t * 0.05;
    innerCore.rotation.y = -t * 0.12;
    innerCore.rotation.z = t * 0.07;

    camera.position.x += (pointer.x * 1.6 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 1.1 - scrollY * 0.004 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    for (const mesh of orbs) {
      const u = mesh.userData;
      u.angle += u.speed * dt;
      mesh.position.set(Math.cos(u.angle) * u.radius, u.lift + Math.sin(t * 0.7 + u.angle) * 0.6, Math.sin(u.angle) * u.radius);
    }

    if (active) {
      raycaster.setFromCamera(pointer, camera);
      const hit = pointerIn ? (raycaster.intersectObjects(orbs, false)[0]?.object ?? null) : null;
      if (hit !== hovered) {
        if (hovered) hovered.userData.baseScale = 1;
        hovered = hit;
        if (hovered) hovered.userData.baseScale = 1.45;
        document.body.classList.toggle("orb-hover", Boolean(hovered));
        if (labels) for (const [id, el] of labels) el.classList.toggle("is-hover", hovered?.userData.id === id);
      }
      for (const mesh of orbs) {
        const s = mesh.scale.x + (mesh.userData.baseScale - mesh.scale.x) * 0.15;
        mesh.scale.setScalar(s);
      }
      if (labels) {
        for (const mesh of orbs) {
          const el = labels.get(mesh.userData.id);
          if (!el) continue;
          projected.copy(mesh.position).project(camera);
          const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
          el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -190%)`;
          el.style.opacity = projected.z > 1 ? "0" : "1";
        }
      }
    }

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(frame);

  return {
    setActive(value) {
      active = value;
      orbGroup.visible = value;
      core.visible = value;
      innerCore.visible = value;
      if (!value) {
        hovered = null;
        document.body.classList.remove("orb-hover");
      }
    },
    setLabels(map) {
      labels = map;
    },
    setScroll(y) {
      scrollY = y;
    },
    hoveredId() {
      return active && hovered ? hovered.userData.id : null;
    },
  };
}
