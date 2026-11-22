# PixelDungeon_simple — Implementation Plan + Translation Plan / Plan de Implementación + Plan de Traducción

> **Bilingual / Bilingüe:** Every section in **Spanish (ES)** first, **English (EN)** second. / Cada sección en **español (ES)** primero, **inglés (EN)** después.
> Companion docs / Documentos relacionados: `PLAN_BILINGUAL.md` (analysis & roadmap) · `MEJORAS_Y_NOVEDADES.md` (improvements A1–A4, features B1–B18).
> Branch / Rama: `arena/90e76ced-pixeldungeon-simple` · Date / Fecha: 2026-11-22

---

## Table of Contents / Índice

- [Part 1 — How to Use This Plan / Cómo usar este plan](#part-1--how-to-use-this-plan--cómo-usar-este-plan)
- [Part 2 — Implementation Plan / Plan de Implementación](#part-2--implementation-plan--plan-de-implementación)
  - [Sprint 1 — Quick Wins / Victorias Rápidas](#sprint-1--quick-wins--victorias-rápidas-semanas-1-2)
  - [Sprint 2 — Core Idle / Núcleo Idle](#sprint-2--core-idle--núcleo-idle-semanas-3-5)
  - [Sprint 3 — Depth / Profundidad](#sprint-3--depth--profundidad-semanas-6-9)
  - [Sprint 4 — Content / Contenido](#sprint-4--content--contenido-semanas-10-12)
  - [Sprint 5 — Social / Social (post-v1.0)](#sprint-5--social--social-post-v10)
- [Part 3 — Translation Plan EN/ES / Plan de Traducción EN/ES](#part-3--translation-plan-enes--plan-de-traducción-enes)
- [Part 4 — Timeline, Risks & Definition of Done / Cronograma, Riesgos y Definición de Hecho](#part-4--timeline-risks--definition-of-done--cronograma-riesgos-y-definición-de-hecho)
- [Appendix A — File-by-File Change Map / Apéndice A — Mapa de Cambios por Archivo](#appendix-a--file-by-file-change-map--apéndice-a--mapa-de-cambios-por-archivo)
- [Appendix B — Full Glossary KO→EN→ES / Apéndice B — Glosario Completo KO→EN→ES](#appendix-b--full-glossary-koenenes--apéndice-b--glosario-completo-koenenes)

---

# Part 1 — How to Use This Plan / Cómo usar este plan

### ES

**Qué es este documento:** el plan ejecutable para implementar las mejoras (A1–A4) y novedades (B1–B18) de `MEJORAS_Y_NOVEDADES.md`, más la traducción completa del juego a inglés y español. Cada tarea tiene: **ID, archivos a tocar, pasos, criterio de aceptación y test**. Está pensado para ejecutarse en orden, en esta rama, con commits pequeños.

**Principios (no negociables):**

1. **No romper saves:** todo cambio de estado pasa por `sanitize()` + migración desde `SAVE_V7`. Ningún jugador pierde progreso.
2. **No romper gameplay sin tests:** primero la red de seguridad (Sprint 1, tarea 1.0), después los cambios de balance.
3. **Un cambio = un commit = un PR:** cada tarea se entrega sola, con captura antes/después si toca UI.
4. **La traducción no cambia lógica:** i18n solo reemplaza cadenas por claves; las fórmulas no se tocan.
5. **Móvil primero:** toda UI nueva se prueba a 360 px antes que a escritorio.

**Convenciones:** `S` = esfuerzo (S < 1 día, M = 1–3 días, L = 3–5 días). `P0` = bloqueante, `P1` = importante, `P2` = deseable. Los IDs (`1.1`, `2.3`…) son estables para referenciarlos en commits/PRs.

### EN

**What this document is:** the executable plan to implement the improvements (A1–A4) and new features (B1–B18) from `MEJORAS_Y_NOVEDADES.md`, plus the full translation of the game into English and Spanish. Each task has: **ID, files to touch, steps, acceptance criterion, and test**. It is designed to be executed in order, on this branch, with small commits.

**Principles (non-negotiable):**

1. **Never break saves:** every state change goes through `sanitize()` + migration from `SAVE_V7`. No player loses progress.
2. **Never break gameplay without tests:** safety net first (Sprint 1, task 1.0), balance changes second.
3. **One change = one commit = one PR:** each task ships alone, with before/after screenshots if it touches UI.
4. **Translation never changes logic:** i18n only replaces strings with keys; formulas are untouched.
5. **Mobile first:** all new UI is tested at 360px before desktop.

**Conventions:** `S` = effort (S < 1 day, M = 1–3 days, L = 3–5 days). `P0` = blocking, `P1` = important, `P2` = nice-to-have. IDs (`1.1`, `2.3`…) are stable for referencing in commits/PRs.

---

# Part 2 — Implementation Plan / Plan de Implementación

## Estado de ejecución / Execution status

**Última actualización / Last update:** 2026-11-22 · rama / branch `arena/1ad2ad83-pixeldungeon-simple`

| Tarea / Task | Estado / Status | Evidencia / Evidence |
|---|---|---|
| **1.0** Tests + CI | ✅ Hecho / Done | `src/core/formulas.js` (14 funciones puras), `tests/formulas.test.js`, `tests/save.test.js`, `tests/game-smoke.test.js` (26 tests), `.github/workflows/ci.yml`, `npm test` / `npm run check` |
| **1.1** No perder la forja (A1.5) | ✅ Hecho / Done | `openOne()` transfiere `enhanceLevel`, `starTier`, `starCount`, `pityBonus`; banner muestra "강화 이전 +7강 → +7강" |
| **1.2** HP persistente (A1.1) | ✅ Hecho / Done | `startBattle()` ya no rellena HP (solo 30 % si entra a 0), `victory()` cura 30 %, `retreat()` no cura; test de integración |
| **1.3** Medidor de DPS (A2.3) | ✅ Hecho / Done | `dpsOf()` + `CF.estimateDps()`; visible en menú, personaje, entrenamiento y forja ("DPS 1.240 → 1.380 (+11 %)") |
| **1.4** Detener forja automática (A2.6) | ✅ Hecho / Done | `UI.forgeStop` + botón ⏹, selector de objetivo `+10`/`MAX`, banner con motivo de parada |
| **1.5** Modales propios (A2.1) | ✅ Hecho / Done | `infoModal()` / `confirmModal()`; `grep alert(` → 0, `grep confirm(` → 0; reset con doble confirmación |
| **1.6** Aviso de guardado fallido (A3.7) | ✅ Hecho / Done | `save()` muestra toast `⚠️ 세이브를 저장하지 못했습니다` (una vez por sesión) |
| **1.7** Exportar / Importar save (A4.1) | ✅ Hecho / Done | `exportSave()` (código Base64 + `.json`), `importSaveDialog()` con validación `sanitize()` y backup automático |

| **2.1** Progreso offline (B1) | ✅ Hecho / Done | `CF.offlineProgress()` puro (gracia 5 min, tope 8 h, 50 % de eficiencia) + `runOfflineProgress()` con simulación por muestreo y reporte `🌙 오프라인 수익 보고서` |
| **2.2** Auto-farm (A2.2) | ✅ Hecho / Done | `CF.farmStopReason()` + modal `🔁 자동 파밍`: contador, condiciones de parada por HP %, oro, llaves y nº de batallas; auto-avanza el resultado y se apaga al perder o volver al pueblo |
| **2.3** Tutorial + 3 diarias (D1/A1.6) | ✅ Hecho / Done | 5 pasos de tutorial con recompensa, 3 misiones diarias rotativas (`CF.pickDailyQuests`, reinicio a las 00:00), racha de conexión (`CF.streakNext`, tope 7 días) y botón de reclamo único |
| **2.4** Audio chiptune (B15/A2.7) | ✅ Hecho / Done | `sfx()` sintetiza 8 efectos con WebAudio (sin archivos), volumen persistido, throttling por nombre y silencio durante la simulación offline |
| **2.5** Rendimiento (`stats()`/`save()`) | ✅ Hecho / Done | `save()` coalescido (400 ms) con `flushSave()` en `pagehide`, `stats()` memoizado con `bumpStats()` |
| **T0** Extracción i18n | ✅ Hecho / Done | `tools/extract-i18n.js` → `src/i18n/ko.auto.json` (**911 cadenas únicas**, 24 466 caracteres) |
| **T1** Infraestructura i18n | ✅ Hecho / Done | `src/i18n/index.js` (`t()`, `setLang()`, fallback a `ko`, log de claves faltantes), `src/i18n/{ko,en,es}.json` (**86 claves curadas, 100 % traducidas en/en+es**), `S.lang` en el save + selector `🌐 언어 / Language` |

| **3.1** Prestigio / renacimiento (B3) | ✅ Hecho / Done | `S.prestige.stars` (+10 % por estrella, tope ×3), modal `🌟 프레스티지`, desbloqueo en Stage 100, reset de equipo/entrenamiento/runas conservando códice, logros, disfraces, mascotas, oro y llaves |
| **3.5** Curvas de entrenamiento + 승급 (A1.3/A1.4) | ✅ Hecho / Done | `CF.trainCost` con `1.02^lv`, `CF.trainSum` (lineal hasta Lv.100 y luego decreciente), primer 승급 gratis y después 50 000 / 200 000 G; `docs/BALANCE.md` + `tools/sim-balance.js` (200 batallas por piso, semilla fija) y guardia en CI |

**Pendiente / Pending:** **3.2** (loadouts + reglas de auto-cast), **3.3** (patrones de jefe + estados), **3.4** (inventario de equipo) y las fases i18n **T2/T3**.

**Lecciones / Lessons:** la suite pasó de 26 a **45 tests**; los cambios de UI se validan sin navegador con el arnés `vm` + DOM falso (`undefined`/`NaN` y handlers `onclick` inexistentes se detectan en CI).

> Cada tarea se puede verificar con `npm test`; los cambios de UI se revisan en el preview local (`npm run serve`).


## Sprint 1 — Quick Wins / Victorias Rápidas (Semanas 1–2)

### ES

#### 1.0 Red de seguridad: tests + CI (base de todo lo demás) — P0 · M

- **Archivos:** nuevo `package.json`, `vitest.config.js`, `tests/*.test.js`, `.github/workflows/ci.yml`, `tests/fixtures/save-v7.json`.
- **Pasos:**
  1. Extraer funciones puras de `game.js` a módulos importables sin DOM (`src/core/formulas.js`: `dmgReduction`, `monsterTaken`, `heroTaken`, `trainCost`, `engraveCost`, `rollGrade`, `enhanceInfo`, `sanitize`).
  2. Tests: daño con DEF 0/500/1500, `rollGrade` (10.000 tiradas, distribución ±2 %), `enhanceInfo` (coste/probabilidad por step), `sanitize` (save corrupto → válido).
  3. CI: `npm test` + lint en cada PR; badge en README.
- **Aceptación:** `npm test` verde; cobertura ≥ 70 % en fórmulas; un PR con test roto bloquea el merge.
- **Test manual:** cargar `save-v7.json` de ejemplo → migra sin perder oro/llaves/equipo/piso.

#### 1.1 No perder la forja al equipar (A1.5) — P0 · S

- **Archivos:** `game.js` → `openOne()` (línea ~570), `newEquip()`, modal de cofre.
- **Pasos:**
  1. Al dropear equipo de mayor grado: copiar `enhanceLevel`, `starTier`, `starCount`, `pityBonus` del actual al nuevo.
  2. Mostrar en el resultado: "✨ ¡Equipado! (forja transferida: +10 ★★★★★)".
  3. Alternativa (si se prefiere tensión): modal de confirmación "¿Equipar y perder +10?" — elegir una, no ambas.
- **Aceptación:** dropear espada superior con +10 → la nueva conserva +10; captura del modal de cofre.
- **Test:** unitario `openOne` con mock de `rollGrade` → verifica transferencia.

#### 1.2 HP persistente entre batallas (A1.1) — P0 · S

- **Archivos:** `startBattle()` (`h.hp = st.maxHp` → eliminar), `victory()` (curar +30 % del max), `defeat()` (ya cura full, mantener), `retreat()`.
- **Pasos:**
  1. `startBattle`: no curar; si `hp <= 0` al entrar, curar al 30 % (evita softlock).
  2. `victory`: `hp = min(maxHp, hp + 30% maxHp)`; mostrar "+30 % HP" en el resultado.
  3. Poción: pasa a ser decisión (cooldown 3 ya existe); añadir atajo `Q` para poción.
- **Aceptación:** ganar 3 batallas seguidas sin curar → HP baja de forma visible; poción recupera 40 %.
- **Test:** simulación headless 100 batallas → % victorias con HP persistente vs full (documentar diferencia).

#### 1.3 Medidor de DPS + comparativa (A2.3) — P0 · S

- **Archivos:** `stats()`, `skillEst()` (ya existe), `renderCharacter()`, `renderMenu()`.
- **Pasos:**
  1. `estimateDps()`: daño medio por turno = `(basic + Σ skills equipadas/cooldown) / turnos` usando `skillEst` y `basicAttack` esperado (sin RNG: usar valores medios).
  2. Mostrar DPS en pantalla de personaje y en el menú (debajo de ATK/DEF).
  3. En entrenamiento/forja/runas: "DPS: 1.240 → 1.380 (+11 %)" antes de comprar.
- **Aceptación:** cambiar una habilidad muestra el delta de DPS en la lista de habilidades.
- **Test:** unitario `estimateDps` con build conocida → valor esperado ±5 %.

#### 1.4 Botón "Detener" en forja automática (A2.6) — P0 · S

- **Archivos:** `forgeAuto()` (línea ~2470), `UI.forgeBusy`.
- **Pasos:** flag `UI.forgeStop`; botón "⏹ Detener" visible durante `forgeAuto`; el `while` chequea el flag cada iteración. Parada automática al alcanzar objetivo (selector: "+10 / ★3 / ★5 / MAX").
- **Aceptación:** iniciar ×60 y detener a los 5 intentos → banner "Detenido: 5 intentos / 2 éxitos".
- **Test manual:** forja ×60 con oro limitado → para sola al quedarse sin oro (ya funciona, verificar que no se rompe).

#### 1.5 Modales propios en vez de `alert()/confirm()` (A2.1) — P0 · M

- **Archivos:** 19 llamadas `alert` + 2 `confirm` (líneas 622–2823), `openModal()` (ya existe).
- **Pasos:**
  1. Crear `confirmModal({title, body, confirmLabel, onConfirm})` y `infoModal({title, body})` con estilo 16-bit.
  2. Reemplazar las 21 llamadas una por una (empezar por reset y retreat, que son destructivas).
  3. `reset`: doble confirmación + escribir "RESET" (evita wipe accidental).
- **Aceptación:** `grep -n "alert(\|confirm(" game.js` → 0 resultados; reset exige confirmación doble.
- **Test:** flujo completo sin diálogos nativos en móvil (Safari iOS bloquea `alert` en algunos contextos).

#### 1.6 Aviso si el guardado falla (A3.7) — P0 · S

- **Archivos:** `save()` (línea 259), toast global nuevo.
- **Pasos:** `catch` → toast "⚠️ No se pudo guardar (almacenamiento lleno). Exporta tu partida." + botón Exportar (ver 1.7). No tragar el error en silencio.
- **Aceptación:** forzar `localStorage` lleno (mock) → toast visible; sin errores en consola.

#### 1.7 Exportar / Importar save (A4.1) — P0 · S

- **Archivos:** `save()/load()`, menú principal (nuevo botón), `sanitize()`.
- **Pasos:**
  1. Exportar: descargar `pixel-dungeon-save-v7.json` (Blob) + copiar código Base64 al portapapeles.
  2. Importar: `<input type=file>` + textarea para pegar código; validar con `sanitize()` antes de aplicar; backup automático del save actual antes de importar.
  3. Botones en título y menú: "💾 Exportar / 📥 Importar".
- **Aceptación:** exportar → borrar `localStorage` → importar → progreso idéntico (test con fixture).
- **Test:** importar JSON corrupto → error amable, save actual intacto.

### EN

#### 1.0 Safety net: tests + CI (foundation for everything else) — P0 · M

- **Files:** new `package.json`, `vitest.config.js`, `tests/*.test.js`, `.github/workflows/ci.yml`, `tests/fixtures/save-v7.json`.
- **Steps:**
  1. Extract pure functions from `game.js` into DOM-free importable modules (`src/core/formulas.js`: `dmgReduction`, `monsterTaken`, `heroTaken`, `trainCost`, `engraveCost`, `rollGrade`, `enhanceInfo`, `sanitize`).
  2. Tests: damage with DEF 0/500/1500, `rollGrade` (10,000 rolls, distribution ±2%), `enhanceInfo` (cost/odds per step), `sanitize` (corrupt save → valid).
  3. CI: `npm test` + lint on every PR; badge in README.
- **Acceptance:** `npm test` green; ≥70% coverage on formulas; a PR with a failing test blocks merge.
- **Manual test:** load a sample `save-v7.json` → migrates without losing gold/keys/gear/floor.

#### 1.1 Don't lose forge progress on equip (A1.5) — P0 · S

- **Files:** `game.js` → `openOne()` (~line 570), `newEquip()`, chest modal.
- **Steps:**
  1. On higher-grade gear drop: copy `enhanceLevel`, `starTier`, `starCount`, `pityBonus` from current to new gear.
  2. Show in result: "✨ Equipped! (forge transferred: +10 ★★★★★)".
  3. Alternative (if tension is preferred): confirmation modal "Equip and lose +10?" — pick one, not both.
- **Acceptance:** drop a superior sword with +10 → the new one keeps +10; screenshot of the chest modal.
- **Test:** unit test for `openOne` with mocked `rollGrade` → verifies transfer.

#### 1.2 Persistent HP between battles (A1.1) — P0 · S

- **Files:** `startBattle()` (`h.hp = st.maxHp` → remove), `victory()` (heal +30% of max), `defeat()` (already full-heals, keep), `retreat()`.
- **Steps:**
  1. `startBattle`: don't heal; if `hp <= 0` on entry, heal to 30% (avoids softlock).
  2. `victory`: `hp = min(maxHp, hp + 30% maxHp)`; show "+30% HP" in the result.
  3. Potion becomes a decision (3-turn cooldown already exists); add `Q` shortcut for potion.
- **Acceptance:** win 3 battles in a row without healing → HP visibly drops; potion restores 40%.
- **Test:** headless simulation of 100 battles → win % with persistent HP vs full HP (document the difference).

#### 1.3 DPS meter + comparison (A2.3) — P0 · S

- **Files:** `stats()`, `skillEst()` (already exists), `renderCharacter()`, `renderMenu()`.
- **Steps:**
  1. `estimateDps()`: average damage per turn = `(basic + Σ equipped skills/cooldown) / turns` using `skillEst` and expected `basicAttack` (no RNG: use mean values).
  2. Show DPS on the character screen and in the menu (below ATK/DEF).
  3. In training/forge/runes: "DPS: 1,240 → 1,380 (+11%)" before buying.
- **Acceptance:** changing a skill shows the DPS delta in the skill list.
- **Test:** unit test for `estimateDps` with a known build → expected value ±5%.

#### 1.4 "Stop" button on auto-forge (A2.6) — P0 · S

- **Files:** `forgeAuto()` (~line 2470), `UI.forgeBusy`.
- **Steps:** `UI.forgeStop` flag; visible "⏹ Stop" button during `forgeAuto`; the `while` checks the flag each iteration. Auto-stop at target (selector: "+10 / ★3 / ★5 / MAX").
- **Acceptance:** start ×60 and stop after 5 attempts → banner "Stopped: 5 attempts / 2 successes".
- **Manual test:** ×60 forge with limited gold → stops alone when gold runs out (already works, verify it doesn't break).

#### 1.5 Custom modals instead of `alert()/confirm()` (A2.1) — P0 · M

- **Files:** 19 `alert` + 2 `confirm` calls (lines 622–2823), `openModal()` (already exists).
- **Steps:**
  1. Create `confirmModal({title, body, confirmLabel, onConfirm})` and `infoModal({title, body})` in 16-bit style.
  2. Replace the 21 calls one by one (start with reset and retreat, which are destructive).
  3. `reset`: double confirmation + typing "RESET" (prevents accidental wipe).
- **Acceptance:** `grep -n "alert(\|confirm(" game.js` → 0 results; reset requires double confirmation.
- **Test:** full flow with no native dialogs on mobile (Safari iOS blocks `alert` in some contexts).

#### 1.6 Warn if saving fails (A3.7) — P0 · S

- **Files:** `save()` (line 259), new global toast.
- **Steps:** `catch` → toast "⚠️ Could not save (storage full). Export your game." + Export button (see 1.7). Never swallow the error silently.
- **Acceptance:** force full `localStorage` (mock) → visible toast; no console errors.

#### 1.7 Export / Import save (A4.1) — P0 · S

- **Files:** `save()/load()`, main menu (new button), `sanitize()`.
- **Steps:**
  1. Export: download `pixel-dungeon-save-v7.json` (Blob) + copy Base64 code to clipboard.
  2. Import: `<input type=file>` + textarea to paste code; validate with `sanitize()` before applying; automatic backup of current save before importing.
  3. Buttons on title and menu: "💾 Export / 📥 Import".
- **Acceptance:** export → clear `localStorage` → import → identical progress (test with fixture).
- **Test:** import corrupt JSON → friendly error, current save intact.

---

## Sprint 2 — Core Idle / Núcleo Idle (Semanas 3–5)

### ES

#### 2.1 Progreso offline (B1) — P0 · M

- **Archivos:** `save()` (añadir `lastSeen`), `load()`/`init()`, nuevo modal "Mientras estabas fuera…", `skipResolve()` (reutilizar).
- **Pasos:**
  1. Guardar `lastSeen = Date.now()` en cada `save()`.
  2. Al cargar: `away = now - lastSeen`; si `away > 5 min`, simular batallas: `n = min(away / tiempo_medio_batalla, tope_8h)` con `skipResolve` en bucle (sin UI, en chunks de 50 para no bloquear).
  3. Recompensa con eficiencia 50 % (offline menos eficiente que activo) + modal resumen (oro, llaves, pisos).
  4. Tope: 8 h; mostrar "progreso offline: X/8 h" en el menú.
- **Aceptación:** cerrar 1 h → al volver, modal con oro/llaves proporcionales; cerrar 24 h → tope 8 h.
- **Test:** fixture con `lastSeen` = hace 2 h → oro esperado ±10 %; reloj hacia atrás (cambio de hora) → 0 progreso, sin crash.

#### 2.2 Auto-farm con condiciones (B2) — P0 · S

- **Archivos:** `resultNext/resultRepeat`, `S.repeatStage`, nuevo `UI.autoFarm = {on, stopHp, stopGold, stopKeys, maxBattles}`.
- **Pasos:**
  1. Toggle en menú y en pantalla de resultado: "🔁 Farm automático".
  2. Al ganar: si auto-farm activo y ninguna condición de parada → `resultRepeat` automático tras 800 ms.
  3. Condiciones: HP < 30 % (tras curación de victoria), oro ≥ objetivo, llaves ≥ objetivo, N batallas. Al parar: toast con resumen.
- **Aceptación:** activar farm en piso 5 con objetivo 10.000 G → farmea y para solo al llegar.
- **Test manual:** farm con velocidad skip → 20 batallas sin intervención; parar con ESC funciona.

#### 2.3 Tutorial + misiones diarias (B6) — P1 · M

- **Archivos:** nuevo `src/data/quests.js`, `S.quests = {done:[], daily:{date, list, claimed}}`, modal de misiones, `achievements` (extender).
- **Pasos:**
  1. Tutorial (8 misiones): piso 1 → abrir cofre → forjar 1 vez → equipar habilidad → piso 10. Cada una con flecha/toast y recompensa (oro/llaves).
  2. Diarias (3/día, rotación por fecha): forja ×5, cofres ×10, derrota 1 jefe, farmea 20 pisos. Recompensa: 5–15 llaves. Racha de login: +1 llave/día hasta 7.
  3. `sanitize()`: resetear diarias si la fecha cambió (zona horaria del navegador).
- **Aceptación:** jugador nuevo ve la misión 1 al entrar; completar 3 diarias da llaves y se resetean al día siguiente (mock de fecha).
- **Test:** fixture con fecha de ayer → diarias reseteadas; racha se incrementa.

#### 2.4 Sonido chiptune WebAudio (B15/A2.7) — P1 · M

- **Archivos:** nuevo `src/audio.js` (síntesis, sin archivos), `index.html` (toggle 🔊 en top-bar), `styles.css`.
- **Pasos:**
  1. SFX: golpe, crítico, forja (metal), cofre (arpegio), victoria (fanfarria corta). Todo con `OscillatorNode` + envolvente.
  2. Música: loop procedural por escena (título: pentatónica lenta; batalla: pulso; forja: ritmo). Volumen bajo, toggle persistido en save.
  3. `prefers-reduced-motion` no afecta audio; añadir "silencio total" para reuniones.
- **Aceptación:** toggle apaga todo; sin archivos de audio en el repo (`assets/` sin `.mp3/.wav`).
- **Test manual:** iOS Safari (requiere gesto del usuario para AudioContext → iniciar en el botón "Jugar").

#### 2.5 Cache de `stats()` + debounce de `save()` (A3.1/A3.2) — P1 · S

- **Archivos:** `stats()`, `save()`, `withHpDelta()`.
- **Pasos:**
  1. `let _statsCache = null, _statsVersion = 0`; `bumpStats()` en cada mutación de `S.hero`/bonus; `stats()` devuelve cache si la versión coincide.
  2. `save()` con debounce 500 ms + `saveNow()` en victoria/salida/`beforeunload`.
- **Aceptación:** Performance tab: tiempo de `stats()` en batalla −80 %; forja ×60 sin jank.
- **Test:** unitario: mutar oro no invalida cache; mutar `statLevels` sí.

### EN

#### 2.1 Offline progress (B1) — P0 · M

- **Files:** `save()` (add `lastSeen`), `load()`/`init()`, new "While you were away…" modal, `skipResolve()` (reuse).
- **Steps:**
  1. Store `lastSeen = Date.now()` on every `save()`.
  2. On load: `away = now - lastSeen`; if `away > 5 min`, simulate battles: `n = min(away / avg_battle_time, 8h_cap)` with `skipResolve` in a loop (no UI, in chunks of 50 to avoid blocking).
  3. Reward at 50% efficiency (offline less efficient than active) + summary modal (gold, keys, floors).
  4. Cap: 8h; show "offline progress: X/8h" in the menu.
- **Acceptance:** close for 1h → on return, modal with proportional gold/keys; close for 24h → 8h cap.
- **Test:** fixture with `lastSeen` = 2h ago → expected gold ±10%; clock going backwards → 0 progress, no crash.

#### 2.2 Auto-farm with conditions (B2) — P0 · S

- **Files:** `resultNext/resultRepeat`, `S.repeatStage`, new `UI.autoFarm = {on, stopHp, stopGold, stopKeys, maxBattles}`.
- **Steps:**
  1. Toggle in menu and result screen: "🔁 Auto-farm".
  2. On win: if auto-farm is on and no stop condition → automatic `resultRepeat` after 800ms.
  3. Conditions: HP < 30% (after victory heal), gold ≥ target, keys ≥ target, N battles. On stop: toast with summary.
- **Acceptance:** enable farm on floor 5 with a 10,000 G target → farms and stops alone on arrival.
- **Manual test:** farm at skip speed → 20 battles with no input; ESC stop works.

#### 2.3 Tutorial + daily quests (B6) — P1 · M

- **Files:** new `src/data/quests.js`, `S.quests = {done:[], daily:{date, list, claimed}}`, quests modal, `achievements` (extend).
- **Steps:**
  1. Tutorial (8 quests): floor 1 → open chest → forge once → equip skill → floor 10. Each with arrow/toast and reward (gold/keys).
  2. Dailies (3/day, date-rotated): forge ×5, chests ×10, defeat 1 boss, farm 20 floors. Reward: 5–15 keys. Login streak: +1 key/day up to 7.
  3. `sanitize()`: reset dailies if the date changed (browser timezone).
- **Acceptance:** new player sees quest 1 on entry; completing 3 dailies grants keys and resets next day (date mock).
- **Test:** fixture with yesterday's date → dailies reset; streak increments.

#### 2.4 WebAudio chiptune sound (B15/A2.7) — P1 · M

- **Files:** new `src/audio.js` (synthesis, no files), `index.html` (🔊 toggle in top-bar), `styles.css`.
- **Steps:**
  1. SFX: hit, crit, forge (metal), chest (arpeggio), victory (short fanfare). All with `OscillatorNode` + envelope.
  2. Music: procedural loop per scene (title: slow pentatonic; battle: pulse; forge: rhythm). Low volume, toggle persisted in save.
  3. `prefers-reduced-motion` doesn't affect audio; add "full mute" for meetings.
- **Acceptance:** toggle mutes everything; no audio files in the repo (no `.mp3/.wav` in `assets/`).
- **Manual test:** iOS Safari (AudioContext requires user gesture → start on the "Play" button).

#### 2.5 `stats()` cache + `save()` debounce (A3.1/A3.2) — P1 · S

- **Files:** `stats()`, `save()`, `withHpDelta()`.
- **Steps:**
  1. `let _statsCache = null, _statsVersion = 0`; `bumpStats()` on every `S.hero`/bonus mutation; `stats()` returns cache if version matches.
  2. `save()` with 500ms debounce + `saveNow()` on victory/exit/`beforeunload`.
- **Acceptance:** Performance tab: `stats()` time in battle −80%; ×60 forge without jank.
- **Test:** unit test: mutating gold doesn't invalidate cache; mutating `statLevels` does.

---

## Sprint 3 — Depth / Profundidad (Semanas 6–9)

### ES

#### 3.1 Prestigio / Renacimiento (B3) — P1 · M

- **Archivos:** `defaultState()` (añadir `prestige: {stars, mult}`), `stats()` (`* prestigeMult`), `sanitize()` (conservar prestigio), nuevo modal de renacimiento, `victory()` (desbloqueo piso 100).
- **Pasos:**
  1. Desbloqueo: `maxStage >= 100`. Modal: "Renacer: reset de equipo/entrenamiento/runas a cambio de +10 % todo por estrella (acumulable, tope +200 %)".
  2. `prestigeMult = 1 + stars * 0.10`; aplicar en `stats()` a atk/def/hp/gold.
  3. Conservar: prestigio, códice, logros, disfraces, mascotas. Resetear: equipo, entrenamiento, runas, piso a 1.
  4. Estrella visual en el menú (🌟 ×N).
- **Aceptación:** renacer con 2 estrellas → DPS ×1,2 con equipo base; códice intacto.
- **Test:** fixture pre/post renacimiento → solo cambian los campos previstos.

#### 3.2 Loadouts + reglas de auto-cast (B4) — P1 · M

- **Archivos:** `S.loadouts = [{name, sword, armor, skills, pet, speed}]`, `equippedSkills`, `runAuto()`, menú.
- **Pasos:**
  1. Guardar/cargar preset (3 slots: "Jefe", "Farm", "Raid" por defecto).
  2. Reglas por habilidad: `mode: 'always'|'bossOnly'|'burst'` (burst = guardar hasta que el enemigo < 50 % HP).
  3. `runAuto`: filtrar por regla antes de elegir la primera lista.
- **Aceptación:** preset "Jefe" cambia 4 habilidades + mascota en 1 clic; regla `bossOnly` no se usa vs normal.
- **Test:** simulación: build con regla bossOnly vs normal → la habilidad no se castea.

#### 3.3 Mecánicas de jefe + estados (B8/A1.7) — P1 · M

- **Archivos:** `makeMonster()` (añadir `pattern`), `castSkill/basicAttack/skipResolve` (estados), `RAID_BOSSES`, `pixelfx.js` (efectos de escudo/curación).
- **Pasos:**
  1. Patrones: `shield` (absorbe 20 % maxHP cada 4 turnos), `heal` (cura 10 % al 50 % HP, 1 vez), `summon` (invoca esbirro débil), `enrage` (+50 % ATK < 30 % HP).
  2. Estados: `poison` (3 turnos, 5 % maxHP/turno), `burn`, `freeze` (salta 1 turno, 10 %), `stun` (5 %). Aplicables por habilidades/mascotas con probabilidad.
  3. `skipResolve` debe simular estados (mismo código que batalla normal, sin animación).
- **Aceptación:** jefe con `shield` muestra escudo y absorbe; veneno mata en skip igual que en normal (mismo resultado con semilla fija).
- **Test:** unitario de estados (duración, tick, expiración) + batalla con semilla fija reproducible.

#### 3.4 Inventario de equipo (B5) — P2 · L (dividir en 2 PRs)

- **PR 3.4a (datos):** `S.inventory = {swords:[], armors:[]}` (máx. 20 c/u); `openOne` añade al inventario en vez de vender; `sanitize` migra el equipo actual.
- **PR 3.4b (UI):** modal de inventario con comparar (delta ATK/DEF/DPS), bloquear favorito, equipar; sets 2/4 piezas (bonus +5 %/+12 %).
- **Aceptación:** dropear 10 espadas → inventario con 10, ninguna vendida sin permiso; equipar desde inventario conserva forja (1.1).
- **Test:** fixture con inventario lleno → el drop se vende (fallback) con aviso.

#### 3.5 Balance: entrenamiento con rendimientos decrecientes (A1.3) + coste de 승급 (A1.4) — P1 · S

- **Archivos:** `TRAIN`, `trainCost()`, `rankUpCost()` (hoy 0).
- **Pasos:**
  1. `trainCost`: multiplicar por `1.02^lv` adicional; `inc` con `0.995^lv` (suave, no rompe early game).
  2. `rankUpCost`: 0 (primera vez, tutorial) → 50k (영웅→전설) → 200k (전설→신화). Mostrar coste en UI.
  3. Simulación headless 1–200 pisos: verificar que no hay muro antes del 50 ni paseo después del 100 (ajustar constantes).
- **Aceptación:** curva DPS vs piso documentada en `docs/BALANCE.md`; ningún piso 1–50 imposible con build razonable.
- **Test:** simulación con semilla fija (100 batallas/piso) → win-rate 60–90 % en pisos "de progresión".

### EN

#### 3.1 Prestige / Rebirth (B3) — P1 · M

- **Files:** `defaultState()` (add `prestige: {stars, mult}`), `stats()` (`* prestigeMult`), `sanitize()` (keep prestige), new rebirth modal, `victory()` (floor-100 unlock).
- **Steps:**
  1. Unlock: `maxStage >= 100`. Modal: "Rebirth: reset gear/training/runes in exchange for +10% everything per star (stackable, cap +200%)".
  2. `prestigeMult = 1 + stars * 0.10`; apply in `stats()` to atk/def/hp/gold.
  3. Keep: prestige, codex, achievements, costumes, pets. Reset: gear, training, runes, floor to 1.
  4. Star visual in the menu (🌟 ×N).
- **Acceptance:** rebirth with 2 stars → DPS ×1.2 with base gear; codex intact.
- **Test:** pre/post-rebirth fixture → only the expected fields change.

#### 3.2 Loadouts + auto-cast rules (B4) — P1 · M

- **Files:** `S.loadouts = [{name, sword, armor, skills, pet, speed}]`, `equippedSkills`, `runAuto()`, menu.
- **Steps:**
  1. Save/load preset (3 slots: "Boss", "Farm", "Raid" by default).
  2. Per-skill rules: `mode: 'always'|'bossOnly'|'burst'` (burst = save until enemy < 50% HP).
  3. `runAuto`: filter by rule before picking the first listed skill.
- **Acceptance:** "Boss" preset swaps 4 skills + pet in 1 click; `bossOnly` rule doesn't fire vs normal.
- **Test:** simulation: build with bossOnly rule vs normal → skill is not cast.

#### 3.3 Boss mechanics + statuses (B8/A1.7) — P1 · M

- **Files:** `makeMonster()` (add `pattern`), `castSkill/basicAttack/skipResolve` (statuses), `RAID_BOSSES`, `pixelfx.js` (shield/heal effects).
- **Steps:**
  1. Patterns: `shield` (absorbs 20% maxHP every 4 turns), `heal` (heals 10% at 50% HP, once), `summon` (summons weak minion), `enrage` (+50% ATK < 30% HP).
  2. Statuses: `poison` (3 turns, 5% maxHP/turn), `burn`, `freeze` (skips 1 turn, 10%), `stun` (5%). Applied by skills/pets with probability.
  3. `skipResolve` must simulate statuses (same code as normal battle, no animation).
- **Acceptance:** `shield` boss shows shield and absorbs; poison kills in skip just like normal (same result with fixed seed).
- **Test:** unit tests for statuses (duration, tick, expiry) + reproducible fixed-seed battle.

#### 3.4 Gear inventory (B5) — P2 · L (split into 2 PRs)

- **PR 3.4a (data):** `S.inventory = {swords:[], armors:[]}` (max 20 each); `openOne` adds to inventory instead of selling; `sanitize` migrates current gear.
- **PR 3.4b (UI):** inventory modal with compare (ATK/DEF/DPS delta), favorite-lock, equip; 2/4-piece sets (+5%/+12% bonus).
- **Acceptance:** drop 10 swords → inventory with 10, none sold without permission; equipping from inventory keeps forge (1.1).
- **Test:** fixture with full inventory → drop is sold (fallback) with warning.

#### 3.5 Balance: diminishing-returns training (A1.3) + rank-up cost (A1.4) — P1 · S

- **Files:** `TRAIN`, `trainCost()`, `rankUpCost()` (currently 0).
- **Steps:**
  1. `trainCost`: multiply by an additional `1.02^lv`; `inc` with `0.995^lv` (soft, doesn't break early game).
  2. `rankUpCost`: 0 (first time, tutorial) → 50k (Hero→Legendary) → 200k (Legendary→Mythic). Show cost in UI.
  3. Headless simulation floors 1–200: verify no wall before 50 and no walkover after 100 (tune constants).
- **Acceptance:** DPS-vs-floor curve documented in `docs/BALANCE.md`; no floor 1–50 impossible with a reasonable build.
- **Test:** fixed-seed simulation (100 battles/floor) → 60–90% win-rate on "progression" floors.

---

## Sprint 4 — Content / Contenido (Semanas 10–12)

### ES

#### 4.1 Dos mundos nuevos (B7) — P1 · M

- **Archivos:** `WORLDS` (añadir 2 entradas), `NORMAL/ELITE/BOSS_MONSTERS` por mundo, `drawBattleBackdrop` (paletas), `MON` (arte procedural), `CODEX.monsters`.
- **Pasos:**
  1. **Bosque Espectral** (`mult: 1.3`, paleta verde/niebla): 6 normales (espectro, hongo, lobo…), 3 élites, 3 jefes (uno con `poison`).
  2. **Forja del Vacío** (`mult: 1.8`, paleta morada/void): 6 normales (golem de vacío, cultista…), 3 élites, 3 jefes (uno con `shield`).
  3. Desbloqueo: Bosque al piso 30, Vacío al piso 60. Selector de mundo ya existe (`world-select`).
  4. Arte: reutilizar `grid()` con nuevas paletas; sin archivos externos.
- **Aceptación:** selector con 3 mundos; cada mundo con jefes y recompensas propias; balance con simulación (3.5).
- **Test:** batalla en cada mundo con semilla fija → sin errores de arte/datos.

#### 4.2 Torre infinita + boss rush (B11) — P2 · M

- **Archivos:** nuevo `S.tower = {floor, best}`, `makeMonster` con modo torre, modal de torre.
- **Pasos:**
  1. Torre: pisos independientes de la campaña; recompensa = oro + llaves por altura; sin curación entre pisos (usa HP persistente de 1.2).
  2. Boss rush: cadena de 5 jefes (de `BOSS_MONSTERS` + raids) sin curación; recompensa: fragmentos arcoíris.
  3. Ranking local: mejor piso de torre (base para B9).
- **Aceptación:** entrar a torre no cambia `S.stage`; morir en torre no penaliza campaña.
- **Test:** fixture: torre piso 10 → campaña intacta.

#### 4.3 NPCs + lore (B14) — P2 · S

- **Archivos:** nuevo `src/data/npcs.js`, modal de diálogo en `scene-menu`, `achievements` (misiones de lore).
- **Pasos:** 3 NPCs (herrero → forja, alquimista → pociones/runas, tabernero → misiones diarias) con 5–10 líneas cada uno + 1 misión de lore por NPC. Texto vía i18n (ver Parte 3).
- **Aceptación:** hablar con cada NPC muestra diálogo y desbloquea su misión.
- **Test manual:** sin NPCs, el menú sigue funcionando (fallback).

#### 4.4 Evento semanal + jefe limitado (B16) — P2 · S

- **Archivos:** `RAID_BOSSES` (añadir 1), `startRaidBattle`, banner de evento en menú.
- **Pasos:** "Invasión del Abismo" cada semana (ventana Lun–Dom): jefe especial con recompensa ×2 y skin exclusiva. Reutiliza raid (15 turnos).
- **Aceptación:** fuera de ventana, el evento no aparece; dentro, recompensa ×2 verificada.
- **Test:** mock de fecha dentro/fuera de ventana.

### EN

#### 4.1 Two new worlds (B7) — P1 · M

- **Files:** `WORLDS` (add 2 entries), per-world `NORMAL/ELITE/BOSS_MONSTERS`, `drawBattleBackdrop` (palettes), `MON` (procedural art), `CODEX.monsters`.
- **Steps:**
  1. **Spectral Forest** (`mult: 1.3`, green/fog palette): 6 normals (specter, mushroom, wolf…), 3 elites, 3 bosses (one with `poison`).
  2. **Void Forge** (`mult: 1.8`, purple/void palette): 6 normals (void golem, cultist…), 3 elites, 3 bosses (one with `shield`).
  3. Unlock: Forest at floor 30, Void at floor 60. World selector already exists (`world-select`).
  4. Art: reuse `grid()` with new palettes; no external files.
- **Acceptance:** selector with 3 worlds; each world with own bosses and rewards; balance via simulation (3.5).
- **Test:** battle in each world with fixed seed → no art/data errors.

#### 4.2 Endless tower + boss rush (B11) — P2 · M

- **Files:** new `S.tower = {floor, best}`, `makeMonster` with tower mode, tower modal.
- **Steps:**
  1. Tower: floors independent of the campaign; reward = gold + keys by height; no healing between floors (uses persistent HP from 1.2).
  2. Boss rush: chain of 5 bosses (from `BOSS_MONSTERS` + raids) with no healing; reward: rainbow shards.
  3. Local ranking: best tower floor (basis for B9).
- **Acceptance:** entering the tower doesn't change `S.stage`; dying in the tower doesn't penalize the campaign.
- **Test:** fixture: tower floor 10 → campaign intact.

#### 4.3 NPCs + lore (B14) — P2 · S

- **Files:** new `src/data/npcs.js`, dialogue modal in `scene-menu`, `achievements` (lore quests).
- **Steps:** 3 NPCs (blacksmith → forge, alchemist → potions/runes, innkeeper → dailies) with 5–10 lines each + 1 lore quest per NPC. Text via i18n (see Part 3).
- **Acceptance:** talking to each NPC shows dialogue and unlocks their quest.
- **Manual test:** without NPCs, the menu still works (fallback).

#### 4.4 Weekly event + limited boss (B16) — P2 · S

- **Files:** `RAID_BOSSES` (add 1), `startRaidBattle`, event banner in menu.
- **Steps:** "Abyss Invasion" every week (Mon–Sun window): special boss with ×2 reward and exclusive skin. Reuses raid (15 turns).
- **Acceptance:** outside the window, the event doesn't appear; inside, ×2 reward verified.
- **Test:** date mock inside/outside the window.

---

## Sprint 5 — Social / Social (post-v1.0)

### ES

#### 5.1 Ranking local + tarjeta para compartir (B9) — P2 · S

- **Archivos:** `S.ranking = {bestFloor, bestDps, bestTower}`, Canvas de tarjeta (reutilizar `draw*`), botón Compartir.
- **Pasos:** registrar récords en `victory()`; tarjeta PNG 1200×630 con piso, equipo, DPS, prestigio y QR/URL del juego. Descargar + `navigator.share` si existe.
- **Aceptación:** tarjeta generada con datos correctos; sin backend.

#### 5.2 PvP asíncrono con fantasmas (B10) — P2 · M

- **Archivos:** exportar build (JSON con stats/equipo/habilidades), importar build rival, `startBattle` vs fantasma.
- **Pasos:** "Crear desafío" → código Base64 del build; "Aceptar desafío" → batalla vs fantasma (IA = auto-cast del rival). Sin servidor.
- **Aceptación:** compartir código → otro jugador batalla contra tu build; resultado reproducible.

#### 5.3 Taller de mods en el juego (B18) — P2 · M

- **Archivos:** `PD.loadMods` (reemplazar `document.write` por `import()` dinámico, ver A3.5), `openModList` (activar/desactivar sin editar archivo).
- **Pasos:** lista de mods con toggle persistido en `localStorage`; errores por mod aislados (try/catch ya existe en `emit`).
- **Aceptación:** activar/desactivar un mod sin recargar la página; un mod roto no rompe el juego.

### EN

#### 5.1 Local ranking + share card (B9) — P2 · S

- **Files:** `S.ranking = {bestFloor, bestDps, bestTower}`, card Canvas (reuse `draw*`), Share button.
- **Steps:** record highs in `victory()`; 1200×630 PNG card with floor, gear, DPS, prestige, and game URL/QR. Download + `navigator.share` if available.
- **Acceptance:** generated card with correct data; no backend.

#### 5.2 Async ghost PvP (B10) — P2 · M

- **Files:** export build (JSON with stats/gear/skills), import rival build, `startBattle` vs ghost.
- **Steps:** "Create challenge" → Base64 build code; "Accept challenge" → battle vs ghost (AI = rival's auto-cast). No server.
- **Acceptance:** share code → another player battles your build; reproducible result.

#### 5.3 In-game mod workshop (B18) — P2 · M

- **Files:** `PD.loadMods` (replace `document.write` with dynamic `import()`, see A3.5), `openModList` (enable/disable without editing files).
- **Steps:** mod list with toggle persisted in `localStorage`; per-mod isolated errors (try/catch already in `emit`).
- **Acceptance:** enable/disable a mod without reloading the page; a broken mod doesn't break the game.

---

# Part 3 — Translation Plan EN/ES / Plan de Traducción EN/ES

## 3.1 Current State Audit / Auditoría del Estado Actual

### ES

| Aspecto | Estado hoy | Evidencia |
|---|---|---|
| Idioma UI | 100 % coreano | `index.html` (127 líneas con coreano), `game.js` (~2.550 líneas con coreano) |
| Idioma código/comentarios | Coreano | Comentarios en `game.js`, `PixelDungeon_simple/*.cpp|h` |
| Idioma README | Coreano | `README.md` (40 líneas) |
| i18n | Inexistente | Sin claves, sin diccionarios, sin selector |
| Fuente | Galmuri (solo coreano) vía CDN `@latest` | `index.html`, `styles.css` (`--font: 'Galmuri11'`) |
| Nombres de datos | Coreano en tablas | `SKILLS`, `PET_TYPES`, `COSTUMES`, `ACHIEVEMENTS`, `RAID_BOSSES`, `CODEX`, `RELICS`, monstruos, `EQUIP` |

**Estimación de volumen:** ~600–800 cadenas únicas de UI (sin contar nombres de datos). Con nombres de datos (28 habilidades, 8 mascotas, 13 disfraces, 6 logros, 3 raids, ~60 entradas de códice, 10 reliquias, 6+3+3 monstruos, 5×2 equipos): **~900 cadenas totales**. A ~15 palabras/cadena: **~13.500 palabras por idioma**.

### EN

| Aspect | Current state | Evidence |
|---|---|---|
| UI language | 100% Korean | `index.html` (127 lines with Korean), `game.js` (~2,550 lines with Korean) |
| Code/comments language | Korean | Comments in `game.js`, `PixelDungeon_simple/*.cpp|h` |
| README language | Korean | `README.md` (40 lines) |
| i18n | Nonexistent | No keys, no dictionaries, no selector |
| Font | Galmuri (Korean-only) via `@latest` CDN | `index.html`, `styles.css` (`--font: 'Galmuri11'`) |
| Data names | Korean in tables | `SKILLS`, `PET_TYPES`, `COSTUMES`, `ACHIEVEMENTS`, `RAID_BOSSES`, `CODEX`, `RELICS`, monsters, `EQUIP` |

**Volume estimate:** ~600–800 unique UI strings (excluding data names). With data names (28 skills, 8 pets, 13 costumes, 6 achievements, 3 raids, ~60 codex entries, 10 relics, 6+3+3 monsters, 5×2 gear): **~900 strings total**. At ~15 words/string: **~13,500 words per language**.

## 3.2 i18n Architecture / Arquitectura i18n

### ES

```
src/i18n/
├── ko.json   # Fuente (coreano, extraído del código actual)
├── en.json   # Inglés
├── es.json   # Español
└── index.js  # t(key, vars), setLang(), getLang(), fallback
```

- **Claves con namespace:** `menu.dungeon`, `battle.victory`, `forge.success`, `chest.open`, `skill.name.flameStrike`, `monster.name.slime`, `error.notEnoughGold`…
- **Función `t(key, vars)`:** `t('error.notEnoughGold', {cost: 5000})` → `"Not enough gold! (needed: 5,000G)"`. Fallback: `ko` si falta la clave; en dev, log de claves faltantes.
- **Idioma en el save:** `S.lang = 'ko'|'en'|'es'` (default: idioma del navegador si es `en`/`es`, si no `ko`). Selector en título + menú, cambio en caliente sin recargar.
- **Formato:** números con `Intl.NumberFormat(lang)` (1.000 vs 1,000); fechas con `Intl.DateTimeFormat`; plurales simples (sin ICU complejo: "1 llave / N llaves" con clave `one/other`).
- **Datos traducibles:** nombres/descripciones de habilidades, mascotas, disfraces, logros, jefes, monstruos, reliquias, equipos, NPCs. Los IDs internos (`'화염 강타'`, `'slime'`) **no cambian**; se añade `nameKey` por entrada. Los saves existentes siguen funcionando.
- **Sin tocar lógica:** las fórmulas, probabilidades y costes no se traducen; solo las cadenas visibles.

**Ejemplo:**

```js
// Antes (game.js actual)
alert(`골드가 부족합니다! (필요 골드: ${fmt(r)}G)`);
// Después
alert(t('error.notEnoughGold', { cost: fmt(r) }));
// ko.json: "error.notEnoughGold": "골드가 부족합니다! (필요 골드: {cost}G)"
// en.json: "error.notEnoughGold": "Not enough gold! (needed: {cost}G)"
// es.json: "error.notEnoughGold": "¡Oro insuficiente! (necesitas: {cost}G)"
```

### EN

```
src/i18n/
├── ko.json   # Source (Korean, extracted from current code)
├── en.json   # English
├── es.json   # Spanish
└── index.js  # t(key, vars), setLang(), getLang(), fallback
```

- **Namespaced keys:** `menu.dungeon`, `battle.victory`, `forge.success`, `chest.open`, `skill.name.flameStrike`, `monster.name.slime`, `error.notEnoughGold`…
- **`t(key, vars)` function:** `t('error.notEnoughGold', {cost: 5000})` → `"Not enough gold! (needed: 5,000G)"`. Fallback: `ko` if the key is missing; in dev, log missing keys.
- **Language in the save:** `S.lang = 'ko'|'en'|'es'` (default: browser language if `en`/`es`, else `ko`). Selector on title + menu, hot-switch without reload.
- **Formatting:** numbers with `Intl.NumberFormat(lang)` (1,000 vs 1.000); dates with `Intl.DateTimeFormat`; simple plurals (no complex ICU: "1 key / N keys" with `one/other` key).
- **Translatable data:** names/descriptions of skills, pets, costumes, achievements, bosses, monsters, relics, gear, NPCs. Internal IDs (`'화염 강타'`, `'slime'`) **do not change**; add a `nameKey` per entry. Existing saves keep working.
- **No logic changes:** formulas, odds, and costs are not translated; only visible strings.

**Example:** *(same as above / igual que arriba)*

## 3.3 Translation Phases / Fases de Traducción

### ES

| Fase | Qué | Entregable | Esfuerzo |
|---|---|---|---|
| **T0 — Extracción (semana 1, en paralelo al Sprint 1)** | Script que lista todas las cadenas coreanas de `game.js`/`index.html` y genera `ko.json` con claves por namespace. Revisión manual de falsos positivos (nombres de variables, IDs). | `src/i18n/ko.json` (~900 claves) + `docs/I18N_KEYS.md` | M |
| **T1 — Infraestructura** | `t()`, `setLang()`, selector de idioma, `S.lang` en save + `sanitize()`, fallback a `ko`, log de claves faltantes en dev. | Juego conmutable KO/EN/ES (EN/ES vacíos → fallback KO) | S |
| **T2 — UI estática** | `index.html` completo (título, menú, HUD, botones) + `styles.css` (ajustes de overflow). | Pantallas sin coreano en EN/ES | M |
| **T3 — Sistemas** | Combate, forja, cofres, habilidades, runas, códice, reliquias, mascotas, disfraces, logros, raids (incl. los 19 `alert` ya migrados en 1.5). | 100 % de la UI en EN/ES | L |
| **T4 — Datos** | Nombres/descripciones de `SKILLS`, `PET_TYPES`, `COSTUMES`, `ACHIEVEMENTS`, `RAID_BOSSES`, `CODEX`, `RELICS`, monstruos, `EQUIP`, NPCs (Sprint 4.3). | Datos visibles traducidos; IDs intactos | L |
| **T5 — QA y pulido** | Revisión nativa ES/EN, overflow (cadenas ES/EN 20–30 % más largas), fuente (ver 3.4), README trilingüe. | Release v1.0 trilingüe | M |

**Orden recomendado:** T0+T1 en la semana 1 (no bloquea Sprints), T2+T3 durante Sprints 1–2, T4 durante Sprints 3–4, T5 antes de v1.0.

### EN

| Phase | What | Deliverable | Effort |
|---|---|---|---|
| **T0 — Extraction (week 1, parallel to Sprint 1)** | Script listing all Korean strings in `game.js`/`index.html`, generating `ko.json` with namespaced keys. Manual review of false positives (variable names, IDs). | `src/i18n/ko.json` (~900 keys) + `docs/I18N_KEYS.md` | M |
| **T1 — Infrastructure** | `t()`, `setLang()`, language selector, `S.lang` in save + `sanitize()`, `ko` fallback, missing-key log in dev. | Switchable KO/EN/ES game (EN/ES empty → KO fallback) | S |
| **T2 — Static UI** | Full `index.html` (title, menu, HUD, buttons) + `styles.css` (overflow fixes). | Screens with no Korean in EN/ES | M |
| **T3 — Systems** | Combat, forge, chests, skills, runes, codex, relics, pets, costumes, achievements, raids (including the 19 `alert`s already migrated in 1.5). | 100% of UI in EN/ES | L |
| **T4 — Data** | Names/descriptions of `SKILLS`, `PET_TYPES`, `COSTUMES`, `ACHIEVEMENTS`, `RAID_BOSSES`, `CODEX`, `RELICS`, monsters, `EQUIP`, NPCs (Sprint 4.3). | Visible data translated; IDs intact | L |
| **T5 — QA & polish** | Native ES/EN review, overflow (ES/EN strings 20–30% longer), font (see 3.4), trilingual README. | Trilingual v1.0 release | M |

**Recommended order:** T0+T1 in week 1 (doesn't block Sprints), T2+T3 during Sprints 1–2, T4 during Sprints 3–4, T5 before v1.0.

## 3.4 Font & Layout for EN/ES / Fuente y Layout para EN/ES

### ES

- **Problema:** Galmuri solo tiene glifos coreanos; en EN/ES el navegador cae a `monospace` genérica y pierde el encanto 16-bit.
- **Solución (en orden):**
  1. **Corta:** `font-family: 'Galmuri11', 'Press Start 2P', 'VT323', monospace` — "Press Start 2P" (Google Fonts, pixel latin) como fallback pixel para EN/ES. Fijar versión (ver A3.8).
  2. **Media:** "Silkscreen" o "DotGothic16" (pixel latin con mejor legibilidad en tamaños pequeños).
  3. **Overflow:** ES/EN son 20–30 % más largos que KO → botones con `min-height`, modales con scroll, `text-wrap: balance` en títulos, test a 360 px con ES (el más largo).
- **Aceptación:** capturas EN/ES a 360 px sin texto cortado ni botones desbordados; fuente pixel visible en los 3 idiomas.

### EN

- **Problem:** Galmuri only has Korean glyphs; in EN/ES the browser falls back to generic `monospace` and loses the 16-bit charm.
- **Solution (in order):**
  1. **Short-term:** `font-family: 'Galmuri11', 'Press Start 2P', 'VT323', monospace` — "Press Start 2P" (Google Fonts, pixel Latin) as pixel fallback for EN/ES. Pin the version (see A3.8).
  2. **Medium-term:** "Silkscreen" or "DotGothic16" (pixel Latin with better small-size readability).
  3. **Overflow:** ES/EN are 20–30% longer than KO → buttons with `min-height`, scrollable modals, `text-wrap: balance` on titles, test at 360px with ES (the longest).
- **Acceptance:** EN/ES screenshots at 360px with no clipped text or overflowing buttons; pixel font visible in all 3 languages.

## 3.5 Glossary & Style Guide / Glosario y Guía de Estilo

### ES

- **Glosario maestro:** Apéndice B (KO→EN→ES). Toda traducción nueva debe consultarlo; si falta un término, añadirlo al glosario en el mismo PR.
- **Tono:** EN = directo y gamer ("Forge", "Chest", "Boss"); ES = neutro latinoamericano, sin modismos de España ("Forja", "Cofre", "Jefe"). Evitar literalismos del coreano.
- **Nombres propios:** mantener el estilo (p. ej. "Señor del Abismo / Abyss Lord", "Estrella Arcoíris / Rainbow Star").
- **Revisión:** cada idioma revisado por un nativo (o hablante fluido) antes de v1.0; checklist en `docs/TRANSLATION.md`.

### EN

- **Master glossary:** Appendix B (KO→EN→ES). Every new translation must consult it; if a term is missing, add it to the glossary in the same PR.
- **Tone:** EN = direct and gamer ("Forge", "Chest", "Boss"); ES = neutral Latin American, no Spain slang ("Forja", "Cofre", "Jefe"). Avoid literal translations from Korean.
- **Proper names:** keep the style (e.g. "Abyss Lord / Señor del Abismo", "Rainbow Star / Estrella Arcoíris").
- **Review:** each language reviewed by a native (or fluent) speaker before v1.0; checklist in `docs/TRANSLATION.md`.

## 3.6 i18n Acceptance Criteria / Criterios de Aceptación i18n

### ES

1. Juego completo en EN y ES sin coreano visible (salvo nombres propios de la API `PD` y IDs internos).
2. Cambio de idioma en caliente (sin recargar) desde título y menú; persistido en el save.
3. `grep` de coreano en `index.html`/`game.js` renderizado → 0 (solo en `ko.json` y comentarios).
4. Save `V7` coreano cargado en EN/ES → progreso intacto, solo cambia el idioma.
5. Test de overflow a 360 px en ES superado; fuente pixel en los 3 idiomas.
6. README trilingüe (ES/EN/KO) + `docs/TRANSLATION.md` para contribuidores.

### EN

1. Full game in EN and ES with no visible Korean (except `PD` API proper names and internal IDs).
2. Hot language switching (no reload) from title and menu; persisted in the save.
3. `grep` for Korean in rendered `index.html`/`game.js` → 0 (only in `ko.json` and comments).
4. Korean `V7` save loaded in EN/ES → progress intact, only the language changes.
5. 360px overflow test in ES passed; pixel font in all 3 languages.
6. Trilingual README (ES/EN/KO) + `docs/TRANSLATION.md` for contributors.

---

# Part 4 — Timeline, Risks & Definition of Done / Cronograma, Riesgos y Definición de Hecho

## 4.1 Timeline / Cronograma

### ES

| Semana | Sprint | Hitos |
|---|---|---|
| 1 | 1 (inicio) + T0/T1 | Tests+CI, extracción i18n, infraestructura `t()` |
| 2 | 1 (fin) | Quick wins completos (1.1–1.7) |
| 3–4 | 2 (inicio) | Offline (2.1), auto-farm (2.2), UI i18n (T2) |
| 5 | 2 (fin) | Tutorial/diarias (2.3), sonido (2.4), perf (2.5), sistemas i18n (T3) |
| 6–7 | 3 (inicio) | Prestigio (3.1), loadouts (3.2), balance (3.5) |
| 8–9 | 3 (fin) | Jefes/estados (3.3), inventario (3.4), datos i18n (T4) |
| 10–11 | 4 | Mundos (4.1), torre (4.2), NPCs (4.3), evento (4.4) |
| 12 | Release | QA i18n (T5), `v1.0` en GitHub Pages |
| 13+ | 5 | Social (5.1–5.3) |

### EN

| Week | Sprint | Milestones |
|---|---|---|
| 1 | 1 (start) + T0/T1 | Tests+CI, i18n extraction, `t()` infrastructure |
| 2 | 1 (end) | Quick wins complete (1.1–1.7) |
| 3–4 | 2 (start) | Offline (2.1), auto-farm (2.2), UI i18n (T2) |
| 5 | 2 (end) | Tutorial/dailies (2.3), sound (2.4), perf (2.5), systems i18n (T3) |
| 6–7 | 3 (start) | Prestige (3.1), loadouts (3.2), balance (3.5) |
| 8–9 | 3 (end) | Bosses/statuses (3.3), inventory (3.4), data i18n (T4) |
| 10–11 | 4 | Worlds (4.1), tower (4.2), NPCs (4.3), event (4.4) |
| 12 | Release | i18n QA (T5), `v1.0` on GitHub Pages |
| 13+ | 5 | Social (5.1–5.3) |

## 4.2 Risks & Mitigations / Riesgos y Mitigaciones

### ES

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| Romper saves al añadir campos | Media | `sanitize()` + fixture `save-v7.json` en cada PR que toque estado (1.0) |
| Regresión de balance al cambiar fórmulas | Media | Simulación headless con semilla fija antes de cada cambio de balance (3.5) |
| i18n rompe layout en ES (cadenas largas) | Alta | Test a 360 px en cada fase T2–T4; botones con `min-height` desde el inicio |
| Alcance: inventario (3.4) se hace enorme | Media | Dividir en 2 PRs (datos/UI); si se desborda, mover a post-v1.0 |
| Audio bloqueado en iOS | Media | Iniciar `AudioContext` en el gesto "Jugar"; toggle siempre visible |
| Mods rotos tras refactor | Baja | API `PD` congelada durante Sprints 1–3; test con 1 mod de ejemplo |

### EN

| Risk | Probability | Mitigation |
|---|---|---|
| Breaking saves when adding fields | Medium | `sanitize()` + `save-v7.json` fixture on every state-touching PR (1.0) |
| Balance regression when changing formulas | Medium | Fixed-seed headless simulation before every balance change (3.5) |
| i18n breaking ES layout (long strings) | High | 360px test in every T2–T4 phase; `min-height` buttons from the start |
| Scope: inventory (3.4) ballooning | Medium | Split into 2 PRs (data/UI); if it overflows, move to post-v1.0 |
| Audio blocked on iOS | Medium | Start `AudioContext` on the "Play" gesture; always-visible toggle |
| Broken mods after refactor | Low | Freeze `PD` API during Sprints 1–3; test with 1 example mod |

## 4.3 Definition of Done / Definición de Hecho

### ES

Una tarea está **hecha** cuando: (1) código + tests verdes, (2) criterio de aceptación verificado (manual + captura si UI), (3) save `V7` migra sin pérdida, (4) sin coreano visible en EN/ES (si toca texto), (5) commit/PR con ID (`1.1`, `T3`…) y descripción ES/EN breve.

### EN

A task is **done** when: (1) code + green tests, (2) acceptance criterion verified (manual + screenshot if UI), (3) `V7` save migrates losslessly, (4) no visible Korean in EN/ES (if it touches text), (5) commit/PR with ID (`1.1`, `T3`…) and brief ES/EN description.

---

# Appendix A — File-by-File Change Map / Apéndice A — Mapa de Cambios por Archivo

### ES

| Archivo | Cambios principales (Sprints) |
|---|---|
| `game.js` | 1.1–1.7, 2.1–2.5, 3.1–3.5, 4.1–4.4, T2–T4 (reemplazo por claves) |
| `index.html` | Selector de idioma, toggle 🔊, botones Exportar/Importar, T2 |
| `styles.css` | Fuente pixel latin, overflow ES, targets táctiles, toasts |
| `pixelfx.js` | Efectos de escudo/curación (3.3); sin cambios de API |
| `mods/mods.js` | Carga dinámica sin `document.write` (5.3) |
| `src/core/formulas.js` *(nuevo)* | Funciones puras extraídas para tests (1.0) |
| `src/i18n/{ko,en,es}.json` *(hecho T1)* | Diccionarios curados: 86 claves al 100 % en ko/en/es |
| `src/i18n/ko.auto.json` *(hecho T0)* | Inventario generado: 911 cadenas coreanas con clave estable `<ámbito>.<hash8>` |
| `src/i18n/strings.js` *(generado)* | Bundle `window.I18N_DATA` para que funcione también desde `file://` |
| `src/i18n/index.js` *(nuevo)* | `t()`, `setLang()`, fallback (T1) |
| `src/audio.js` *(nuevo)* | SFX + música WebAudio (2.4) |
| `src/data/quests.js`, `npcs.js` *(nuevo)* | Tutorial/diarias (2.3), NPCs (4.3) |
| `tests/*`, `.github/workflows/ci.yml` *(nuevo)* | Tests + CI (1.0) |
| `docs/BALANCE.md`, `I18N_KEYS.md`, `TRANSLATION.md` *(nuevo)* | Curva de balance, claves, guía de traducción |
| `PixelDungeon_simple/*` (C++) | Sin cambios hasta decisión Fase 4 del plan principal |

### EN

| File | Main changes (Sprints) |
|---|---|
| `game.js` | 1.1–1.7, 2.1–2.5, 3.1–3.5, 4.1–4.4, T2–T4 (key replacement) |
| `index.html` | Language selector, 🔊 toggle, Export/Import buttons, T2 |
| `styles.css` | Pixel Latin font, ES overflow, touch targets, toasts |
| `pixelfx.js` | Shield/heal effects (3.3); no API changes |
| `mods/mods.js` | Dynamic loading without `document.write` (5.3) |
| `src/core/formulas.js` *(new)* | Pure functions extracted for tests (1.0) |
| `src/i18n/{ko,en,es}.json` *(T1 done)* | Curated dictionaries: 86 keys, 100 % in ko/en/es |
| `src/i18n/ko.auto.json` *(T0 done)* | Generated inventory: 911 Korean strings keyed `<scope>.<hash8>` |
| `src/i18n/strings.js` *(generated)* | `window.I18N_DATA` bundle so the game also runs from `file://` |
| `src/i18n/index.js` *(new)* | `t()`, `setLang()`, fallback (T1) |
| `src/audio.js` *(new)* | WebAudio SFX + music (2.4) |
| `src/data/quests.js`, `npcs.js` *(new)* | Tutorial/dailies (2.3), NPCs (4.3) |
| `tests/*`, `.github/workflows/ci.yml` *(new)* | Tests + CI (1.0) |
| `docs/BALANCE.md`, `I18N_KEYS.md`, `TRANSLATION.md` *(new)* | Balance curve, keys, translation guide |
| `PixelDungeon_simple/*` (C++) | No changes until the main plan's Phase 4 decision |

---

# Appendix B — Full Glossary KO→EN→ES / Apéndice B — Glosario Completo KO→EN→ES

### ES

| Coreano | English | Español | Clave i18n sugerida |
|---|---|---|---|
| 던전 | Dungeon | Mazmorra | `menu.dungeon` |
| 대장간 / 단조 | Forge / Forging | Forja / Forjar | `forge.title` |
| 초월 | Transcend | Transcender | `forge.transcend` |
| 무지개별 | Rainbow Star | Estrella Arcoíris | `forge.rainbowStar` |
| 상자 | Chest | Cofre | `chest.title` |
| 룬 | Rune | Runa | `rune.title` |
| 정예 | Elite | Élite | `battle.elite` |
| 보스 | Boss | Jefe | `battle.boss` |
| 심연 대군주 | Abyss Lord | Señor del Abismo | `battle.abyssLord` |
| 차원 레이드 | Dimensional Raid | Raid Dimensional | `raid.title` |
| 도감 | Codex | Códex | `codex.title` |
| 유물 | Relic | Reliquia | `relic.title` |
| 훈련소 | Training | Entrenamiento | `training.title` |
| 열쇠 | Key | Llave | `currency.key` |
| 골드 | Gold | Oro | `currency.gold` |
| 마을 광장 | Town Square | Plaza del Pueblo | `menu.townSquare` |
| 모험가 | Adventurer | Aventurero | `hero.adventurer` |
| 검 | Sword | Espada | `gear.sword` |
| 방어구 / 갑옷 | Armor | Armadura | `gear.armor` |
| 스킬 | Skill | Habilidad | `skill.title` |
| 펫 | Pet | Mascota | `pet.title` |
| 코스튬 | Costume | Disfraz | `costume.title` |
| 업적 | Achievement | Logro | `achievement.title` |
| 치명타 | Critical Hit | Crítico | `stat.crit` |
| 보스 피해 | Boss Damage | Daño a Jefes | `stat.bossDmg` |
| 드랍률 | Drop Rate | Prob. de Botín | `stat.dropRate` |
| 강화 | Enhance | Mejorar | `forge.enhance` |
| 승급 | Rank Up | Ascender | `forge.rankUp` |
| 반복 파밍 | Repeat Farming | Farm Repetido | `battle.repeatFarm` |
| 스킵 | Skip | Saltar | `battle.skip` |
| 승리 / 패배 | Victory / Defeat | Victoria / Derrota | `battle.victory` / `battle.defeat` |
| 골드가 부족합니다 | Not enough gold | Oro insuficiente | `error.notEnoughGold` |
| 열쇠가 부족합니다 | Not enough keys | Llaves insuficientes | `error.notEnoughKeys` |

### EN

| Korean | English | Español | Suggested i18n key |
|---|---|---|---|
| 던전 | Dungeon | Mazmorra | `menu.dungeon` |
| 대장간 / 단조 | Forge / Forging | Forja / Forjar | `forge.title` |
| 초월 | Transcend | Transcender | `forge.transcend` |
| 무지개별 | Rainbow Star | Estrella Arcoíris | `forge.rainbowStar` |
| 상자 | Chest | Cofre | `chest.title` |
| 룬 | Rune | Runa | `rune.title` |
| 정예 | Elite | Élite | `battle.elite` |
| 보스 | Boss | Jefe | `battle.boss` |
| 심연 대군주 | Abyss Lord | Señor del Abismo | `battle.abyssLord` |
| 차원 레이드 | Dimensional Raid | Raid Dimensional | `raid.title` |
| 도감 | Codex | Códex | `codex.title` |
| 유물 | Relic | Reliquia | `relic.title` |
| 훈련소 | Training | Entrenamiento | `training.title` |
| 열쇠 | Key | Llave | `currency.key` |
| 골드 | Gold | Oro | `currency.gold` |
| 마을 광장 | Town Square | Plaza del Pueblo | `menu.townSquare` |
| 모험가 | Adventurer | Aventurero | `hero.adventurer` |
| 검 | Sword | Espada | `gear.sword` |
| 방어구 / 갑옷 | Armor | Armadura | `gear.armor` |
| 스킬 | Skill | Habilidad | `skill.title` |
| 펫 | Pet | Mascota | `pet.title` |
| 코스튬 | Costume | Disfraz | `costume.title` |
| 업적 | Achievement | Logro | `achievement.title` |
| 치명타 | Critical Hit | Crítico | `stat.crit` |
| 보스 피해 | Boss Damage | Daño a Jefes | `stat.bossDmg` |
| 드랍률 | Drop Rate | Prob. de Botín | `stat.dropRate` |
| 강화 | Enhance | Mejorar | `forge.enhance` |
| 승급 | Rank Up | Ascender | `forge.rankUp` |
| 반복 파밍 | Repeat Farming | Farm Repetido | `battle.repeatFarm` |
| 스킵 | Skip | Saltar | `battle.skip` |
| 승리 / 패배 | Victory / Defeat | Victoria / Derrota | `battle.victory` / `battle.defeat` |
| 골드가 부족합니다 | Not enough gold | Oro insuficiente | `error.notEnoughGold` |
| 열쇠가 부족합니다 | Not enough keys | Llaves insuficientes | `error.notEnoughKeys` |

---

*Fin / End — Implementation + Translation Plan (ES/EN). Docs: `PLAN_BILINGUAL.md` · `MEJORAS_Y_NOVEDADES.md` · `IMPLEMENTATION_PLAN.md` (este archivo / this file).*
