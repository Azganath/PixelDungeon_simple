#!/usr/bin/env node
/**
 * Simulación de balance (tarea 3.5) — sin navegador.
 *
 * Carga el game.js real dentro de un `vm` con un DOM mínimo (el mismo truco que
 * `tests/game-smoke.test.js`), construye un "build razonable" por piso y juega
 * 200 batallas con `simOneBattle()` (la misma función que usa el modo offline).
 *
 *   node tools/sim-balance.js            → escribe docs/BALANCE.md
 *   node tools/sim-balance.js --check    → solo imprime la tabla y falla si un
 *                                          piso 1–50 queda por debajo del 55 %
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const CF = require('../src/core/formulas.js');

const ROOT = path.join(__dirname, '..');
const GAME = path.join(ROOT, 'game.js');
const BATTLES = 200;
const FLOORS = [1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200];

const makeEl = () => ({
  style: {}, dataset: {}, children: [], value: '', textContent: '', offsetWidth: 0,
  classList: { add() {}, remove() {}, toggle() {}, contains: () => false },
  appendChild() {}, insertAdjacentHTML() {}, remove() {}, addEventListener() {},
  querySelectorAll: () => [], querySelector: () => null,
  getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }),
  getContext: () => null, select() {}, click() {}, focus() {}, blur() {},
  set innerHTML(v) { this._html = v; }, get innerHTML() { return this._html || ''; },
});

function boot() {
  const els = {}, store = {}, noop = () => {};
  const doc = {
    readyState: 'loading',
    getElementById: (id) => (els[id] = els[id] || makeEl()),
    createElement: () => makeEl(),
    querySelectorAll: () => [], querySelector: () => makeEl(), addEventListener: noop,
    body: makeEl(), documentElement: makeEl(), activeElement: makeEl(),
  };
  const sandbox = {
    console, Math, JSON, Date, Set, Map, Array, Object, String, Number, Boolean, Promise, RegExp, Error, Intl,
    TextEncoder, TextDecoder, btoa, atob, Uint8Array, document: doc,
    setTimeout: () => 0, clearTimeout: noop, requestAnimationFrame: () => 0,
    localStorage: {
      getItem: (k) => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; },
    },
    navigator: { userAgent: 'node' }, location: { reload: noop },
    Blob: class {}, URL: { createObjectURL: () => 'blob:x', revokeObjectURL: noop },
    FileReader: class {}, Image: class { constructor() { this.src = ''; this.width = 0; this.height = 0; } },
    PDCF: CF, PFXLib: { FX: {} }, FX: new Proxy({}, { get: () => noop }),
  };
  sandbox.window = sandbox; sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(GAME, 'utf8'), ctx, { filename: 'game.js' });
  vm.runInContext(`
    refreshAll = switchScene = renderHud = renderDock = renderMenu = renderCharacter = renderForge = function(){};
    log = floatText = setBanner = ticker = drawBattleBackdrop = drawMonster = drawItemIcon = function(){};
    openModal = closeModal = refreshModal = showResult = function(){};
    heroBattle = { play(){}, idle(){} }; heroMenu = null; heroChar = null; PD.emit = function(){};
  `, ctx);
  return { run: (src) => vm.runInContext(src, ctx) };
}

/** Semilla fija: la simulación es reproducible. */
function seed(g) {
  g.run(`let __seed = 20261122;
    Math.random = function () { __seed = (__seed * 1103515245 + 12345) % 2147483648; return __seed / 2147483648; };`);
}

/** "Build razonable": entrenamiento ~2 niveles por piso y el equipo típico de esa profundidad. */
function buildFor(g, floor) {
  const gear = floor < 10 ? '일반' : floor < 30 ? '희귀' : floor < 50 ? '영웅' : floor < 70 ? '전설' : '신화';
  const lv = Math.min(200, Math.round(floor * 2));
  const critRate = Math.min(54, Math.round(floor / 2));
  const critDmg = Math.min(300, Math.round(floor));
  g.run(`(() => {
    S = defaultState();
    S.stage = ${floor};
    S.maxStage = ${floor};
    S.chestLevel = ${Math.min(10, 1 + Math.floor(floor / 12))};
    S.hero.sword = newEquip('sword', '${gear}');
    S.hero.armor = newEquip('armor', '${gear}');
    S.hero.sword.enhanceLevel = Math.min(10, Math.floor(${floor} / 10));
    S.hero.armor.enhanceLevel = Math.min(10, Math.floor(${floor} / 10));
    S.hero.statLevels = { atk: ${lv}, def: ${lv}, maxHp: ${lv}, critRate: ${critRate}, critDmg: ${critDmg}, bossDmg: 0, dropRate: 0 };
    bumpStats();
  })();`);
}

function sample(g, floor) {
  buildFor(g, floor);
  const meta = g.run(`({ atk: stats().atk, def: stats().def, hp: stats().maxHp, dps: dpsOf(stats()),
    monHp: makeMonster(${floor}).hp, monAtk: makeMonster(${floor}).atk,
    ttk: Math.ceil(makeMonster(${floor}).hp / Math.max(1, dpsOf(stats()))) })`);
  let wins = 0;
  for (let i = 0; i < BATTLES; i++) if (g.run(`simOneBattle(${floor}).win`)) wins++;
  return { floor, ...meta, winRate: wins / BATTLES };
}

