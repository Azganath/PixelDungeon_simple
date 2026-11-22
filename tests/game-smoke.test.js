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
  g.run('load(); S.hero.hp = 77; saveNow(); S.hero.hp = 1; load();');
  assert.equal(g.run('S.hero.hp'), 77);
});

test('2.1 — offline progress farms the current stage and caps at 8h', () => {
  const g = boot();
  g.run('load(); S.stage = 2; S.maxStage = 2; S.hero.gold = 0; S.hero.keys = 0;');
  // first boot: nothing to award
  assert.equal(g.run('runOfflineProgress()'), null);

  g.run('S.lastSeen = Date.now() - 3600 * 1000; REPORT = runOfflineProgress();');
  const rep = g.run('REPORT');
  assert.ok(rep.battles > 100, `expected many battles, got ${rep.battles}`);
  assert.ok(rep.gold > 0, 'offline farming should grant gold');
  assert.ok(g.run('S.hero.gold') > 0);
  assert.equal(rep.capped, false);

  g.run('S.lastSeen = Date.now() - 48 * 3600 * 1000; BIG = runOfflineProgress();');
  assert.equal(g.run('BIG.capped'), true);
  assert.ok(g.run('BIG.battles') <= 1600);

  // clock going backwards must not award anything
  g.run('const before = S.hero.gold; S.lastSeen = Date.now() + 60000; runOfflineProgress(); BACK = S.hero.gold - before;');
  assert.equal(g.run('BACK'), 0);
});

test('2.2 — auto-farm counts battles and stops on conditions', () => {
  const g = boot();
  g.run(`load();
    S.autoFarm = { on: true, done: 0, stopHpPct: 30, stopGold: 0, stopKeys: 0, maxBattles: 2 };
    S.hero.hp = stats().maxHp;
    maybeAutoFarm();`);
  assert.equal(g.run('S.autoFarm.done'), 1, 'battle counter increments while farming');
  assert.equal(g.run('S.autoFarm.on'), true);

  g.run('S.hero.hp = Math.floor(stats().maxHp * 0.1); maybeAutoFarm();');
  assert.equal(g.run('S.autoFarm.on'), false, 'low HP stops the farm');

  g.run(`S.autoFarm = { on: true, done: 0, stopHpPct: 0, stopGold: 100, stopKeys: 0, maxBattles: 0 };
    S.hero.gold = 150; maybeAutoFarm();`);
  assert.equal(g.run('S.autoFarm.on'), false, 'gold target stops the farm');

  g.run(`S.autoFarm = { on: true, done: 0, stopHpPct: 0, stopGold: 0, stopKeys: 0, maxBattles: 1 };
    S.hero.gold = 0; maybeAutoFarm();`);
  assert.equal(g.run('S.autoFarm.done'), 1);
  g.run('maybeAutoFarm();');
  assert.equal(g.run('S.autoFarm.on'), false, 'battle limit stops the farm');
});

test('2.3 — tutorial rewards, daily progress and single claim', () => {
  const g = boot();
  g.run(`load(); S.hero.keys = 0; S.hero.gold = 0; openOne('sword');`);
  assert.ok(g.run('S.hero.keys') >= 3, 'tutorial chest step pays keys');
  assert.equal(g.run("S.quests.tutorial.done.includes('chest')"), true);
  assert.equal(g.run('dailyList().length'), 3, 'three dailies per day');

  g.run(`dailyList().forEach(d => { S.quests.daily.progress[d.id] = d.target; }); BEFORE = S.hero.keys; claimDailies();`);
  assert.ok(g.run('S.hero.keys') > g.run('BEFORE'), 'claim pays the dailies + streak bonus');
  assert.equal(g.run('S.quests.daily.claimed'), true);
  const keys = g.run('S.hero.keys');
  g.run('claimDailies();');
  assert.equal(g.run('S.hero.keys'), keys, 'cannot claim twice in a day');
});

test('2.3 — a new day resets dailies and advances or resets the streak', () => {
  const g = boot();
  g.run(`load();
    S.quests.daily.date = '2000-01-01'; S.quests.daily.progress = { forge: 3 }; S.quests.daily.claimed = true;
    S.quests.streak = { count: 2, last: '2000-01-01' };
    sanitize();`);
  assert.equal(g.run('S.quests.daily.date'), CF.dailyDateKey(new Date()));
  assert.equal(g.run('Object.keys(S.quests.daily.progress).length'), 0);
  assert.equal(g.run('S.quests.daily.claimed'), false);
  assert.equal(g.run('S.quests.streak.count'), 1, 'a missed day resets the streak');

  const yesterday = CF.dailyDateKey(new Date(Date.now() - 86400000));
  g.run(`S.quests.daily.date = '2000-01-01'; S.quests.streak = { count: 2, last: '${yesterday}' }; sanitize();`);
  assert.equal(g.run('S.quests.streak.count'), 3, 'consecutive login advances the streak');
});

