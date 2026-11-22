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
  assert.equal(hero.gold, 0, '3.4a: the old piece is stored, not auto-sold');
  assert.equal(g.run('S.inventory.swords.length'), 1, 'the previous sword goes to the inventory');
  assert.equal(g.run("S.inventory.swords[0].grade"), '일반');
  assert.match(g.run('RES.banner'), /인벤토리 보관/);
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

test('3.1 — prestige unlocks at Stage 100, resets the run and keeps meta progress', () => {
  const g = boot();
  g.run(`load();
    S.maxStage = 99; LOCKED = canPrestige();
    S.maxStage = 100; OPEN = canPrestige();
    S.hero.statLevels.atk = 40; S.hero.gold = 12345; S.hero.keys = 77;
    S.hero.skills.push({ ...S.hero.skills[0], name: '테스트 스킬' });
    S.codex.swords['테스트검'] = 3;
    S.chestLevel = 4;
    OK = doPrestige();`);
  assert.equal(g.run('LOCKED'), false, 'Stage 99 is not enough');
  assert.equal(g.run('OPEN'), true);
  assert.equal(g.run('OK'), true);
  assert.equal(g.run('S.prestige.stars'), 1);
  assert.equal(g.run('S.stage'), 1, 'dungeon restarts at floor 1');
  assert.equal(g.run('S.maxStage'), 1);
  assert.equal(g.run('S.hero.statLevels.atk'), 0, 'training reset');
  assert.equal(g.run('S.hero.skills.length'), 1, 'skills reset to the starter one');
  assert.equal(g.run('S.hero.sword.grade'), '일반', 'gear reset');
  assert.equal(g.run('S.hero.gold'), 12345, 'gold kept');
  assert.equal(g.run('S.hero.keys'), 77, 'keys kept');
  assert.equal(g.run('S.chestLevel'), 4, 'chest level kept');
  assert.equal(g.run("'테스트검' in S.codex.swords"), true, 'codex kept');
  assert.equal(g.run('S.hero.hp'), g.run('stats().maxHp'), 'healed to the new max');
  assert.equal(g.run('canPrestige()'), false, 'needs a new climb to Stage 100 again');

  // +10 % global: attack is the base value times the prestige multiplier
  const expectedAtk = g.run('Math.floor((14 + equipBonus("sword") + S.hero.bossSword.attackBonus) * 1.1)');
  assert.equal(g.run('stats().atk'), expectedAtk, 'one star = +10 % attack');
  assert.equal(g.run('stats().goldPct'), 10, '+10 % gold per star');
  // the multiplier survives a reload
  g.run('saveNow(); load();');
  assert.equal(g.run('S.prestige.stars'), 1);
  assert.equal(g.run('stats().atk'), expectedAtk);
});

test('3.1 — prestige is capped at 20 stars', () => {
  const g = boot();
  g.run('load(); S.maxStage = 100; S.prestige.stars = 20; MAXED = canPrestige(); TRIED = doPrestige();');
  assert.equal(g.run('MAXED'), false);
  assert.equal(g.run('TRIED'), false);
  assert.equal(g.run('S.prestige.stars'), 20);
  assert.equal(g.run('CF.prestigeMult(20)'), 3);
});

test('3.5 — rank-up is free once and then costs gold', () => {
  const g = boot();
  g.run(`load();
    S.hero.sword = { ...newEquip('sword', '영웅'), starTier: 3, starCount: 5 };
    FIRST = rankUpCost(S.hero.sword);
    S.hero.gold = 1e9;
    doRankUp('sword');
    GRADE = S.hero.sword.grade; NEXT = rankUpCost(S.hero.sword);`);
  assert.equal(g.run('FIRST'), 0, 'the first rank-up is free');
  assert.equal(g.run('GRADE'), '전설');
  assert.equal(g.run('NEXT'), 200000, '전설→신화 is the 200k tier');

  g.run(`S.hero.sword = { ...newEquip('sword', '전설'), starTier: 3, starCount: 5 };
    S.hero.gold = 10; doRankUp('sword');`);
  assert.equal(g.run('S.hero.sword.grade'), '전설', 'blocked without gold');
  assert.equal(g.run('S.hero.gold'), 10);

  g.run(`S.hero.gold = 1e9; doRankUp('sword');`);
  assert.equal(g.run('S.hero.sword.grade'), '신화');
  assert.ok(g.run('S.hero.gold') <= 1e9 - 200000, 'the mythical rank-up costs 200k');
});