function main() {
  const check = process.argv.includes('--check');
  const g = boot();
  seed(g);
  const rows = FLOORS.map((f) => sample(g, f));

  const pct = (x) => `${Math.round(x * 100)}%`;
  const lines = rows.map((r) =>
    `| ${r.floor} | ${r.atk} | ${r.def} | ${r.hp} | ${r.dps} | ${r.monHp} | ${Math.max(1, r.ttk)} | ${pct(r.winRate)} |`);

  const early = rows.filter((r) => r.floor <= 50);
  const wall = early.find((r) => r.winRate < 0.55);
  const trivial = rows.filter((r) => r.winRate > 0.95);
  const cliff = rows.find((r) => r.floor > 50 && r.winRate < 0.55);
  const verdict = wall
    ? `⚠️ Muro antes del piso 50: piso ${wall.floor} con ${pct(wall.winRate)} de victorias.`
    : `✅ Ningún muro antes del piso 50 (todas las muestras ≥ 55 % de victorias).${cliff ? ` El primer piso del build base que no se supera es el **${cliff.floor}** (${pct(cliff.winRate)}).` : ''}`;

  const table = `| Piso / Floor | ATK | DEF | HP | DPS | HP del monstruo | Turnos | Victorias |
|---|---|---|---|---|---|---|---|
${lines.join('\n')}`;

  if (check) {
    console.log(table);
    console.log(verdict);
    if (wall) process.exit(1);
    return;
  }

  const doc = `# Balance / Balance

> Generado por \`node tools/sim-balance.js\` (semilla fija \`20261122\`, ${BATTLES} batallas por piso).
> No editar a mano: vuelve a ejecutar el script.
>
> Generated by \`node tools/sim-balance.js\` (fixed seed, ${BATTLES} battles per floor). Do not edit by hand.

## Supuestos / Assumptions

- **Build razonable:** entrenamiento \`atk/def/maxHp = 2 × piso\` (tope 200), equipo típico de la
  profundidad (\`일반 → 희귀 → 영웅 → 전설 → 신화\`) con \`+mín(10, piso/10)\` de forja.
- Un mismo build pelea ${BATTLES} veces (la simulación usa \`simOneBattle\`, el mismo código del modo offline).
- RNG con semilla fija → la tabla es reproducible y sirve de línea base para futuros cambios.

## Curvas / Curves (tarea 3.5)

| Sistema / System | Fórmula | Efecto |
|---|---|---|
| Coste de entrenamiento | \`(base + lv·step + lv^1.38·18) · 1.02^lv\` | +2 % compuesto por nivel: el entrenamiento tardío deja de ser barato |
| Ganancia de entrenamiento | \`inc · (min(lv,100) + (1-0.995^(lv-100))/0.005)\` | lineal hasta Lv.100 (saves antiguos intactos) y luego decreciente (~+200 · inc de techo) |
| Coste de 승급 / rank-up | 1.º gratis, luego 50 000 G (영웅→전설) y 200 000 G (전설→신화) | elimina el 승급 infinito gratuito |
| Prestigio / Prestige | \`1 + 0.10 · estrellas\` (máx. 20 → ×3) | +10 % a ATK/DEF/HP y +10 % de oro por estrella |

## Simulación / Simulation

${table}

## Veredicto / Verdict

${verdict}

Pisos triviales con el build base (≥ 95 % de victorias): ${trivial.length ? trivial.map((r) => r.floor).join(', ') : 'ninguno'}.

### Lectura / Reading

- **Pisos 1–${trivial.length ? trivial[trivial.length - 1].floor : 0}:** el build base (sin códice, runas, mascotas ni
  prestigio) gana casi siempre. Es el rango de "aprender el bucle", y por eso el juego reparte mejoras rápido ahí.
- **Piso ${cliff ? cliff.floor : '—'} en adelante:** el HP del monstruo crece de forma exponencial (\`1.024^(piso-25)\` y
  \`×1.8\` cada 50 pisos) mientras que el build base se queda plano (tope de entrenamiento suave en Lv.100 y equipo
  신화 a +10). Superar ese punto **exige** las capas meta: códice de equipo/monstruos, runas, mascotas, disfraces y
  **prestigio** (\`+10 %\` por estrella, hasta ×3) — exactamente lo que añade el Sprint 3.
- **Siguiente palanca:** si se quiere suavizar el acantilado sin tocar el early game, ajustar makeMonster()
  (\`Math.pow(1.024, e)\`) y volver a medir con este script; la semilla fija hace la comparación directa.

---

*Regenerar: \`node tools/sim-balance.js\` · verificar sólo (falla si hay muro < 55 % antes del 50): \`node tools/sim-balance.js --check\`*
`;
  fs.mkdirSync(path.join(ROOT, 'docs'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'docs', 'BALANCE.md'), doc);
  console.log(table);
  console.log(verdict);
  console.log('escrito docs/BALANCE.md');
}

main();