test('2.4 — sound is optional, throttled and persisted', () => {
  const g = boot();
  g.run('load()');
  assert.equal(g.run("sfx('win')"), false, 'no AudioContext -> silent, no crash');
  assert.equal(g.run('S.audio.sfx'), true, 'sound on by default');
  assert.equal(g.run("audioCtx()"), null, 'missing WebAudio degrades to null');

  g.run('toggleSfx();');
  assert.equal(g.run('S.audio.sfx'), false);
  g.run('toggleSfx();');
  assert.equal(g.run('S.audio.sfx'), true);

  g.run('setSfxVolume(3); CLAMP_HI = S.audio.vol; setSfxVolume(-1); CLAMP_LO = S.audio.vol;');
  assert.equal(g.run('CLAMP_HI'), 1);
  assert.equal(g.run('CLAMP_LO'), 0);

  // the volume survives a reload through the save file
  g.run('setSfxVolume(0.25); saveNow(); load();');
  assert.equal(g.run('S.audio.vol'), 0.25);
});

test('T1 — the real dictionaries translate in-game and the choice persists', () => {
  const g = boot();
  const i18nDir = path.join(__dirname, '..', 'src', 'i18n');
  g.run(fs.readFileSync(path.join(i18nDir, 'strings.js'), 'utf8'));
  g.run(fs.readFileSync(path.join(i18nDir, 'index.js'), 'utf8'));
  g.run('load();');
  assert.equal(g.run("txt('ui.common.close', '닫기 [ESC]')"), '닫기 [ESC]', 'Korean by default');

  g.run("setLangName('es');");
  assert.equal(g.run('S.lang'), 'es');
  assert.equal(g.run("txt('ui.common.close', '닫기 [ESC]')"), 'Cerrar [ESC]', 'Spanish dictionary wins');

  g.run('saveNow(); load();');
  assert.equal(g.run('S.lang'), 'es', 'language survives a reload');

  g.run("setLangName('en');");
  assert.equal(g.run("txt('ui.audio.enable', 'x')"), '🔊 Turn sound on');

  g.run("setLangName('ko');");
  assert.equal(g.run("txt('ui.audio.enable', 'x')"), '🔊 사운드 켜기');
  assert.equal(g.run('document.documentElement.lang'), 'ko', 'html lang follows the setting');
});

test('sprint 2 UI — every modal renders cleanly and its handlers exist', () => {
  const g = boot();
  g.run('load()');
  for (const expr of ['afHtml()', 'questsHtml()', 'audioHtml()']) {
    const html = g.run(expr);
    assert.ok(html && html.length > 80, `${expr} renders`);
    assert.ok(!/undefined|NaN/.test(html), `${expr} has no undefined/NaN`);
    const handlers = [...html.matchAll(/on(?:click|input|change)="([A-Za-z0-9_]+)\(/g)].map(m => m[1]);
    assert.ok(handlers.length > 0, `${expr} wires handlers`);
    for (const fn of new Set(handlers)) {
      assert.equal(g.run(`typeof ${fn}`), 'function', `${expr}: handler ${fn}() is missing`);
    }
  }
});

test('2.5 — stats() is memoised and invalidated on change', () => {
  const g = boot();
  g.run('load()');
  const atk1 = g.run('stats().atk');
  assert.equal(g.run('stats() === stats()'), true, 'repeated calls hit the cache');
  g.run('S.hero.statLevels.atk += 5; saveNow();');
  assert.ok(g.run('stats().atk') > atk1, 'stats() recomputes after a saved change');
  const before = g.run('stats().atk');
  g.run('S.hero.gold = 1e9; buyTrain("atk", 1)');
  assert.ok(g.run('stats().atk') > before, 'withHpDelta invalidates the cache');
});

test('2.5 — save() coalesces writes but saveNow() writes immediately', () => {
  const g = boot();
  g.run('load()');
  g.run('S.hero.gold = 4242; saveNow();');
  assert.ok(g.store['PIXEL_DUNGEON_VIBE_SAVE_V7'].includes('4242'));
});

test('1.5 — no native alert()/confirm() left in game.js', () => {
  const src = fs.readFileSync(GAME, 'utf8');
  assert.ok(!/\balert\s*\(/.test(src), 'alert() still present');
  assert.ok(!/\bconfirm\s*\(/.test(src), 'confirm() still present');
});
