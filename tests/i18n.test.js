const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const I18N = require('../src/i18n/index.js');

const ROOT = path.join(__dirname, '..');
const readJSON = (f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'src', 'i18n', f), 'utf8'));
const ko = readJSON('ko.json');
const en = readJSON('en.json');
const es = readJSON('es.json');

const fresh = () => { I18N.reset(); I18N.load({ ko, en, es }); I18N.setLang('ko'); return I18N; };

test('T1 — resolves current language, then Korean, then the fallback', () => {
  const i = fresh();
  assert.equal(i.t('ui.common.close', 'fallback'), ko['ui.common.close']);
  i.setLang('es');
  assert.equal(i.t('ui.common.close', 'fallback'), es['ui.common.close']);
  // key missing in the active language but present in Korean
  i.load({ ko: { 'only.ko': '한국어' }, es: {} });
  assert.equal(i.t('only.ko', 'fallback'), '한국어');
  // unknown everywhere -> fallback, or the key itself when there is no fallback
  assert.equal(i.t('nope.key', '오류 {n}', { n: 7 }), '오류 7');
  assert.equal(i.t('nope.key'), 'nope.key');
});

test('T1 — interpolation, coverage and the missing-key log', () => {
  const i = fresh();
  assert.match(i.t('ui.offline.keys', '', { n: '1,200' }), /1,200/, 'ko interpolates');
  i.setLang('es');
  assert.match(i.t('ui.offline.keys', '', { n: '1,200' }), /1,200/, 'es interpolates');
  i.setLang('en');
  assert.match(i.t('ui.quests.daily', '', { date: '2026-11-22' }), /2026-11-22/);
  assert.equal(i.coverage('en'), Object.keys(en).length);
  assert.equal(i.coverage('ko'), Object.keys(ko).length);

  i.reset(); i.load({ ko: {}, en: {}, es: {} });
  i.t('a.b', 'x'); i.t('a.b', 'x'); i.t('c.d', 'y');
  assert.deepEqual(i.missing, ['a.b', 'c.d'], 'each missing key is logged once');
});

test('T1 — setLang rejects unknown languages and keeps the previous one', () => {
  const i = fresh();
  assert.equal(i.setLang('es'), true);
  assert.equal(i.setLang('fr'), false);
  assert.equal(i.lang, 'es');
  for (const l of I18N.LANGS) assert.equal(i.setLang(l), true);
});

test('T1 — dictionaries are in sync (same keys, no Korean left in en/es)', () => {
  const koKeys = Object.keys(ko).sort();
  assert.deepEqual(Object.keys(en).sort(), koKeys);
  assert.deepEqual(Object.keys(es).sort(), koKeys);
  const hangul = /[\u3131-\u318E\uAC00-\uD7A3]/;
  for (const [lang, dict] of [['en', en], ['es', es]]) {
    const leftovers = Object.entries(dict).filter(([, v]) => hangul.test(v)).map(([k]) => k);
    assert.deepEqual(leftovers, [], `${lang} has untranslated Korean strings`);
  }
  for (const k of koKeys) {
    assert.ok(en[k].trim() && es[k].trim(), `${k} must not be empty`);
  }
});

test('T1 — every txt() key used in game.js exists in ko.json', () => {
  const src = fs.readFileSync(path.join(ROOT, 'game.js'), 'utf8');
  const used = new Set([...src.matchAll(/txt\('([A-Za-z0-9_.]+)'/g)].map((m) => m[1]).filter((k) => !k.endsWith('.')));
  assert.ok(used.size > 40, `expected many keyed strings, found ${used.size}`);
  const missing = [...used].filter((k) => !(k in ko));
  assert.deepEqual(missing, [], 'these keys would silently fall back to Korean');
  // dynamic keys: ui.audio.test.<name>
  for (const n of ['hit', 'crit', 'win', 'lose', 'chest', 'levelup']) {
    assert.ok(`ui.audio.test.${n}` in ko, `ui.audio.test.${n} missing`);
    assert.ok(`ui.audio.test.${n}` in en && `ui.audio.test.${n}` in es);
  }
});

test('T1 — generated bundle is current and covers the whole auto extraction', () => {
  const bundle = fs.readFileSync(path.join(ROOT, 'src', 'i18n', 'strings.js'), 'utf8');
  assert.match(bundle, /window\.I18N_DATA = /);
  const data = JSON.parse(bundle.slice(bundle.indexOf('{'), bundle.lastIndexOf('}') + 1));
  const auto = readJSON('ko.auto.json');
  assert.ok(Object.keys(auto).length >= 900, 'auto extraction inventory');
  const missing = Object.keys(auto).filter((k) => !(k in data.ko));
  assert.deepEqual(missing.slice(0, 5), [], 'auto keys must be bundled');
  assert.deepEqual(Object.keys(data.en).sort(), Object.keys(ko).sort());
});
