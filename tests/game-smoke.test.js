'use strict';
/*
 * Integration smoke test (tarea 1.0): loads the real game.js inside a Node VM
 * with a tiny DOM stub, then exercises the state-changing logic added in Sprint 1
 * without any rendering. Catches "the formulas module is not wired up" style bugs.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const CF = require('../src/core/formulas.js');

const GAME = path.join(__dirname, '..', 'game.js');

function makeEl() {
  return {
    style: {}, dataset: {}, children: [], value: '', textContent: '', offsetWidth: 0,
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    appendChild() {}, insertAdjacentHTML() {}, remove() {}, addEventListener() {},
    querySelectorAll() { return []; }, querySelector() { return null; },
    getBoundingClientRect() { return { left: 0, top: 0, width: 100, height: 100 }; },
    getContext() { return null; }, select() {}, click() {}, focus() {}, blur() {},
    set innerHTML(v) { this._html = v; }, get innerHTML() { return this._html || ''; },
  };
}

function boot() {
  const els = {};
  const store = {};
  const noop = () => {};
  const doc = {
    readyState: 'loading',
    getElementById(id) { return (els[id] = els[id] || makeEl()); },
    createElement() { return makeEl(); },
    querySelectorAll() { return []; },
    querySelector() { return makeEl(); },
    addEventListener() {},
    body: makeEl(), documentElement: makeEl(), activeElement: makeEl(),
  };
  const sandbox = {
    console, Math, JSON, Date, Set, Map, Array, Object, String, Number, Boolean, Promise, RegExp, Error, Intl,
    TextEncoder, TextDecoder, btoa, atob, Uint8Array, document: doc,
    setTimeout: () => 0, clearTimeout: noop, requestAnimationFrame: () => 0,
    localStorage: {
      getItem: (k) => (k in store ? store[k] : null),
      setItem: (k, v) => { store[k] = String(v); },
      removeItem: (k) => { delete store[k]; },
    },
    navigator: { userAgent: 'node' },
    location: { reload: noop },
    Blob: class {}, URL: { createObjectURL: () => 'blob:x', revokeObjectURL: noop },
    FileReader: class {}, Image: class { constructor() { this.src = ''; this.width = 0; this.height = 0; } },
    PDCF: CF, PFXLib: { FX: {} }, FX: new Proxy({}, { get: () => noop }),
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  const ctx = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(GAME, 'utf8'), ctx, { filename: 'game.js' });
  // Silence painting/animation so the test only checks state.
  vm.runInContext(`
    refreshAll = function(){};
    switchScene = function(){};
    renderHud = renderDock = renderMenu = renderCharacter = renderForge = function(){};
    drawBattleBackdrop = drawMonster = drawItemIcon = drawPet = drawSwordIcon = drawArmorIcon = paintIcons = drawTitleBackdrop = drawForgeBackdrop = function(){};
    log = floatText = setBanner = ticker = function(){};
    fxVictory = fxForgeSuccess = fxForgeFail = fxForgeTap = fxChest = fxRunIn = fxHeroSlash = fxSkill = fxEnemyHit = fxBossBreath = fxHeroDeath = fxPotion = function(){};
    lunge = hammerTap = restartAnim = function(){};
    openModal = closeModal = refreshModal = showResult = function(){};
    heroBattle = { play(){}, idle(){} }; heroMenu = null; heroChar = null;
    PD.emit = function(){};
  `, ctx);
  return {
    run: (src) => vm.runInContext(src, ctx),
    state: () => JSON.parse(JSON.stringify(vm.runInContext('S', ctx))),
    store,
  };
}

test('game.js boots with the formulas module wired in', () => {
  const g = boot();
  g.run('load()');
  assert.equal(g.state().hero.gold, 500);
  assert.ok(g.run('stats().atk') > 0);
  assert.ok(g.run('dpsOf()') > 0, 'DPS meter should return a positive number');
});

test('1.1 — chest upgrade keeps forge progress', () => {
  const g = boot();
  g.run(`
    load();
    S.hero.sword = { name:'old', grade:'일반', baseStat:6, sellPrice:30, enhanceLevel:7, starTier:0, starCount:0, pityBonus:12.5 };
    S.hero.gold = 0;
  `);
  const origRoll = CF.rollGrade;
  CF.rollGrade = () => '전설';
  try { g.run("RES = openOne('sword')"); } finally { CF.rollGrade = origRoll; }
  const hero = g.state().hero;
  assert.equal(hero.sword.grade, '전설');
  assert.equal(hero.sword.enhanceLevel, 7, 'enhancement level must carry over');
  assert.equal(hero.sword.pityBonus, 12.5, 'pity bonus must carry over');
  assert.ok(hero.gold > 0, 'previous gear is still refunded');
  assert.match(g.run('RES.banner'), /강화 이전/);
});

test('1.2 — HP persists between battles and only heals 30% on victory', () => {
  const g = boot();
  g.run('load(); S.hero.hp = 50; S.stage = 3; S.maxStage = 12; startBattle();');
  assert.equal(g.run('S.hero.hp'), 50, 'startBattle must not refill HP');

  g.run('S.hero.hp = 0; startBattle();');
  assert.equal(g.run('S.hero.hp'), Math.floor(g.run('stats().maxHp') * 0.3), 'lethal entry heals to 30%');

  g.run('S.hero.hp = 10; S.stage = 4; S.repeatStage = null; startBattle(); S.battle.monster.hp = 0; victory();');
  const maxHp = g.run('stats().maxHp');
  const hp = g.run('S.hero.hp');
  assert.ok(hp >= Math.floor(maxHp * 0.3) + 10 && hp <= maxHp, `victory heal out of range: ${hp}/${maxHp}`);
  assert.equal(g.run('S.stage'), 5, 'victory advances the stage');
});

test('1.4 — auto-forge stop flag and +10 goal', () => {
  const g = boot();
  g.run('load()');
  assert.equal(g.run('UI.forgeGoal'), 'max');
  g.run("setForgeGoal('+10')");
  assert.equal(g.run("CF.forgeGoalReached({starTier:0, enhanceLevel:10}, UI.forgeGoal)"), true);
  g.run('forgeStopNow()');           // no-op when not running
  assert.equal(g.run('UI.forgeStop'), false);
});

test('1.6/1.7 — export/import roundtrip and corrupt input safety', () => {
  const g = boot();
  g.run('load(); S.hero.gold = 123456; S.stage = 9; S.hero.hp = 77; CODE = b64encode(JSON.stringify(S));');
  const code = g.run('CODE');
  assert.match(code, /^[A-Za-z0-9+/=]+$/);
  assert.equal(g.run('decodeSaveCode(CODE).hero.gold'), 123456);
  assert.equal(g.run("decodeSaveCode('zzzz-not-valid')"), null);

  // Simulate pasting the code into the import dialog.
  g.run(`
    (function () {
      const orig = document.getElementById;
      document.getElementById = function (id) { const e = orig(id); if (id === 'import-code') e.value = CODE; return e; };
    })();
    S.hero.gold = 1; S.stage = 1;
    doImport();
  `);
  assert.equal(g.run('S.hero.gold'), 123456);
  assert.equal(g.run('S.stage'), 9);
  assert.equal(g.state().hero.hp, 77);
  assert.ok(g.store['PIXEL_DUNGEON_VIBE_SAVE_V7_BACKUP'], 'previous save is backed up before import');
});

test('1.7 — save/load keeps current HP', () => {
  const g = boot();
  g.run('load(); S.hero.hp = 77; save(); S.hero.hp = 1; load();');
  assert.equal(g.run('S.hero.hp'), 77);
});

test('1.5 — no native alert()/confirm() left in game.js', () => {
  const src = fs.readFileSync(GAME, 'utf8');
  assert.ok(!/\balert\s*\(/.test(src), 'alert() still present');
  assert.ok(!/\bconfirm\s*\(/.test(src), 'confirm() still present');
});
