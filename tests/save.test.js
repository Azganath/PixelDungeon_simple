'use strict';
/*
 * Save migration tests (tarea 1.0): a V7 save must survive being merged over
 * the defaults without losing progress or crashing on missing fields.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const CF = require('../src/core/formulas.js');

const fixture = () => JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures', 'save-v7.json'), 'utf8'));

// Same shape as defaultState() in game.js (only the fields the tests care about).
const defaults = () => ({
  hero: {
    name: 'Foer', maxHp: 140, hp: 140, baseAtk: 14, baseDef: 5, gold: 500, keys: 5, potionCooldown: 0,
    statLevels: { atk: 0, def: 0, maxHp: 0, critRate: 0, critDmg: 0, bossDmg: 0, dropRate: 0 },
    sword: { name: '청동 검', grade: '일반', baseStat: 6, sellPrice: 30, enhanceLevel: 0, starTier: 0, starCount: 0, pityBonus: 0 },
    armor: { name: '천 갑옷', grade: '일반', baseStat: 5, sellPrice: 30, enhanceLevel: 0, starTier: 0, starCount: 0, pityBonus: 0 },
    skills: [], equippedSkills: [], autoCast: true, rainbowShards: 0,
  },
  chestLevel: 1, chestExp: 0, stage: 1, maxStage: 1, battleSpeed: 1, world: 'normal',
  battle: { inBattle: false, isRaid: false, raidTurnsLeft: 15, monster: null, turn: 1, isPlayerTurn: true },
});

test('V7 fixture merges without losing progress', () => {
  const s = CF.mergeSave(defaults(), fixture());
  assert.equal(s.hero.gold, 18450);
  assert.equal(s.hero.keys, 12);
  assert.equal(s.stage, 23);
  assert.equal(s.maxStage, 27);
  assert.equal(s.battleSpeed, 2);
  assert.equal(s.hero.sword.enhanceLevel, 7);
  assert.equal(s.hero.sword.pityBonus, 12.5);
  assert.equal(s.hero.skills.length, 1);
  assert.equal(s.hero.skills[0].level, 3);
});

test('missing fields fall back to defaults', () => {
  const partial = { hero: { gold: 42 }, stage: 9 };
  const s = CF.mergeSave(defaults(), partial);
  assert.equal(s.hero.gold, 42);
  assert.equal(s.hero.keys, 5);            // default kept
  assert.equal(s.hero.autoCast, true);     // default kept
  assert.equal(s.stage, 9);
  assert.equal(s.battleSpeed, 1);          // default kept
});

test('corrupt or empty saves fall back to a fresh state', () => {
  assert.deepEqual(CF.mergeSave(defaults(), null), defaults());
  assert.deepEqual(CF.mergeSave(defaults(), 'not-an-object'), defaults());
  assert.deepEqual(CF.mergeSave(defaults(), {}), defaults());
});
