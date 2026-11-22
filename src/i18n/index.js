/**
 * i18n runtime (T1) — sin dependencias, funciona en navegador y en Node.
 *
 *   I18N.t('ui.autofarm.title', '🔁 자동 파밍')   → cadena traducida con fallback
 *   I18N.t('ui.quests.daily', '📅 오늘의 퀘스트', { date: '2026-11-22' })
 *   I18N.setLang('es')  → 'ko' | 'en' | 'es'
 *
 * Orden de resolución: idioma actual → coreano → fallback → clave.
 * Las claves no encontradas se registran en I18N.missing (una vez por clave).
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.I18N = factory(root);
})(typeof self !== 'undefined' ? self : this, function (root) {
  const LANGS = ['ko', 'en', 'es'];
  const state = { lang: 'ko', data: { ko: {}, en: {}, es: {} }, missing: [], warned: {} };

  const interpolate = (s, vars) => {
    if (!vars) return s;
    return String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] === undefined ? m : String(vars[k])));
  };

  const api = {
    LANGS,
    get lang() { return state.lang; },
    get missing() { return state.missing.slice(); },
    /** Merge dictionaries: load({ ko: {...}, en: {...}, es: {...} }) */
    load(data) {
      for (const l of LANGS) {
        if (data && typeof data[l] === 'object' && data[l]) state.data[l] = { ...state.data[l], ...data[l] };
      }
      return api;
    },
    setLang(lang) {
      if (!LANGS.includes(lang)) return false;
      state.lang = lang;
      if (root && root.document && root.document.documentElement) root.document.documentElement.lang = lang;
      return true;
    },
    has(key, lang = state.lang) { return !!(state.data[lang] && state.data[lang][key] !== undefined); },
    /** Translate. `fallback` is the Korean source string baked into game.js. */
    t(key, fallback, vars) {
      const current = state.data[state.lang] ? state.data[state.lang][key] : undefined;
      const base = state.data.ko ? state.data.ko[key] : undefined;
      const hit = current !== undefined && current !== null ? current : base;
      if (hit === undefined || hit === null) {
        if (!state.warned[key]) { state.warned[key] = 1; state.missing.push(key); }
        return fallback === undefined || fallback === null ? key : interpolate(fallback, vars);
      }
      return interpolate(hit, vars);
    },
    /** How many curated keys a language provides (used by the language picker). */
    coverage(lang) { return Object.keys(state.data[lang] || {}).length; },
    keys() { return Object.keys(state.data.ko || {}); },
    reset() { state.lang = 'ko'; state.data = { ko: {}, en: {}, es: {} }; state.missing = []; state.warned = {}; },
  };

  if (root && typeof root.I18N_DATA === 'object' && root.I18N_DATA) api.load(root.I18N_DATA);
  return api;
});