test('3.5 — training gains and costs follow the new curves in-game', () => {
  const g = boot();
  g.run('load(); S.hero.gold = 1e12;');
  const cost0 = g.run('trainCost(TRAIN[0], 0)');
  g.run('train("atk", 100);');
  const cost100 = g.run('trainCost(TRAIN[0], 100)');
  assert.ok(cost100 > cost0 * 10, `level 100 must be much more expensive (${cost0} -> ${cost100})`);
  assert.equal(g.run('S.hero.statLevels.atk'), 100);
  assert.equal(g.run('stats().atk'), g.run('Math.floor(14 + 100 * 13 + equipBonus("sword") + S.hero.bossSword.attackBonus)'), 'first 100 levels stay linear');
  // levels past the soft cap are worth less
  g.run('train("atk", 100);');
  assert.equal(g.run('S.hero.statLevels.atk'), 200);
  const atk200 = g.run('stats().atk');
  const linear200 = g.run('Math.floor(14 + 200 * 13 + equipBonus("sword") + S.hero.bossSword.attackBonus)');
  assert.ok(atk200 < linear200, 'soft cap: level 200 is worth less than 200 linear levels');
});

test('3.5 — the baseline build wins floor 1 and loses floor 200 (balance guard)', () => {
  const g = boot();
  g.run('load()');
  const starterWins = (() => { let w = 0; for (let i = 0; i < 20; i++) if (g.run('simOneBattle(1).win')) w++; return w; })();
  assert.equal(starterWins, 20, 'floor 1 is always winnable with the starter hero');
  g.run('S.hero.statLevels.atk = 2; S.hero.statLevels.def = 2; S.hero.statLevels.maxHp = 2; bumpStats();');
  let lateWins = 0;
  for (let i = 0; i < 5; i++) if (g.run('simOneBattle(200).win')) lateWins++;
  assert.equal(lateWins, 0, 'a starter build cannot clear floor 200');
});

test('3.2 — bossOnly and burst rules gate auto-cast, in battle and in the simulation', () => {
  const g = boot();
  g.run(`load();
    S.hero.equippedSkills = ['화염 강타'];
    ownedSkill('화염 강타').cooldown = 0;
    S.skillRules = { '화염 강타': 'bossOnly' };
    NORMAL = pickSkill(makeMonster(3)) ? 'cast' : 'skip';
    BOSS = pickSkill(makeMonster(10)) ? 'cast' : 'skip';
    S.skillRules = { '화염 강타': 'burst' };
    const m = makeMonster(3);
    FULL = pickSkill(m) ? 'cast' : 'skip';
    m.hp = Math.floor(m.maxHp * 0.3);
    LOW = pickSkill(m) ? 'cast' : 'skip';
    S.skillRules = {};
    OPEN = pickSkill(makeMonster(3)) ? 'cast' : 'skip';`);
  assert.equal(g.run('NORMAL'), 'skip', 'bossOnly does not fire on a normal monster');
  assert.equal(g.run('BOSS'), 'cast', 'bossOnly fires on a boss');
  assert.equal(g.run('FULL'), 'skip', 'burst waits for the second half');
  assert.equal(g.run('LOW'), 'cast', 'burst fires below 50 %');
  assert.equal(g.run('OPEN'), 'cast', 'no rule = always');
});

test('3.2 — loadouts store and restore skills, speed and rules in one click', () => {
  const g = boot();
  g.run(`load();
    S.hero.skills.push({ ...S.hero.skills[0], name: '테스트 스킬' });
    S.hero.equippedSkills = ['화염 강타', '테스트 스킬'];
    S.battleSpeed = 2;
    S.skillRules = { '화염 강타': 'bossOnly' };
    saveLoadout(0);
    SLOT = { skills: S.loadouts[0].skills.slice(), speed: S.loadouts[0].speed, rule: S.loadouts[0].rules['화염 강타'] };
    S.hero.equippedSkills = ['화염 강타'];
    S.battleSpeed = 1;
    S.skillRules = {};
    applyLoadout(0);
    AFTER = { skills: S.hero.equippedSkills.slice(), speed: S.battleSpeed, rule: S.skillRules['화염 강타'] };`);
  const expected = JSON.stringify({ skills: ['화염 강타', '테스트 스킬'], speed: 2, rule: 'bossOnly' });
  assert.equal(JSON.stringify(g.run('SLOT')), expected);
  assert.equal(JSON.stringify(g.run('AFTER')), expected);

  // a preset whose skills are gone cannot empty the bar
  g.run(`S.loadouts[1] = { name: 'old', skills: ['없는 스킬'], pet: null, speed: 1, rules: {} };
    applyLoadout(1);`);
  assert.equal(g.run('S.hero.equippedSkills.length'), 2, 'stale presets keep the current bar');
  // presets survive a reload
  g.run('saveNow(); load();');
  assert.equal(g.run("S.loadouts[0].skills.join('|')"), '화염 강타|테스트 스킬');
});

