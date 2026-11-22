/*
 * PixelDungeon_simple — pure game formulas.
 *
 * No DOM, no globals, no RNG side effects: everything that depends on the
 * outside world is passed in as an argument. This lets the Node test suite
 * (tests/*.test.js) cover the exact math the browser runs.
 *
 * Loaded by index.html as a classic script before game.js (exposes window.PDCF)
 * and by the tests through CommonJS (module.exports).
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.PDCF = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  /** Round to one decimal (kept identical to game.js `r1`). */
  const r1 = (v) => Math.round(v * 10) / 10;

  /** Damage reduction from armor: soft cap at 75%. */
  function dmgReduction(def) {
    return Math.min(def / (1500 + def), 0.75);
  }

  /**
   * Damage dealt to a monster after its DEF.
   * @param {number} raw  raw damage before mitigation
   * @param {number} mDef monster defense
   * @param {number} ign  defense ignore, in percent (0-100, capped at 90)
   */
  function monsterTaken(raw, mDef, ign = 0) {
    return Math.max(1, Math.floor(raw * 300 / (300 + Math.max(0, mDef * (1 - Math.min(0.9, ign / 100))))));
  }

  /** Damage taken by the hero after DEF-based reduction. */
  function heroTaken(raw, def) {
    return Math.max(1, Math.floor(raw * (1 - dmgReduction(def))));
  }

  /**
   * Gold cost of the next training level. `t` = {base, step}.
   * Grows 2 % per level on top of the 1.38 power curve so late-game training
   * slows down instead of being a straight line of cheap levels.
   */
  function trainCost(t, lv) {
    return Math.floor((t.base + lv * t.step + Math.pow(lv, 1.38) * 18) * Math.pow(1.02, lv));
  }

  /**
   * Total stat gained from `lv` training levels. Linear for the first `soft`
   * levels (so existing saves keep their power) and then diminishing: each extra
   * level is worth `decay` times the previous one.
   */
  function trainSum(inc, lv, soft = 100, decay = 0.995) {
    const n = Math.max(0, lv | 0), lin = Math.min(n, soft), over = Math.max(0, n - soft);
    const sat = over === 0 || decay >= 1 ? over : (1 - Math.pow(decay, over)) / (1 - decay);
    return inc * (lin + sat);
  }

  /** Gain of the next level (for the training UI preview). */
  function trainGain(inc, lv) {
    return trainSum(inc, (lv | 0) + 1) - trainSum(inc, lv | 0);
  }

  /** Prestige multiplier: +10 % per star, capped at 20 stars (+200 %). */
  function prestigeMult(stars) {
    return 1 + 0.1 * Math.min(20, Math.max(0, stars | 0));
  }

  /**
   * Gold cost of a rank-up (영웅→전설, 전설→신화). `paid` = rank-ups already
   * paid for; the very first one is free (tutorial-like).
   */
  function rankUpCost(paid, target) {
    if (!(paid | 0)) return 0;
    if (target === '전설') return 50000;
    if (target === '신화') return 200000;
    return 0;
  }

  /** Gold cost of a codex engraving level. `base` = CODEX_ENGRAVE_BASE[grade]. */
  function engraveCost(base, lv) {
    return Math.floor(base * Math.pow(1.65, lv));
  }

  /** Total forge steps of a piece of gear (+0..+10 then star/rainbow tiers). */
  function totalSteps(e) {
    if (e.starTier === 0) return e.enhanceLevel;
    if (e.starTier <= 3) return 10 + (e.starTier - 1) * 5 + e.starCount;
    if (e.starTier === 4) return 26;
    return 35; // 완성된 큰 무지개별 / completed rainbow star
  }

  /** True when the item cannot be enhanced any further. */
  function isMaxed(e) {
    if (e.grade === '일반' || e.grade === '희귀') return e.starTier === 3 && e.starCount >= 5;
    if (e.grade === '영웅' || e.grade === '전설') return e.starTier === 3 && e.starCount >= 5; // 승급 대기
    return e.starTier >= 5; // 신화 등급 큰 무지개별
  }

  /** Flat stat granted by a piece of gear. `q` = EQUIP[grade]. */
  function equipStat(e, q, isSword) {
    const step = isSword ? q.sStep : q.aStep;
    const mult = e.starTier >= 5 ? 3.5 : (1 + e.starTier * 0.35);
    return Math.floor((e.baseStat + totalSteps(e) * step) * mult);
  }

  /** Cost and success chance of the next enhancement attempt. */
  function enhanceInfo(e, q) {
    const steps = totalSteps(e);
    const cost = Math.floor(q.cost * (1 + steps * 0.45 + Math.pow(steps, 1.4) * 0.15));
    const base = Math.max(12, r1(100 - Math.min(88, q.fail + steps * 2.1)));
    return { cost, base, final: Math.min(100, r1(base + (e.pityBonus || 0))) };
  }

  /**
   * Chest grade roll.
   * @param {'sword'|'armor'|'skill'} type
   * @param {number[]} rates base rates per grade from CHEST_LV
   * @param {boolean} maxChest true when the chest is Lv.10 (legendary/mythic unlocked for gear)
   * @param {() => number} rng returns [0,1)
   * @param {string[]} grades ordered grade names
   */
  function rollGrade(type, rates, maxChest, rng = Math.random, grades = ['일반', '희귀', '영웅', '전설', '신화']) {
    let r = rates.slice();
    if (type === 'sword' || type === 'armor') {
      if (maxChest) {
        const legP = 0.1, mythP = 0.01;
        const rem = 100 - (legP + mythP); // 99.89%
        const sum = r[0] + r[1] + r[2];
        r = [r[0] / sum * rem, r[1] / sum * rem, r[2] / sum * rem, legP, mythP];
      } else {
        const sum = r[0] + r[1] + r[2];
        r = [r[0] / sum * 100, r[1] / sum * 100, r[2] / sum * 100, 0, 0];
      }
    } else if (type === 'skill') {
      const legP = Math.min(1.8, r[3] * 0.2);
      const mythP = Math.min(0.4, r[4] * 0.15);
      const lowSum = r[0] + r[1] + r[2];
      const rem = 100 - (legP + mythP);
      r = [r[0] / lowSum * rem, r[1] / lowSum * rem, r[2] / lowSum * rem, legP, mythP];
    }
    const v = rng() * 100;
    let acc = 0;
    for (let i = 0; i < 5; i++) { acc += r[i]; if (v < acc) return grades[i]; }
    return grades[0];
  }

  /**
   * Expected damage per turn with auto-cast, used by the UI DPS meter.
   * Skills always fire the strongest ready one, otherwise a basic attack is used.
   * @param {{atk:number, critRate:number, critDmg:number, runeMult?:number,
   *          skills?:{est:number, cooldown:number}[], turns?:number}} o
   */
  function estimateDps(o) {
    const atk = o.atk || 0;
    const critRate = o.critRate || 0;
    const critDmg = o.critDmg || 0;
    const runeMult = o.runeMult == null ? 1 : o.runeMult;
    const skills = (o.skills || []).filter((s) => s && s.est > 0);
    const turns = Math.max(1, o.turns || 12);
    const basic = atk * (1 + (critRate / 100) * (critDmg / 100 - 1)) * runeMult;
    const cds = skills.map(() => 0);
    let total = 0;
    for (let t = 0; t < turns; t++) {
      let best = -1, bestDmg = -1;
      for (let i = 0; i < skills.length; i++) {
        if (cds[i] <= 0 && skills[i].est > bestDmg) { best = i; bestDmg = skills[i].est; }
      }
      if (best >= 0) { total += bestDmg; cds[best] = Math.max(1, skills[best].cooldown || 1); }
      else { total += basic; }
      for (let i = 0; i < cds.length; i++) cds[i]--;
    }
    return total / turns;
  }

  /** Shallow merge of a stored save over a fresh default state. */
  function mergeSave(def, saved) {
    if (!saved || typeof saved !== 'object') return def;
    if (!saved.hero || typeof saved.hero !== 'object') return def;
    return Object.assign({}, def, saved, { hero: Object.assign({}, def.hero, saved.hero) });
  }

  /**
   * Offline farming window.
   * Returns how many battles the player "farmed" while away (50% efficiency by
   * default, 8h cap, 5min grace period) without touching the game state.
   */
  function offlineProgress(o = {}) {
    const capMs = o.capMs == null ? 8 * 3600 * 1000 : o.capMs;
    const minMs = o.minMs == null ? 5 * 60 * 1000 : o.minMs;
    const avgBattleMs = o.avgBattleMs || 9000;
    const efficiency = o.efficiency == null ? 0.5 : o.efficiency;
    const lastSeen = o.lastSeen || 0;
    const now = o.now || 0;
    const awayMs = Math.max(0, now - lastSeen);
    if (!lastSeen || awayMs < minMs) return { awayMs, capped: false, battles: 0, effectiveMs: 0 };
    const effectiveMs = Math.min(awayMs, capMs);
    const battles = Math.floor((effectiveMs / avgBattleMs) * efficiency);
    return { awayMs, capped: awayMs > capMs, battles, effectiveMs };
  }

  // --- Statuses (3.3) ----------------------------------------------------
  const STATUS_DEFS = {
    poison: { turns: 3, pct: 5, label: '독' },
    burn: { turns: 3, pct: 4, label: '화상' },
    freeze: { turns: 1, pct: 0, label: '빙결' },
    stun: { turns: 1, pct: 0, label: '기절' },
  };

  /**
   * Roll a status effect for a skill hit. `r` in [0,1); `resist` (0..1) makes
   * bosses shake off part of the chance.
   */
  function rollStatus(r, resist = 0) {
    const roll = r * (1 + Math.max(0, resist));
    if (roll < 0.12) return 'poison';
    if (roll < 0.22) return 'burn';
    if (roll < 0.27) return 'freeze';
    if (roll < 0.32) return 'stun';
    return null;
  }

  /** Adds/refreshes a status in a {kind: {turns, pct}} bag. */
  function addStatus(statuses, kind) {
    const def = STATUS_DEFS[kind];
    if (!def) return statuses || {};
    const bag = { ...(statuses || {}) };
    const cur = bag[kind];
    bag[kind] = { turns: Math.max(def.turns, cur ? cur.turns : 0), pct: def.pct };
    return bag;
  }

  /**
   * Ticks every status once: returns the damage dealt, the surviving statuses and
   * whether the monster loses its turn (freeze / stun).
   */
  function statusTick(statuses, maxHp) {
    const bag = statuses || {};
    let damage = 0, skip = false;
    const next = {};
    for (const [kind, st] of Object.entries(bag)) {
      if (!st || st.turns <= 0) continue;
      damage += Math.floor((maxHp * (st.pct || 0)) / 100);
      if (kind === 'freeze' || kind === 'stun') skip = true;
      if (st.turns - 1 > 0) next[kind] = { ...st, turns: st.turns - 1 };
    }
    return { damage, statuses: next, skip };
  }

  // --- Boss patterns (3.3) ----------------------------------------------
  /** shield every 4 turns, heal once below 50 %, enrage once below 30 %, summon every 5 turns. */
  function patternStep(m) {
    const p = m && m.pattern;
    const hpPct = m && m.maxHp > 0 ? m.hp / m.maxHp : 1;
    if (p === 'heal' && !m.healed && hpPct <= 0.5) return { action: 'heal', heal: Math.floor(m.maxHp * 0.08) };
    if (p === 'enrage' && !m.enraged && hpPct <= 0.3) return { action: 'enrage' };
    if (p === 'shield' && m.turn > 0 && m.turn % 5 === 0) return { action: 'shield', shield: Math.floor(m.maxHp * 0.08) };
    if (p === 'summon' && m.turn > 0 && m.turn % 5 === 0 && (m.minions | 0) < 3) return { action: 'summon', minions: (m.minions | 0) + 1 };
    return { action: 'attack' };
  }

  // --- Auto-cast rules (3.2) --------------------------------------------
  /** rule: 'always' | 'bossOnly' | 'burst' (burst = only below 50 % monster HP). */
  function autoCastAllowed(rule, m) {
    if (!rule || rule === 'always') return true;
    if (rule === 'bossOnly') return !!(m && m.isBoss);
    if (rule === 'burst') return !!(m && m.maxHp > 0 && m.hp / m.maxHp <= 0.5);
    return true;
  }

  /**
   * Auto-farm stop check. Returns a reason code ('battles' | 'gold' | 'keys' | 'hp')
   * or null when the farm should keep going. `0` disables a condition.
   */
  function farmStopReason(a) {
    if (!a || !a.on) return null;
    const done = a.done | 0;
    if (a.maxBattles > 0 && done >= a.maxBattles) return 'battles';
    if (a.stopGold > 0 && a.gold >= a.stopGold) return 'gold';
    if (a.stopKeys > 0 && a.keys >= a.stopKeys) return 'keys';
    if (a.stopHpPct > 0 && a.maxHp > 0 && (a.hp / a.maxHp) * 100 < a.stopHpPct) return 'hp';
    return null;
  }

  // --- Daily quests -------------------------------------------------------
  const DAILY_POOL = [
    { id: 'forge', target: 5 },
    { id: 'chest', target: 10 },
    { id: 'battle', target: 15 },
    { id: 'train', target: 5 },
    { id: 'rune', target: 3 },
  ];

  /** 'YYYY-MM-DD' in local time (daily reset boundary). */
  function dailyDateKey(d = new Date()) {
    const p = (n) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }

  /** Deterministic 3-quest rotation for a given day (same date => same quests). */
  function pickDailyQuests(dateKey, pool = DAILY_POOL, count = 3) {
    let h = 0;
    for (const ch of String(dateKey || '')) h = (h * 31 + ch.charCodeAt(0)) % 100000;
    const n = pool.length, out = [];
    for (let i = 0; i < Math.min(count, n); i++) out.push(pool[(h + i) % n]);
    return out;
  }

  /** Consecutive-login streak update. Same day => unchanged. */
  function streakNext(s, today) {
    const count = (s && s.count) | 0, last = (s && s.last) || '';
    if (last === today) return { count: Math.max(1, count), last: today, changed: false };
    let next = 1;
    if (last) {
      const a = Date.parse(last + 'T00:00:00Z'), b = Date.parse(today + 'T00:00:00Z');
      if (Number.isFinite(a) && Number.isFinite(b) && Math.round((b - a) / 86400000) === 1) next = Math.min(7, count + 1);
    }
    return { count: next, last: today, changed: true };
  }

  /** Auto-forge stop condition. goal: 'max' | '+10' */
  function forgeGoalReached(e, goal) {
    if (goal === '+10') return e.starTier > 0 || e.enhanceLevel >= 10;
    return isMaxed(e);
  }

  return {
    r1, dmgReduction, monsterTaken, heroTaken, trainCost, trainSum, trainGain, prestigeMult, rankUpCost, engraveCost, totalSteps,
    isMaxed, equipStat, enhanceInfo, rollGrade, estimateDps, mergeSave, forgeGoalReached, offlineProgress, farmStopReason, STATUS_DEFS, rollStatus, addStatus, statusTick, patternStep, autoCastAllowed, DAILY_POOL, dailyDateKey, pickDailyQuests, streakNext,
  };
});
