'use strict';
/*
 * Formula tests — tarea 1.0 del plan de implementación.
 * Run with: npm test   (node --test tests/)
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const CF = require('../src/core/formulas.js');

const GRADES = ['일반', '희귀', '영웅', '전설', '신화'];

test('dmgReduction: monotonic, capped at 75%', () => {
  assert.equal(CF.dmgReduction(0), 0);
  assert.equal(CF.dmgReduction(1500), 0.5);
  assert.equal(CF.dmgReduction(100000), 0.75);
  assert.ok(CF.dmgReduction(500) < CF.dmgReduction(900));
});

test('monsterTaken: applies DEF and defense-ignore', () => {
  assert.equal(CF.monsterTaken(100, 0), 100);
  assert.equal(CF.monsterTaken(100, 300), 50);
  assert.equal(CF.monsterTaken(100, 300, 100), 90); // ignore capped at 90%
  assert.equal(CF.monsterTaken(0, 300), 1);          // never below 1
});

test('heroTaken: uses hero DEF reduction', () => {
  assert.equal(CF.heroTaken(100, 0), 100);
  assert.equal(CF.heroTaken(100, 1500), 50);
  assert.equal(CF.heroTaken(1, 1500), 1);
});

test('trainCost: known values, 2 %/level growth and monotonicity', () => {
  const t = { base: 100, step: 50 };
  assert.equal(CF.trainCost(t, 0), 100, 'level 0 is untouched by the growth factor');
  assert.equal(CF.trainCost(t, 1), 171);
  assert.equal(CF.trainCost(t, 10), 1257);
  assert.ok(CF.trainCost(t, 101) > CF.trainCost(t, 100));
  // the growth factor compounds: level 100 costs ~7x the old linear curve
  const linear = (lv) => Math.floor(t.base + lv * t.step + Math.pow(lv, 1.38) * 18);
  assert.ok(CF.trainCost(t, 100) / linear(100) > 6, 'late training is meaningfully slower');
  assert.ok(Math.abs(CF.trainCost(t, 100) - linear(100) * Math.pow(1.02, 100)) <= 10, 'growth factor is applied to the whole curve');
});

test('trainSum: linear for the first 100 levels, diminishing afterwards', () => {
  assert.equal(CF.trainSum(13, 0), 0);
  assert.equal(CF.trainSum(13, 50), 650, 'existing saves keep their power');
  assert.equal(CF.trainSum(13, 100), 1300);
  const at200 = CF.trainSum(13, 200);
  assert.ok(at200 > 1300 && at200 < 2600, `level 200 is worth less than double 100 (${at200})`);
  assert.ok(CF.trainGain(13, 150) < CF.trainGain(13, 100));
  assert.ok(CF.trainGain(13, 150) > 0);
  assert.equal(CF.trainGain(13, 99), 13, 'still flat right before the soft cap');
});

test('prestigeMult: +10 % per star capped at 20 stars', () => {
  assert.equal(CF.prestigeMult(0), 1);
  assert.equal(CF.prestigeMult(1), 1.1);
  assert.equal(CF.prestigeMult(10).toFixed(1), '2.0');
  assert.equal(CF.prestigeMult(20), 3);
  assert.equal(CF.prestigeMult(99), 3, 'hard cap at +200 %');
  assert.equal(CF.prestigeMult(-5), 1, 'negative stars are clamped');
});

test('rankUpCost: first rank-up free, then 50k / 200k', () => {
  assert.equal(CF.rankUpCost(0, '전설'), 0);
  assert.equal(CF.rankUpCost(0, '신화'), 0);
  assert.equal(CF.rankUpCost(1, '전설'), 50000);
  assert.equal(CF.rankUpCost(3, '신화'), 200000);
  assert.equal(CF.rankUpCost(3, '일반'), 0);
});

test('engraveCost: 1.65x per level', () => {
  assert.equal(CF.engraveCost(300, 0), 300);
  assert.equal(CF.engraveCost(300, 1), 495);
  assert.equal(CF.engraveCost(12000, 5), 146757);
});

test('totalSteps: forge progression table', () => {
  assert.equal(CF.totalSteps({ starTier: 0, enhanceLevel: 7 }), 7);
  assert.equal(CF.totalSteps({ starTier: 1, starCount: 3 }), 13);
  assert.equal(CF.totalSteps({ starTier: 2, starCount: 2 }), 17);
  assert.equal(CF.totalSteps({ starTier: 3, starCount: 5 }), 25);
  assert.equal(CF.totalSteps({ starTier: 4, starCount: 1 }), 26);
  assert.equal(CF.totalSteps({ starTier: 5, starCount: 1 }), 35);
});

test('isMaxed: grade-dependent ceiling', () => {
  assert.equal(CF.isMaxed({ grade: '일반', starTier: 3, starCount: 5 }), true);
  assert.equal(CF.isMaxed({ grade: '일반', starTier: 3, starCount: 4 }), false);
  assert.equal(CF.isMaxed({ grade: '영웅', starTier: 3, starCount: 5 }), true); // 대기: 승급 가능
  assert.equal(CF.isMaxed({ grade: '신화', starTier: 3, starCount: 5 }), false);
  assert.equal(CF.isMaxed({ grade: '신화', starTier: 5 }), true);
});

test('equipStat: grows with steps and rainbow multiplier', () => {
  const q = { sStep: 2 };
  assert.equal(CF.equipStat({ baseStat: 10, starTier: 0, starCount: 0, enhanceLevel: 10 }, q, true), 30);
  assert.equal(CF.equipStat({ baseStat: 10, starTier: 5, starCount: 1, enhanceLevel: 10 }, q, true), 280);
});

test('enhanceInfo: cost grows, chance floors at 12% and pity is capped', () => {
  const q = { cost: 120, fail: 6 };
  const a = CF.enhanceInfo({ starTier: 0, enhanceLevel: 0, pityBonus: 0 }, q);
  const b = CF.enhanceInfo({ starTier: 0, enhanceLevel: 9, pityBonus: 0 }, q);
  assert.equal(a.cost, 120);
  assert.ok(b.cost > a.cost);
  const late = CF.enhanceInfo({ starTier: 3, starCount: 5, pityBonus: 0 }, q);
  assert.ok(late.base >= 12);
  const pity = CF.enhanceInfo({ starTier: 0, enhanceLevel: 0, pityBonus: 40 }, q);
  assert.equal(pity.final, Math.min(100, CF.r1(pity.base + 40)));
});

test('rollGrade: sword chest below Lv.10 never drops legendary/mythic', () => {
  const rates = [60, 30, 10, 4, 1];
  for (let i = 0; i < 500; i++) {
    const g = CF.rollGrade('sword', rates, false, Math.random, GRADES);
    assert.ok(g === '일반' || g === '희귀' || g === '영웅', `unexpected grade ${g}`);
  }
});

test('rollGrade: Lv.10 chest unlocks legendary/mythic with tiny odds', () => {
  const rates = [60, 30, 10, 4, 1];
  // rng just under 100 -> last bucket (mythic) at Lv.10
  assert.equal(CF.rollGrade('sword', rates, true, () => 0.99999, GRADES), '신화');
  assert.equal(CF.rollGrade('sword', rates, true, () => 0, GRADES), '일반');
});

test('rollGrade: skill chest keeps legendary/mythic rare', () => {
  const rates = [60, 30, 10, 4, 1];
  let legends = 0;
  const runs = 20000;
  for (let i = 0; i < runs; i++) if (CF.rollGrade('skill', rates, false, Math.random, GRADES) === '전설') legends++;
  const pct = (legends / runs) * 100;
  assert.ok(pct < 2.2, `legendary rate too high: ${pct}%`);
});

test('estimateDps: basic attack expectation with crits', () => {
  assert.equal(CF.estimateDps({ atk: 100, critRate: 0, critDmg: 150 }), 100);
  assert.equal(CF.estimateDps({ atk: 100, critRate: 50, critDmg: 200 }), 150);
  assert.equal(CF.estimateDps({ atk: 100, critRate: 10, critDmg: 150, runeMult: 1.5 }), 157.5);
});

test('estimateDps: skills replace basic attacks while ready', () => {
  assert.equal(CF.estimateDps({ atk: 0, critRate: 0, critDmg: 150, skills: [{ est: 1000, cooldown: 2 }] }), 500);
  assert.equal(CF.estimateDps({ atk: 100, critRate: 0, critDmg: 150, skills: [{ est: 1000, cooldown: 1 }] }), 1000);
  // A weaker skill never wins over a stronger ready one.
  const dps = CF.estimateDps({ atk: 0, critRate: 0, critDmg: 150, skills: [{ est: 900, cooldown: 3 }, { est: 100, cooldown: 1 }] });
  assert.ok(dps >= 100 && dps <= 900);
});

test('mergeSave: defaults survive a partial/corrupt save', () => {
  const def = { hero: { gold: 500, keys: 5 }, stage: 1 };
  assert.deepEqual(CF.mergeSave(def, null), def);
  assert.deepEqual(CF.mergeSave(def, { foo: 1 }), def); // no hero -> defaults
  const merged = CF.mergeSave(def, { hero: { gold: 900 }, stage: 7, extra: true });
  assert.equal(merged.hero.gold, 900);
  assert.equal(merged.hero.keys, 5);
  assert.equal(merged.stage, 7);
  assert.equal(merged.extra, true);
});

test('forgeGoalReached: +10 target vs max target', () => {
  assert.equal(CF.forgeGoalReached({ grade: '일반', starTier: 0, enhanceLevel: 9 }, '+10'), false);
  assert.equal(CF.forgeGoalReached({ grade: '일반', starTier: 0, enhanceLevel: 10 }, '+10'), true);
  assert.equal(CF.forgeGoalReached({ grade: '일반', starTier: 1, starCount: 1 }, '+10'), true);
  assert.equal(CF.forgeGoalReached({ grade: '일반', starTier: 1, starCount: 1 }, 'max'), false);
  assert.equal(CF.forgeGoalReached({ grade: '신화', starTier: 5 }, 'max'), true);
});

test('offlineProgress: grace period, efficiency, 8h cap and clock changes', () => {
  const h = 3600 * 1000;
  assert.deepEqual(CF.offlineProgress({ lastSeen: 1000, now: 1000 + 3 * 60 * 1000 }),
    { awayMs: 3 * 60 * 1000, capped: false, battles: 0, effectiveMs: 0 });
  assert.equal(CF.offlineProgress({ lastSeen: 1000, now: 1000 + h }).battles, 200);
  const day = CF.offlineProgress({ lastSeen: 1000, now: 1000 + 24 * h });
  assert.equal(day.capped, true);
  assert.equal(day.effectiveMs, 8 * h);
  assert.equal(day.battles, 1600);
  // clock going backwards / first launch must never award progress
  assert.equal(CF.offlineProgress({ lastSeen: 5000, now: 1000 }).battles, 0);
  assert.equal(CF.offlineProgress({ lastSeen: 0, now: 999999 }).battles, 0);
  // efficiency and battle length are configurable
  assert.equal(CF.offlineProgress({ lastSeen: 1, now: 1 + h, efficiency: 1, avgBattleMs: 60000 }).battles, 60);
});

test('farmStopReason: every condition and the disabled cases', () => {
  const base = { on: true, done: 0, maxBattles: 0, stopGold: 0, stopKeys: 0, stopHpPct: 0, hp: 100, maxHp: 100, gold: 0, keys: 0 };
  assert.equal(CF.farmStopReason(base), null, 'nothing configured -> keep farming');
  assert.equal(CF.farmStopReason({ ...base, on: false }), null, 'off -> no stop');
  assert.equal(CF.farmStopReason({ ...base, maxBattles: 5, done: 5 }), 'battles');
  assert.equal(CF.farmStopReason({ ...base, maxBattles: 5, done: 4 }), null);
  assert.equal(CF.farmStopReason({ ...base, stopGold: 1000, gold: 1000 }), 'gold');
  assert.equal(CF.farmStopReason({ ...base, stopGold: 1000, gold: 999 }), null);
  assert.equal(CF.farmStopReason({ ...base, stopKeys: 3, keys: 3 }), 'keys');
  assert.equal(CF.farmStopReason({ ...base, stopHpPct: 30, hp: 29, maxHp: 100 }), 'hp');
  assert.equal(CF.farmStopReason({ ...base, stopHpPct: 30, hp: 30, maxHp: 100 }), null);
});

test('daily quests: deterministic rotation, stable per day, 3 unique quests', () => {
  const ids = (d) => CF.pickDailyQuests(d).map((q) => q.id);
  assert.deepEqual(ids('2026-11-22'), ids('2026-11-22'));
  assert.notDeepEqual(ids('2026-11-22'), ids('2026-11-23'));
  for (const d of ['2026-01-01', '2026-06-15', '2026-12-31', '2027-02-28']) {
    const list = ids(d);
    assert.equal(list.length, 3);
    assert.equal(new Set(list).size, 3, `duplicate dailies on ${d}`);
  }
  assert.match(CF.dailyDateKey(new Date(2026, 0, 5)), /^2026-01-05$/);
});

test('streakNext: same day, consecutive day, gap and weekly cap', () => {
  assert.deepEqual(CF.streakNext({ count: 3, last: '2026-11-22' }, '2026-11-22'),
    { count: 3, last: '2026-11-22', changed: false });
  assert.deepEqual(CF.streakNext({ count: 3, last: '2026-11-22' }, '2026-11-23'),
    { count: 4, last: '2026-11-23', changed: true });
  assert.deepEqual(CF.streakNext({ count: 3, last: '2026-11-20' }, '2026-11-23'),
    { count: 1, last: '2026-11-23', changed: true }, 'a missed day resets the streak');
  assert.equal(CF.streakNext({ count: 7, last: '2026-11-22' }, '2026-11-23').count, 7, 'capped at 7');
  assert.equal(CF.streakNext({ count: 0, last: '' }, '2026-11-23').count, 1, 'first login');
});

test('rollStatus: weights, boss resist and the null case', () => {
  assert.equal(CF.rollStatus(0.05), 'poison');
  assert.equal(CF.rollStatus(0.15), 'burn');
  assert.equal(CF.rollStatus(0.25), 'freeze');
  assert.equal(CF.rollStatus(0.30), 'stun');
  assert.equal(CF.rollStatus(0.45), null);
  assert.equal(CF.rollStatus(0.15, 0.5), 'freeze', 'boss resist pushes the roll up one tier');
  assert.equal(CF.rollStatus(0.4, 0.5), null, 'boss resist removes the status entirely');
  assert.equal(CF.rollStatus(0.05, 0.5), 'poison', 'the strongest tier still lands');
});

test('addStatus + statusTick: duration, damage, expiry and the skip turn', () => {
  let bag = CF.addStatus({}, 'poison');
  assert.deepEqual(bag.poison, { turns: 3, pct: 5 });
  bag = CF.addStatus(bag, 'poison');
  assert.equal(bag.poison.turns, 3, 'refreshing keeps the max duration');

  let tick = CF.statusTick(bag, 1000);
  assert.equal(tick.damage, 50, '5 % of max HP');
  assert.equal(tick.statuses.poison.turns, 2);
  tick = CF.statusTick(tick.statuses, 1000);
  tick = CF.statusTick(tick.statuses, 1000);
  assert.deepEqual(tick.statuses, {}, 'expires after 3 ticks');
  assert.equal(CF.statusTick({}, 100).damage, 0);

  const frozen = CF.statusTick(CF.addStatus({}, 'freeze'), 100);
  assert.equal(frozen.skip, true, 'freeze costs the monster its turn');
  assert.equal(CF.statusTick(CF.addStatus({}, 'poison'), 100).skip, false);
});

test('patternStep: shield / heal / enrage / summon triggers and cooldowns', () => {
  assert.deepEqual(CF.patternStep({ pattern: 'shield', turn: 5, hp: 100, maxHp: 100 }), { action: 'shield', shield: 8 });
  assert.deepEqual(CF.patternStep({ pattern: 'shield', turn: 4, hp: 100, maxHp: 100 }), { action: 'attack' });
  assert.deepEqual(CF.patternStep({ pattern: 'heal', hp: 49, maxHp: 100 }), { action: 'heal', heal: 8 });
  assert.deepEqual(CF.patternStep({ pattern: 'heal', hp: 60, maxHp: 100 }), { action: 'attack' });
  assert.deepEqual(CF.patternStep({ pattern: 'heal', hp: 20, maxHp: 100, healed: 1 }), { action: 'attack' }, 'heals only once');
  assert.deepEqual(CF.patternStep({ pattern: 'enrage', hp: 20, maxHp: 100 }), { action: 'enrage' });
  assert.deepEqual(CF.patternStep({ pattern: 'enrage', hp: 80, maxHp: 100 }), { action: 'attack' });
  assert.deepEqual(CF.patternStep({ pattern: 'summon', turn: 5, hp: 100, maxHp: 100, minions: 0 }), { action: 'summon', minions: 1 });
  assert.deepEqual(CF.patternStep({ pattern: 'summon', turn: 5, hp: 100, maxHp: 100, minions: 3 }), { action: 'attack' }, 'max 3 minions');
  assert.deepEqual(CF.patternStep({ pattern: null, turn: 5, hp: 10, maxHp: 100 }), { action: 'attack' }, 'normal monsters never use patterns');
});

test('autoCastAllowed: always, bossOnly and burst rules', () => {
  assert.equal(CF.autoCastAllowed('always', { isBoss: false }), true);
  assert.equal(CF.autoCastAllowed(undefined, {}), true);
  assert.equal(CF.autoCastAllowed('bossOnly', { isBoss: false }), false);
  assert.equal(CF.autoCastAllowed('bossOnly', { isBoss: true }), true);
  assert.equal(CF.autoCastAllowed('burst', { hp: 40, maxHp: 100 }), true);
  assert.equal(CF.autoCastAllowed('burst', { hp: 80, maxHp: 100 }), false);
  assert.equal(CF.autoCastAllowed('burst', { hp: 50, maxHp: 100 }), true, '50 % counts as burst');
});