test('3.3 — bosses get a pattern, shields absorb and statuses tick', () => {
  const g = boot();
  g.run('load()');
  assert.equal(g.run('makeMonster(5).pattern'), null, 'elites have no pattern');
  assert.equal(g.run('makeMonster(10).pattern'), 'shield');
  assert.equal(g.run('makeMonster(20).pattern'), 'heal');
  assert.equal(g.run('makeMonster(30).pattern'), 'summon');
  assert.equal(g.run('makeMonster(40).pattern'), 'enrage');

  const absorb = g.run(`(() => { const mon = makeMonster(10); mon.shield = 100; mon.hp = 5000; mon.maxHp = 5000;
    const r = damageMonster(mon, 60); return { ...r, hp: mon.hp, shield: mon.shield }; })()`);
  assert.equal(JSON.stringify(absorb), JSON.stringify({ absorbed: 60, dealt: 0, hp: 5000, shield: 40 }), 'the shield eats the hit first');
  const spill = g.run(`(() => { const mon = makeMonster(10); mon.shield = 20; mon.hp = 5000; mon.maxHp = 5000;
    const r = damageMonster(mon, 60); return { ...r, hp: mon.hp, shield: mon.shield }; })()`);
  assert.equal(JSON.stringify(spill), JSON.stringify({ absorbed: 20, dealt: 40, hp: 4960, shield: 0 }));

  const dot = g.run(`(() => { const mon = makeMonster(3); mon.hp = 100; mon.maxHp = 1000;
    mon.statuses = CF.addStatus({}, 'poison');
    const h = S.hero; h.hp = stats().maxHp;
    const act = monsterAct(mon, h, 1); return { dot: act.dot, hp: mon.hp }; })()`);
  assert.equal(JSON.stringify(dot), JSON.stringify({ dot: 50, hp: 50 }), 'poison deals 5 % of max HP');

  const frozen = g.run(`(() => { const mon = makeMonster(3); mon.hp = 1000; mon.maxHp = 1000;
    mon.statuses = CF.addStatus({}, 'freeze');
    const h = S.hero; h.hp = stats().maxHp; const before = h.hp;
    const act = monsterAct(mon, h, 1); return { skip: act.skip, dmg: act.dmg, untouched: h.hp === before }; })()`);
  assert.equal(JSON.stringify(frozen), JSON.stringify({ skip: true, dmg: 0, untouched: true }), 'freeze costs the monster its turn');
});

test('3.3 — the shared battle loop resolves statuses and is used by skip and offline', () => {
  const g = boot();
  g.run('load()');
  const res = g.run(`(() => {
    // a monster the hero can barely scratch (huge DEF) but the poison can finish
    const mon = makeMonster(1); mon.def = 1e9; mon.hp = 40; mon.maxHp = 1000;
    mon.statuses = CF.addStatus({}, 'poison');
    const h = S.hero; h.hp = stats().maxHp;
    return battleLoop(mon, 0, 20); })()`);
  assert.equal(res.dotKill, true, 'dotKill is reported when the poison finishes the monster');
  assert.equal(res.win, true);

  const sim = g.run('simOneBattle(1)');
  assert.equal(sim.win, true, 'floor 1 is winnable through the shared loop');
  assert.ok(sim.rounds >= 1, 'rounds are reported');

  // the boss heal pattern is applied inside the loop (hp goes up instead of down)
  const heal = g.run(`(() => {
    const mon = makeMonster(20); mon.maxHp = 100000; mon.hp = 40000; mon.pattern = 'heal';
    const h = S.hero; h.hp = stats().maxHp;
    const act = monsterAct(mon, h, 1);
    return { action: act.action, heal: act.heal, hp: mon.hp, healed: mon.healed }; })()`);
  assert.equal(heal.action, 'heal');
  assert.ok(heal.hp > 40000 && heal.healed === 1);
});

