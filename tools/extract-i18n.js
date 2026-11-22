#!/usr/bin/env node
/**
 * T0 — Extrae las cadenas en coreano de game.js / index.html y genera claves estables.
 *
 * Uso:  node tools/extract-i18n.js            (escribe src/i18n/ko.auto.json)
 *       node tools/extract-i18n.js --report   (solo cuenta, no escribe)
 *
 * Clave: "<ámbito>.<hash8>" donde el ámbito es la función/variable de nivel superior
 * más cercana y el hash es el de la cadena recortada → la clave no cambia si el
 * código se mueve, solo si el texto cambia (así se detectan traducciones obsoletas).
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const FILES = ['game.js', 'index.html'];
const HANGUL = /[\u3131-\u318E\uAC00-\uD7A3]/;

const hash8 = (txt) => crypto.createHash('sha1').update(txt).digest('hex').slice(0, 8);
const scopeOf = (line) => {
  const m = line.match(/^(?:async\s+)?function\s+([A-Za-z0-9_$]+)/) || line.match(/^(?:const|let|var)\s+([A-Za-z0-9_$]+)\s*=/);
  return m ? m[1] : null;
};

function stringsIn(source, isHtml) {
  const out = [];
  let scope = 'global';
  const lines = source.split('\n');
  for (const line of lines) {
    const sc = scopeOf(line.trim());
    if (sc) scope = sc;
    if (!HANGUL.test(line)) continue;
    // literales '...' / "..." / `...`
    const re = /'([^'\\]*(?:\\.[^'\\]*)*)'|"([^"\\]*(?:\\.[^"\\]*)*)"|`([^`\\]*(?:\\.[^`\\]*)*)`/g;
    let m;
    while ((m = re.exec(line))) {
      const raw = m[1] ?? m[2] ?? m[3];
      if (!raw || !HANGUL.test(raw)) continue;
      const text = raw.replace(/\\n/g, '\n').replace(/\s+/g, ' ').trim();
      if (text.length < 1) continue;
      out.push({ scope, text, html: isHtml });
    }
  }
  return out;
}

function main() {
  const report = process.argv.includes('--report');
  const entries = [];
  for (const f of FILES) {
    const p = path.join(ROOT, f);
    if (!fs.existsSync(p)) continue;
    entries.push(...stringsIn(fs.readFileSync(p, 'utf8'), f.endsWith('.html')));
  }
  const dict = {};
  for (const e of entries) {
    const key = `${e.scope}.${hash8(e.text)}`;
    if (!dict[key]) dict[key] = e.text;
  }
  const total = Object.keys(dict).length;
  const chars = Object.values(dict).reduce((a, s) => a + s.length, 0);
  console.log(`Cadenas coreanas únicas: ${total} (${entries.length} apariciones, ${chars} caracteres)`);
  if (report) return;
  const out = path.join(ROOT, 'src', 'i18n', 'ko.auto.json');
  const sorted = {};
  for (const k of Object.keys(dict).sort()) sorted[k] = dict[k];
  fs.writeFileSync(out, JSON.stringify(sorted, null, 2) + '\n');
  console.log(`Escrito ${path.relative(ROOT, out)}`);
}

if (require.main === module) main();
module.exports = { stringsIn, hash8 };
