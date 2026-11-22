#!/usr/bin/env node
/**
 * Empaqueta los diccionarios JSON en un solo script clásico (src/i18n/strings.js)
 * para que el juego funcione también abriendo index.html desde file:// sin fetch.
 *
 *   ko = { ...ko.auto.json, ...ko.json }   // el diccionario curado gana
 *   en / es = { ...curated }               // las claves auto caen a coreano
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'src', 'i18n');
const read = (f, fallback = {}) => {
  const p = path.join(DIR, f);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : fallback;
};

const koCurated = read('ko.json');
const koAuto = read('ko.auto.json');
const en = read('en.json');
const es = read('es.json');
const ko = { ...koAuto, ...koCurated };

for (const [lang, dict] of Object.entries({ en, es })) {
  const unknown = Object.keys(dict).filter((k) => !(k in ko));
  if (unknown.length) throw new Error(`${lang}.json tiene claves que no existen en ko.json: ${unknown.slice(0, 5).join(', ')}`);
}

const data = { ko, en, es };
const banner = '/* GENERADO por tools/build-i18n.js — no editar a mano. Fuente: src/i18n/*.json */\n';
const out = `${banner}window.I18N_DATA = ${JSON.stringify(data, null, 1)};\n`;
fs.writeFileSync(path.join(DIR, 'strings.js'), out);

const pct = (n, total) => `${Math.round((n / total) * 100)}%`;
console.log(`ko: ${Object.keys(ko).length} claves (curadas ${Object.keys(koCurated).length} + auto ${Object.keys(koAuto).length})`);
console.log(`en: ${Object.keys(en).length} (${pct(Object.keys(en).length, Object.keys(koCurated).length)} de las curadas)`);
console.log(`es: ${Object.keys(es).length} (${pct(Object.keys(es).length, Object.keys(koCurated).length)} de las curadas)`);
console.log(`escrito src/i18n/strings.js (${(out.length / 1024).toFixed(1)} KB)`);