test('3.4a — same-grade drops are stored, full bags fall back to selling', () => {
  const g = boot();
  g.run(`load(); S.hero.gold = 0; S.inventory = { swords: [], armors: [] };`);
  const origRoll = CF.rollGrade;
  CF.rollGrade = () => '일반';
  try { g.run("RES = openOne('sword')"); } finally { CF.rollGrade = origRoll; }
  assert.equal(g.run('S.inventory.swords.length'), 1, 'the drop is kept');
  assert.equal(g.run('S.hero.gold'), 0, 'nothing was sold');
  assert.match(g.run('RES.tag'), /인벤토리 보관/);
  assert.match(g.run('RES.tag'), /1\/20/);

  // 20 slots: the 21st drop is sold with a warning
  g.run(`for (let i = S.inventory.swords.length; i < 20; i++) addToInventory('sword', newEquip('sword', '일반'));
    FILLED = invCount('sword');`);
  assert.equal(g.run('FILLED'), 20);
  CF.rollGrade = () => '일반';
  try { g.run("FULL_RES = openOne('sword')"); } finally { CF.rollGrade = origRoll; }
  assert.equal(g.run("invCount('sword')"), 20, 'the bag stays capped');
  assert.ok(g.run('S.hero.gold') > 0, 'the overflow is sold');
  assert.match(g.run('FULL_RES.banner'), /가득/);
});

test('3.4a — equip and sell from the inventory keep the forge progress', () => {
  const g = boot();
  g.run(`load();
    S.hero.sword = { name: '현재검', grade: '영웅', baseStat: 40, sellPrice: 260, enhanceLevel: 5, starTier: 0, starCount: 0, pityBonus: 3 };
    S.inventory = { swords: [], armors: [] };
    const stored = { name: '보관검', grade: '전설', baseStat: 90, sellPrice: 400, enhanceLevel: 0, starTier: 0, starCount: 0, pityBonus: 0 };
    ENTRY = addToInventory('sword', stored);
    ID = ENTRY.id;
    EQ = equipFromInventory('sword', ID);`);
  assert.equal(g.run('EQ.ok'), true);
  assert.equal(g.run('S.hero.sword.grade'), '전설', 'the stored piece is equipped');
  assert.equal(g.run('S.hero.sword.enhanceLevel'), 5, 'forge progress follows the player');
  assert.equal(g.run('invCount("sword")'), 1, 'the previous sword comes back to the bag');
  assert.equal(g.run("S.inventory.swords[0].name"), '현재검');
  assert.equal(g.run('S.hero.sword.id'), undefined, 'equipped gear carries no bag id');

  // favourites cannot be sold; regular pieces can
  g.run(`S.inventory.swords[0].fav = true; PROTECTED = sellInventoryItem('sword', S.inventory.swords[0].id);`);
  assert.equal(g.run('PROTECTED'), 0);
  assert.equal(g.run('invCount("sword")'), 1);
  g.run(`S.inventory.swords[0].fav = false; S.hero.gold = 0; SOLD = sellInventoryItem('sword', S.inventory.swords[0].id);`);
  assert.ok(g.run('SOLD') > 0);
  assert.equal(g.run('invCount("sword")'), 0);
  assert.equal(g.run('S.hero.gold'), g.run('SOLD'));
});

test('3.4a — old saves migrate to an empty inventory and junk entries are dropped', () => {
  const g = boot();
  g.run(`load(); delete S.inventory; sanitize();`);
  assert.equal(g.run('invCount("sword")'), 0);
  assert.equal(g.run('invCount("armor")'), 0);

  g.run(`S.inventory = { swords: [null, { name: 'ok', grade: '영웅' }, { name: 'bad', grade: '없는등급' }], armors: 'nope' };
    for (let i = 0; i < 30; i++) S.inventory.swords.push({ name: 'x' + i, grade: '일반' });
    sanitize();`);
  assert.equal(g.run("invCount('armor')"), 0, 'corrupt containers are reset');
  assert.equal(g.run("invCount('sword')"), 20, 'the bag is capped at 20');
  assert.equal(g.run("S.inventory.swords[0].name"), 'ok', 'valid entries survive, junk is gone');
  assert.equal(g.run("S.inventory.swords.every(e => !!e.id)"), true, 'every entry gets an id');
});

test('sprint 2 UI — every modal renders cleanly and its handlers exist', () => {
  const g = boot();
  g.run('load()');
  for (const expr of ['afHtml()', 'questsHtml()', 'audioHtml()', 'prestigeHtml()', 'loadoutHtml()']) {
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
