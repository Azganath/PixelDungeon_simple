# PixelDungeon_simple — Mejoras y Novedades / Improvements & New Features

> **Documento bilingüe / Bilingual document:** cada sección en **español (ES)** y **inglés (EN)**. Complementa a `PLAN_BILINGUAL.md` (análisis y roadmap). / Each section in **Spanish (ES)** and **English (EN)**. Companion to `PLAN_BILINGUAL.md` (analysis & roadmap).
> Fecha / Date: 2026-11-22 · Rama / Branch: `arena/90e76ced-pixeldungeon-simple`

---

## Cómo leer este documento / How to read this document

### ES

- **Parte A — Mejoras:** qué arreglar/optimizar en lo que **ya existe** (balance, UX, rendimiento, economía, código). Cada mejora indica: problema detectado en el código, propuesta concreta, esfuerzo (S/M/L) e impacto.
- **Parte B — Novedades:** qué **agregar** al juego (contenido y sistemas nuevos), priorizadas.
- **Parte C — Priorización:** orden de ejecución sugerido (quick wins → medio plazo → apuestas grandes) y qué **no** agregar.
- Todas las referencias (`game.js:línea`, funciones) son verificables en el repo actual.

### EN

- **Part A — Improvements:** what to fix/optimize in what **already exists** (balance, UX, performance, economy, code). Each improvement states: problem found in code, concrete proposal, effort (S/M/L), and impact.
- **Part B — New features:** what to **add** to the game (new content and systems), prioritized.
- **Part C — Prioritization:** suggested execution order (quick wins → mid-term → big bets) and what **not** to add.
- All references (`game.js:line`, functions) are verifiable in the current repo.

---

# PARTE A — MEJORAS / PART A — IMPROVEMENTS

## A1. Balance y progresión / Balance & Progression

### ES

| # | Problema (evidencia en código) | Mejora propuesta | Esfuerzo | Impacto |
|---|---|---|---|---|
| A1.1 | **HP restaurado al 100% en cada batalla** (`startBattle`: `h.hp = st.maxHp`). La defensa, las pociones y el sustain casi no importan; no hay desgaste entre pisos. | HP persistente entre batallas + curación parcial al ganar (p. ej. +30 % como en C++ `Dungeon.cpp`). Poción como decisión táctica, no trámite. | S | Alto: da sentido a DEF/HP/poción |
| A1.2 | **Derrota demasiado blanda:** solo −8 % de oro (`defeat()`) y HP full. Sin riesgo, el jugador spamea pisos imposibles. | Penalización escalable: −8 % oro + pausa de farm en ese piso + consejo contextual ("te falta ~X ATK"). Mantenerla amable, pero visible. | S | Alto: tensión y aprendizaje |
| A1.3 | **Entrenamiento sin rendimientos decrecientes reales:** +13 ATK/DEF por nivel lineal; `bossDmg` hasta Lv.1000 ×5 % = +5.000 % teórico. A la larga, entrenar domina a todo lo demás. | Curva con tope suave (p. ej. `13 * 0.99^lv`) o coste exponencial más agresivo; mostrar DPS resultante antes de comprar. | S | Alto: evita un único camino óptimo |
| A1.4 | **Forja con 승급 gratuito** (`rankUpCost() = 0`) elimina el sumidero de oro de mitad de juego; el oro sobra y la forja pierde peso. | Coste creciente por grado (p. ej. 50k/200k/1M G) **o** coste en fragmentos; mantener 1 승급 gratuito como tutorial y el resto con coste. | S | Medio: economía sana |
| A1.5 | **Cofre que destruye progreso:** si sale un equipo de mayor grado, el actual se vende y el nuevo entra a +0 (`openOne`). Un jugador con +10 puede perderlo por un drop "mejor" en papel. | Transferir `enhanceLevel/starTier` al nuevo equipo **o** preguntar antes de equipar ("¿Equipar y perder +10?"). Nunca perder progreso en silencio. | S | Alto: evita frustración #1 |
| A1.6 | **Set de runas confuso/explotable:** `runeSetTier()` usa el tier máximo poseído por tipo (aunque sea 1 unidad) y suma todos los sets hasta ahí. Tener 1 runa de cada tipo en tier 8 da el bonus completo. | Set por **cantidad** (p. ej. 3/6/9 runas del tier) o por composición real; explicar la regla en UI con barra de progreso. | M | Medio: claridad y anti-exploit |
| A1.7 | **Jefes idénticos en mecánica:** solo escalan HP/ATK/DEF (`makeMonster`); el único patrón es "aliento ×1,65 cada 3 turnos" en skip. 6 normales + 3 jefes reciclados en todos los pisos. | 3–4 patrones por jefe (escudo, curación, invocación, furia <30 % HP) reutilizando `pixelfx.js`. Ver B12. | M | Alto: variedad sin contenido nuevo |
| A1.8 | **Sin muro de progresión visible:** el jugador no sabe si puede pasar el siguiente piso hasta intentarlo y perder. | Predictor "¿Puedo con el piso N?" (simulación headless con stats actuales, 100 batallas) en el selector de piso. | M | Alto: decisiones informadas |

### EN

| # | Problem (code evidence) | Proposed improvement | Effort | Impact |
|---|---|---|---|---|
| A1.1 | **HP fully restored every battle** (`startBattle`: `h.hp = st.maxHp`). Defense, potions, and sustain barely matter; no attrition between floors. | Persistent HP between battles + partial heal on win (e.g. +30% as in C++ `Dungeon.cpp`). Potion becomes a tactical choice, not a chore. | S | High: gives meaning to DEF/HP/potion |
| A1.2 | **Defeat too soft:** only −8% gold (`defeat()`) and full HP. No risk, so players spam impossible floors. | Scaling penalty: −8% gold + farm pause on that floor + contextual tip ("you need ~X more ATK"). Keep it friendly, but visible. | S | High: tension and learning |
| A1.3 | **Training with no real diminishing returns:** +13 ATK/DEF per level linear; `bossDmg` up to Lv.1000 ×5% = +5,000% theoretical. Long-term, training dominates everything. | Soft-capped curve (e.g. `13 * 0.99^lv`) or more aggressive exponential cost; show resulting DPS before buying. | S | High: avoids a single optimal path |
| A1.4 | **Free rank-up forge** (`rankUpCost() = 0`) removes the mid-game gold sink; gold piles up and forging loses weight. | Growing cost per grade (e.g. 50k/200k/1M G) **or** shard cost; keep 1 free rank-up as tutorial, rest paid. | S | Medium: healthy economy |
| A1.5 | **Chest that destroys progress:** if a higher-grade gear drops, the current one is sold and the new one enters at +0 (`openOne`). A +10 player can lose it to a "better" drop on paper. | Transfer `enhanceLevel/starTier` to the new gear **or** ask before equipping ("Equip and lose +10?"). Never lose progress silently. | S | High: avoids frustration #1 |
| A1.6 | **Confusing/exploitable rune set:** `runeSetTier()` uses the highest owned tier per type (even 1 unit) and sums all sets up to it. Owning 1 rune of each type at tier 8 grants the full bonus. | Set by **count** (e.g. 3/6/9 runes of the tier) or real composition; explain the rule in UI with a progress bar. | M | Medium: clarity and anti-exploit |
| A1.7 | **Identical boss mechanics:** only HP/ATK/DEF scale (`makeMonster`); the only pattern is "breath ×1.65 every 3 turns" in skip. 6 normals + 3 bosses recycled on every floor. | 3–4 patterns per boss (shield, heal, summon, enrage <30% HP) reusing `pixelfx.js`. See B12. | M | High: variety without new content |
| A1.8 | **No visible progression wall:** players don't know if they can clear the next floor until they try and lose. | "Can I beat floor N?" predictor (headless simulation with current stats, 100 battles) on the floor selector. | M | High: informed decisions |

---

## A2. Experiencia de jugador (UX) / Player Experience (UX)

### ES

| # | Problema | Mejora propuesta | Esfuerzo | Impacto |
|---|---|---|---|---|
| A2.1 | **Diálogos nativos `alert()`/`confirm()`** (승급, eclosión, reset) rompen la inmersión y se bloquean en algunos navegadores/móviles. | Modales propios con el estilo 16-bit (ya existe `openModal`): confirmación con coste, recompensa y botón deshacer donde aplique. | S | Alto: inmersión y consistencia |
| A2.2 | **Sin tutorial:** el jugador nuevo cae en un menú de 16 botones sin guía. Los primeros 10 pisos son el gancho y no hay onboarding. | Cadena de misiones guiadas (piso 1 → primer cofre → primera forja → primera habilidad) con flechas y recompensas. Ver B6. | M | Alto: retención día 1 |
| A2.3 | **Sin medidor de DPS ni comparación:** imposible saber si un cambio (habilidad, runa, mascota) mejora. | Panel "DPS estimado" en personaje + comparativa antes/después en cada mejora (ya existe `skillEst`; extender a todo). | S | Alto: decisiones con datos |
| A2.4 | **Auto-cast sin estrategia:** `runAuto` usa la primera habilidad lista; el orden de slots es la única "estrategia". | Prioridad de habilidades (orden = prioridad, ya existe `moveSlot`) + reglas simples ("usar X solo vs jefe", "guardar para burst"). Ver B4. | M | Medio: profundidad táctica |
| A2.5 | **Multi-pull de hasta 100.000 cofres en 1 clic** (`getChestMultiPulls`): congela la pestaña, sin progreso ni cancelar. | Pulls por lotes con barra de progreso, botón cancelar y resumen; límite por lote (p. ej. 1.000) con "continuar". | M | Alto: evita freezes |
| A2.6 | **Forja automática ×60 sin botón de parar** (`forgeAuto` con `await`): si el jugador quiere parar, debe recargar. | Botón "Detener" + parada automática al llegar a objetivo (p. ej. "+10" o "estrella 3"). | S | Medio: control |
| A2.7 | **Sin sonido:** juego 100 % silencioso; los efectos visuales piden audio. | WebAudio chiptune (golpe, crítico, forja, cofre) con toggle y volumen; sin archivos externos (síntesis). | M | Alto: game feel |
| A2.8 | **Sin estadísticas de partida:** no se sabe daño total, tiempo jugado, oro ganado, mejor piso. | Pantalla "Estadísticas" (datos ya existen en `achievements` + añadir contadores). Base para ranking (B9). | S | Medio: orgullo y metas |
| A2.9 | **Móvil:** modales de 760 px en pantallas de 360 px, botones pequeños, sin vibración. | Revisar breakpoints (ya hay `@media` en `styles.css`), targets ≥44 px, `navigator.vibrate` en crítico/forja, safe-area. | M | Alto: la mayoría juega en móvil |
| A2.10 | **Sin feedback de logros:** el punto rojo existe, pero no hay toast al desbloquear. | Toasts estilo 16-bit ("🏆 Logro: 100 monstruos") + sonido. | S | Medio: recompensa inmediata |

### EN

| # | Problem | Proposed improvement | Effort | Impact |
|---|---|---|---|---|
| A2.1 | **Native `alert()`/`confirm()` dialogs** (rank-up, hatching, reset) break immersion and can be blocked on some browsers/mobiles. | Custom modals in the 16-bit style ( `openModal` already exists): confirmation with cost, reward, and undo where applicable. | S | High: immersion and consistency |
| A2.2 | **No tutorial:** new players land in a 16-button menu with no guidance. The first 10 floors are the hook and there is no onboarding. | Guided quest chain (floor 1 → first chest → first forge → first skill) with arrows and rewards. See B6. | M | High: day-1 retention |
| A2.3 | **No DPS meter or comparison:** impossible to tell if a change (skill, rune, pet) is an improvement. | "Estimated DPS" panel on the character screen + before/after comparison on every upgrade (`skillEst` already exists; extend it everywhere). | S | High: data-driven decisions |
| A2.4 | **Strategy-less auto-cast:** `runAuto` uses the first listed skill; slot order is the only "strategy". | Skill priority (order = priority, `moveSlot` already exists) + simple rules ("use X only vs boss", "save for burst"). See B4. | M | Medium: tactical depth |
| A2.5 | **Multi-pull up to 100,000 chests in 1 click** (`getChestMultiPulls`): freezes the tab, no progress or cancel. | Batched pulls with progress bar, cancel button, and summary; per-batch limit (e.g. 1,000) with "continue". | M | High: avoids freezes |
| A2.6 | **×60 auto-forge with no stop button** (`forgeAuto` with `await`): to stop, the player must reload. | "Stop" button + auto-stop at target (e.g. "+10" or "3-star"). | S | Medium: control |
| A2.7 | **No sound:** 100% silent game; visual effects beg for audio. | WebAudio chiptune (hit, crit, forge, chest) with toggle and volume; no external files (synthesis). | M | High: game feel |
| A2.8 | **No run statistics:** total damage, playtime, gold earned, best floor are unknown. | "Statistics" screen (data already exists in `achievements` + add counters). Basis for ranking (B9). | S | Medium: pride and goals |
| A2.9 | **Mobile:** 760px modals on 360px screens, small buttons, no vibration. | Review breakpoints (`@media` already in `styles.css`), ≥44px targets, `navigator.vibrate` on crit/forge, safe-area. | M | High: most play on mobile |
| A2.10 | **No achievement feedback:** the red dot exists, but no toast on unlock. | 16-bit style toasts ("🏆 Achievement: 100 monsters") + sound. | S | Medium: immediate reward |

---

## A3. Rendimiento y código / Performance & Code

### ES

| # | Problema | Mejora propuesta | Esfuerzo | Impacto |
|---|---|---|---|---|
| A3.1 | **`stats()` recalculado en cada golpe** (`heroTaken`, `basicAttack`, `castSkill`, `renderHud`…): suma 6 fuentes de bonus por llamada. | Cachear `stats()` y recalcular solo cuando cambia el estado (versión de estado / dirty flag). | S | Alto: menos CPU en batalla |
| A3.2 | **`save()` serializa todo `S` en cada acción** (forja ×60 = 60 `JSON.stringify` + `localStorage`). | Guardado con debounce (p. ej. 500 ms) + guardado inmediato solo en puntos seguros (victoria, salida). | S | Medio: menos jank |
| A3.3 | **Re-render completo con `innerHTML`** en cada `refreshAll()` (menú de 16 botones, HUD, dock). | Render selectivo por escena; reutilizar nodos en HUD/log. Medir con Performance tab antes/después. | M | Medio: fluidez |
| A3.4 | **Bucles `requestAnimationFrame` siempre activos** (`heroTick`, `FX.tick`) incluso en título/menú. | Pausar animaciones fuera de batalla/forja; respetar `prefers-reduced-motion`. | S | Medio: batería |
| A3.5 | **`document.write` para cargar mods** (`PD.loadMods`): bloqueado por navegadores modernos y sin CSP. | Carga con `<script async>` + `await import()`; lista de mods en `mods/mods.js` sin `document.write`. | M | Alto: compatibilidad |
| A3.6 | **Handlers inline `onclick="..."`** en todo el HTML generado: riesgo XSS vía mods y difícil de mantener. | Delegación de eventos (ya existe para `data-act`) + `addEventListener`; CSP sin `unsafe-inline`. | M | Alto: seguridad |
| A3.7 | **Errores silenciosos:** `save()` con `catch(e){}` vacío; si `localStorage` está lleno/bloqueado, el jugador pierde progreso sin saberlo. | Avisar en UI ("No se pudo guardar: almacenamiento lleno") + exportar backup automático. | S | Alto: evita pérdida de datos |
| A3.8 | **CDN sin pin ni SRI:** Galmuri `@latest` puede cambiar y romper el estilo; sin fallback si el CDN cae. | Versión exacta + `integrity` + fallback a fuente monospace local. | S | Medio: estabilidad |
| A3.9 | **C++ con `srand(time)`/`rand()`** y sin persistencia: aleatoriedad predecible y progreso perdido al cerrar. | `<random>` (`mt19937`) + guardado en archivo (o archivar el prototipo, ver plan Fase 4). | S | Bajo (prototipo) |

### EN

| # | Problem | Proposed improvement | Effort | Impact |
|---|---|---|---|---|
| A3.1 | **`stats()` recalculated on every hit** (`heroTaken`, `basicAttack`, `castSkill`, `renderHud`…): sums 6 bonus sources per call. | Cache `stats()` and recompute only when state changes (state version / dirty flag). | S | High: less CPU in battle |
| A3.2 | **`save()` serializes all of `S` on every action** (×60 forge = 60 `JSON.stringify` + `localStorage`). | Debounced save (e.g. 500ms) + immediate save only at safe points (victory, exit). | S | Medium: less jank |
| A3.3 | **Full re-render with `innerHTML`** on every `refreshAll()` (16-button menu, HUD, dock). | Selective per-scene rendering; reuse nodes in HUD/log. Measure with Performance tab before/after. | M | Medium: smoothness |
| A3.4 | **Always-on `requestAnimationFrame` loops** (`heroTick`, `FX.tick`) even on title/menu. | Pause animations outside battle/forge; respect `prefers-reduced-motion`. | S | Medium: battery |
| A3.5 | **`document.write` to load mods** (`PD.loadMods`): blocked by modern browsers and no CSP. | Load with `<script async>` + `await import()`; mod list in `mods/mods.js` without `document.write`. | M | High: compatibility |
| A3.6 | **Inline `onclick="..."` handlers** in all generated HTML: XSS risk via mods and hard to maintain. | Event delegation (already exists for `data-act`) + `addEventListener`; CSP without `unsafe-inline`. | M | High: security |
| A3.7 | **Silent errors:** `save()` with empty `catch(e){}`; if `localStorage` is full/blocked, players lose progress unknowingly. | UI warning ("Could not save: storage full") + automatic backup export. | S | High: prevents data loss |
| A3.8 | **Unpinned CDN without SRI:** Galmuri `@latest` can change and break the style; no fallback if the CDN fails. | Exact version + `integrity` + fallback to local monospace font. | S | Medium: stability |
| A3.9 | **C++ with `srand(time)`/`rand()`** and no persistence: predictable RNG and lost progress on exit. | `<random>` (`mt19937`) + file save (or archive the prototype, see plan Phase 4). | S | Low (prototype) |

---

## A4. Economía y guardado / Economy & Save

### ES

| # | Problema | Mejora propuesta | Esfuerzo | Impacto |
|---|---|---|---|---|
| A4.1 | **Sin exportar/importar save:** cambiar de navegador/dispositivo = empezar de cero (ya advertido en README). | Exportar/importar JSON + código de guardado corto; backup automático antes de reset. | S | Alto: confianza |
| A4.2 | **Sin nube ni respaldo:** un `localStorage` corrupto borra meses de progreso. | (Opcional) Guardado en nube vía GitHub Gist del propio usuario o `file-system-access` local; mínimo: backup automático en `sessionStorage` + exportar. | M | Alto: seguridad |
| A4.3 | **Oro sin techo útil:** `fmt()` formatea, pero no hay "oro máximo" ni sumideros de late game salvo coste exponencial de grabado. | Sumideros de late: reroll de opciones con coste creciente, donación a gremio, cosméticos caros, prestigio (B11). | M | Medio: longevidad |
| A4.4 | **Llaves con doble uso confuso:** cofres, mascotas y raids compiten por la misma moneda sin guía de prioridades. | Guía "¿En qué gastar llaves?" con eficiencia comparada + paquetes de eclosión con pity (ver A4.5). | S | Medio: claridad |
| A4.5 | **Mascotas sin pity ni evolución:** duplicados solo hacen `count++` (sin uso visible salvo nivel manual con oro). | Evolución por duplicados (3 iguales → siguiente forma) + pity de eclosión (garantizado épico cada 30). | M | Medio: colección con metas |
| A4.6 | **Venta automática sin elección:** duplicados se venden solos (`SELL`/`SKILL_REFUND`); el jugador no elige oro vs llaves. | Al duplicado legendario/mítico, elegir recompensa; resto automático con resumen. | S | Medio: agencia |

### EN

| # | Problem | Proposed improvement | Effort | Impact |
|---|---|---|---|---|
| A4.1 | **No save export/import:** switching browser/device = starting over (already warned in README). | Export/import JSON + short save code; automatic backup before reset. | S | High: trust |
| A4.2 | **No cloud or backup:** a corrupted `localStorage` wipes months of progress. | (Optional) Cloud save via the user's own GitHub Gist or local `file-system-access`; minimum: automatic backup in `sessionStorage` + export. | M | High: safety |
| A4.3 | **Gold with no useful cap:** `fmt()` formats, but there is no "max gold" or late-game sinks besides exponential engraving cost. | Late-game sinks: growing-cost option reroll, guild donation, expensive cosmetics, prestige (B11). | M | Medium: longevity |
| A4.4 | **Keys with confusing dual use:** chests, pets, and raids compete for the same currency with no priority guidance. | "How to spend keys?" guide with compared efficiency + hatch packs with pity (see A4.5). | S | Medium: clarity |
| A4.5 | **Pets with no pity or evolution:** duplicates only do `count++` (no visible use besides manual gold leveling). | Evolution from duplicates (3 identical → next form) + hatch pity (guaranteed epic every 30). | M | Medium: collection goals |
| A4.6 | **Auto-sell with no choice:** duplicates sell themselves (`SELL`/`SKILL_REFUND`); players can't choose gold vs keys. | On legendary/mythic duplicates, choose the reward; rest auto with summary. | S | Medium: agency |

---

# PARTE B — NOVEDADES / PART B — NEW FEATURES

> Ordenadas por **impacto/esfuerzo**. Cada una incluye: qué es, por qué, y cómo encaja con los sistemas actuales. / Ordered by **impact/effort**. Each includes: what it is, why, and how it fits current systems.

## B1. Progreso offline (idle real) / Offline Progress (True Idle)

**ES:** Al volver tras X horas, calcular batallas simuladas (con `skipResolve` ya existente) y dar oro/llaves con tope (p. ej. 8 h) + resumen "Mientras estabas fuera…". Es la función #1 que los jugadores de idle esperan y hoy no existe: el juego solo progresa con la pestaña abierta.
**EN:** On return after X hours, compute simulated battles (reusing existing `skipResolve`) and grant gold/keys with a cap (e.g. 8h) + a "While you were away…" summary. This is the #1 feature idle players expect and it doesn't exist today: the game only progresses with the tab open.

- **Encaja con:** `makeMonster`, `victory()`, `stats()` — reutilizar sin UI nueva salvo un modal al volver.
- **Esfuerzo:** M · **Impacto:** Muy alto (retención).

## B2. Auto-farm con condiciones de parada / Auto-Farm with Stop Conditions

**ES:** Toggle "Farm automático" que repite el piso actual (ya existe `repeatStage`) y se detiene si: HP < 30 %, oro ≥ objetivo, llaves ≥ objetivo, o tras N batallas. Hoy el farm manual exige pulsar "siguiente" cada batalla.
**EN:** "Auto-farm" toggle that repeats the current floor ( `repeatStage` already exists) and stops if: HP < 30%, gold ≥ target, keys ≥ target, or after N battles. Today manual farming requires pressing "next" every battle.

- **Encaja con:** `startBattle`, `resultNext/resultRepeat`, `battleSpeed='skip'`.
- **Esfuerzo:** S · **Impacto:** Muy alto (QoL idle).

## B3. Prestigio / Renacimiento / Prestige / Rebirth

**ES:** Tras alcanzar un piso alto (p. ej. 100), "Renacer": reset de equipo/entrenamiento a cambio de un multiplicador permanente (+X % todo) y estrellas de prestigio. Es el sistema que da longevidad infinita a los idle y hoy falta: la progresión es lineal y sin reset voluntario.
**EN:** After reaching a high floor (e.g. 100), "Rebirth": reset gear/training in exchange for a permanent multiplier (+X% everything) and prestige stars. This is the system that gives idle games infinite longevity and it's missing today: progression is linear with no voluntary reset.

- **Encaja con:** `defaultState`, `stats()` (añadir `prestigeMult`), `sanitize()` (conservar prestigio).
- **Esfuerzo:** M · **Impacto:** Muy alto (longevidad).

## B4. Loadouts y prioridad de habilidades / Loadouts & Skill Priority

**ES:** 2–3 presets ("Jefe", "Farm", "Raid") que guardan equipo + 4 habilidades + mascota + velocidad; un clic cambia de build. Más reglas de auto-cast: "solo vs jefe", "guardar para burst", "usar poción < 40 %".
**EN:** 2–3 presets ("Boss", "Farm", "Raid") storing gear + 4 skills + pet + speed; one click switches builds. Plus auto-cast rules: "boss only", "save for burst", "use potion < 40%".

- **Encaja con:** `equippedSkills`, `moveSlot`, `autoCast`, `runAuto`.
- **Esfuerzo:** M · **Impacto:** Alto (estrategia sin fricción).

## B5. Inventario de equipo (colección) / Gear Inventory (Collection)

**ES:** Hoy solo hay 1 espada + 1 armadura equipadas; todo duplicado se vende. Pasar a inventario (p. ej. 20 slots) con comparación, bloqueo de favoritos y sets de equipo (2/4 piezas = bonus). Da valor a los drops y permite builds alternativas.
**EN:** Today only 1 sword + 1 armor are equipped; every duplicate is sold. Move to an inventory (e.g. 20 slots) with comparison, favorite-locking, and gear sets (2/4 pieces = bonus). Gives drops value and enables alternative builds.

- **Encaja con:** `openOne`, `EQUIP`, `SWORD_POOL/ARMOR_POOL`, `equipBonus`.
- **Esfuerzo:** L · **Impacto:** Alto (profundidad).

## B6. Tutorial y misiones diarias / Tutorial & Daily Quests

**ES:** (a) Cadena guiada de 8–10 misiones para los primeros 10 pisos (ver A2.2). (b) 3 misiones diarias rotativas (p. ej. "forja 5 veces", "abre 10 cofres", "derrota 1 jefe") con recompensa en llaves + racha de login.
**EN:** (a) Guided chain of 8–10 quests for the first 10 floors (see A2.2). (b) 3 rotating daily quests (e.g. "forge 5 times", "open 10 chests", "defeat 1 boss") with key rewards + login streak.

- **Encaja con:** `achievements` (extender), `SAVE_KEY` (fecha de última visita).
- **Esfuerzo:** M · **Impacto:** Alto (retención diaria).

## B7. Mundos nuevos / New Worlds

**ES:** `WORLDS` ya está diseñado para múltiples mundos (hoy solo `normal`). Añadir 2: **Bosque Espectral** (veneno/slow) y **Forja del Vacío** (quemadura/crítico), cada uno con 6 normales, 3 élites, 3 jefes, paleta y multiplicador propios. Reutiliza `addWorld` de la API `PD`.
**EN:** `WORLDS` is already designed for multiple worlds (only `normal` today). Add 2: **Spectral Forest** (poison/slow) and **Void Forge** (burn/crit), each with 6 normals, 3 elites, 3 bosses, own palette and multiplier. Reuses the `PD.addWorld` API.

- **Encaja con:** `WORLDS`, `makeMonster`, `drawBattleBackdrop`, `PD.addWorld`.
- **Esfuerzo:** M (arte procedural) · **Impacto:** Alto (contenido).

## B8. Mecánicas de jefe y estados alterados / Boss Mechanics & Status Effects

**ES:** Patrones por jefe (escudo que absorbe, curación al 50 %, invocación de esbirro, furia <30 % HP) + estados en combate: veneno, quemadura, congelación, aturdimiento (hoy solo existen como texto en mascotas/habilidades). Añade lectura táctica sin subir stats.
**EN:** Per-boss patterns (absorbing shield, heal at 50%, minion summon, enrage <30% HP) + combat statuses: poison, burn, freeze, stun (today only as text on pets/skills). Adds tactical reading without stat inflation.

- **Encaja con:** `castSkill`, `basicAttack`, `skipResolve`, `RAID_BOSSES.pattern` (ya hay texto, falta mecánica).
- **Esfuerzo:** M · **Impacto:** Alto (variedad).

## B9. Ranking local y tarjeta para compartir / Local Ranking & Share Card

**ES:** Ranking local (mejor piso, DPS, prestigio) + botón "Compartir" que genera una imagen (Canvas ya disponible) con piso/equipo/DPS para redes. Sin backend: el ranking vive en `localStorage` y la tarjeta se exporta como PNG.
**EN:** Local ranking (best floor, DPS, prestige) + "Share" button generating an image (Canvas already available) with floor/gear/DPS for social networks. No backend: ranking lives in `localStorage` and the card exports as PNG.

- **Encaja con:** `achievements`, `stats()`, `draw*` (Canvas).
- **Esfuerzo:** S · **Impacto:** Medio-alto (viralidad sin servidor).

## B10. PvP asíncrono (fantasmas) / Async PvP (Ghosts)

**ES:** Batallas contra "fantasmas" de otros jugadores (stats exportados como JSON) o contra el propio mejor build. Sin servidor: compartir código de build = retar. Reutiliza `startBattle` con un `Player` fantasma.
**EN:** Battles against other players' "ghosts" (stats exported as JSON) or against your own best build. No server: sharing a build code = issuing a challenge. Reuses `startBattle` with a ghost `Player`.

- **Encaja con:** `startBattle`, `stats()`, exportar/importar (A4.1).
- **Esfuerzo:** M · **Impacto:** Medio-alto (rejugabilidad).

## B11. Torre infinita y boss rush / Endless Tower & Boss Rush

**ES:** Modo separado de la campaña: torre con pisos cada vez más duros y recompensas crecientes por altura (sin avanzar la campaña), y boss rush (cadena de jefes sin curación). Da metas cortas para sesiones de 5 minutos.
**EN:** Mode separate from the campaign: a tower with ever-harder floors and growing rewards by height (without advancing the campaign), plus boss rush (boss chain with no healing). Gives short goals for 5-minute sessions.

- **Encaja con:** `makeMonster`, `victory/defeat`, `S.stage/maxStage` (añadir `tower` separado).
- **Esfuerzo:** M · **Impacto:** Medio-alto.

## B12. Tienda de pociones y consumibles / Potion Shop & Consumables

**ES:** Hoy la poción es automática (40 % + `potionPct`, cooldown 3). Añadir tienda: poción mayor, elixir de crítico (10 batallas), imán de llaves, escudo temporal. Consumibles con oro = sumidero de oro útil.
**EN:** Today the potion is automatic (40% + `potionPct`, 3-turn cooldown). Add a shop: greater potion, crit elixir (10 battles), key magnet, temporary shield. Gold consumables = a useful gold sink.

- **Encaja con:** `playerPotion`, `stats().potion`, `S.hero.gold`.
- **Esfuerzo:** S · **Impacto:** Medio.

## B13. Evolución de mascotas y runas favoritas / Pet Evolution & Favorite Runes

**ES:** (a) Evolución de mascotas por duplicados (3 iguales → forma superior con nueva habilidad). (b) Bloquear runas favoritas para que `synthAll` no las consuma. (c) Evolución visual (paleta/nivel de estrella).
**EN:** (a) Pet evolution from duplicates (3 identical → superior form with new skill). (b) Lock favorite runes so `synthAll` doesn't consume them. (c) Visual evolution (palette/star level).

- **Encaja con:** `hatchPet`, `synthAll`, `PET_TYPES`, `drawPet`.
- **Esfuerzo:** M · **Impacto:** Medio.

## B14. Historia y NPCs en el pueblo / Story & Town NPCs

**ES:** Diálogos cortos con NPCs (herrero, alquimista, tabernero) que explican sistemas y dan misiones de lore. Hoy el "pueblo" es un menú de 16 botones sin identidad. 5–10 líneas por NPC cambian el tono por completo.
**EN:** Short dialogues with NPCs (blacksmith, alchemist, innkeeper) explaining systems and giving lore quests. Today the "town" is a 16-button menu with no identity. 5–10 lines per NPC completely change the tone.

- **Encaja con:** `scene-menu`, `openModal`, `achievements`.
- **Esfuerzo:** S (texto) · **Impacto:** Medio (identidad).

## B15. Sonido y música / Sound & Music

**ES:** Ver A2.7. Añadir además música chiptune procedural por escena (título tranquilo, batalla intensa, forja rítmica) con WebAudio, sin archivos.
**EN:** See A2.7. Also add procedural chiptune music per scene (calm title, intense battle, rhythmic forge) with WebAudio, no files.

- **Esfuerzo:** M · **Impacto:** Alto (game feel).

## B16. Eventos y jefes limitados / Events & Limited Bosses

**ES:** Evento semanal (p. ej. "Invasión del Abismo": jefe especial con recompensa doble) usando el sistema de raids. Reutiliza `RAID_BOSSES` + `startRaidBattle` con ventana temporal.
**EN:** Weekly event (e.g. "Abyss Invasion": special boss with double reward) using the raid system. Reuses `RAID_BOSSES` + `startRaidBattle` with a time window.

- **Esfuerzo:** S · **Impacto:** Medio (razón para volver).

## B17. Modo hardcore y estadísticas de cuenta / Hardcore Mode & Account Stats

**ES:** (a) Modo hardcore: sin poción, derrota = reset de piso a 1 (recompensa: título + bonus). (b) Estadísticas de cuenta: tiempo total, daño total, cofres abiertos, oro ganado (ver A2.8).
**EN:** (a) Hardcore mode: no potion, defeat = floor reset to 1 (reward: title + bonus). (b) Account stats: total time, total damage, chests opened, gold earned (see A2.8).

- **Esfuerzo:** S · **Impacto:** Medio (para veteranos).

## B18. Taller de mods en el juego / In-Game Mod Workshop

**ES:** La API `PD` ya permite `addSkill/addMonster/addWorld/addWeapon`. Añadir navegador de mods en el juego (lista, activar/desactivar sin editar `mods.js`, ver errores por mod). Hoy activar un mod exige editar un archivo y recargar.
**EN:** The `PD` API already allows `addSkill/addMonster/addWorld/addWeapon`. Add an in-game mod browser (list, enable/disable without editing `mods.js`, per-mod errors). Today enabling a mod requires editing a file and reloading.

- **Encaja con:** `PD.loadMods/registerMod`, `openModList`.
- **Esfuerzo:** M · **Impacto:** Medio (comunidad).

---

# PARTE C — PRIORIZACIÓN / PART C — PRIORITIZATION

## C1. Orden de ejecución sugerido / Suggested execution order

### ES

| Orden | Qué | Por qué primero |
|---|---|---|
| **1. Quick wins (1–2 semanas)** | A1.5 (no perder forja), A1.1 (HP persistente), A2.1 (modales propios), A2.3 (DPS), A2.6 (parar forja), A3.7 (aviso de guardado), A4.1 (exportar save) | Alto impacto, esfuerzo S, sin arquitectura nueva |
| **2. Core idle (semanas 3–5)** | B1 (offline), B2 (auto-farm), B6 (tutorial + diarias), A2.7/B15 (sonido) | Lo que define a un idle moderno; retención |
| **3. Profundidad (semanas 6–9)** | B3 (prestigio), B4 (loadouts), B8 (jefes/estados), B5 (inventario) | Longevidad y estrategia |
| **4. Contenido (semanas 10–12)** | B7 (2 mundos), B11 (torre/rush), B16 (evento), B14 (NPCs) | Contenido visible para la release v1.0 |
| **5. Social (post-v1.0)** | B9 (ranking/compartir), B10 (PvP fantasmas), B18 (taller de mods) | Viralidad y comunidad, sin servidor |

### EN

| Order | What | Why first |
|---|---|---|
| **1. Quick wins (weeks 1–2)** | A1.5 (don't lose forge), A1.1 (persistent HP), A2.1 (custom modals), A2.3 (DPS), A2.6 (stop forge), A3.7 (save warning), A4.1 (export save) | High impact, S effort, no new architecture |
| **2. Core idle (weeks 3–5)** | B1 (offline), B2 (auto-farm), B6 (tutorial + dailies), A2.7/B15 (sound) | What defines a modern idle game; retention |
| **3. Depth (weeks 6–9)** | B3 (prestige), B4 (loadouts), B8 (bosses/statuses), B5 (inventory) | Longevity and strategy |
| **4. Content (weeks 10–12)** | B7 (2 worlds), B11 (tower/rush), B16 (event), B14 (NPCs) | Visible content for the v1.0 release |
| **5. Social (post-v1.0)** | B9 (ranking/share), B10 (ghost PvP), B18 (mod workshop) | Virality and community, no server |

## C2. Qué NO agregar (por ahora) / What NOT to add (for now)

### ES

- **Backend/cuentas/multiplayer en tiempo real:** rompe la filosofía "abrir y jugar" y exige servidor, auth y moderación. El PvP asíncrono (B10) da el 80 % del valor con el 10 % del coste.
- **Motor 3D o assets externos pesados:** el encanto es el pixel-art procedural; un atlas PNG + `pixelfx.js` ya rinden.
- **Monetización (IAP/anuncios):** cambiaría el posicionamiento gratuito y exige tiendas/plataformas. Primero retención, después (si acaso) cosméticos.
- **Más monedas:** oro + llaves + fragmentos ya son suficientes; una tercera moneda diluye.
- **Más grados de equipo:** 5 grados (normal→mítico) + estrellas + arcoíris ya es profundidad suficiente; añadir otro grado es inflación.

### EN

- **Backend/accounts/real-time multiplayer:** breaks the "open and play" philosophy and requires server, auth, and moderation. Async PvP (B10) delivers 80% of the value at 10% of the cost.
- **3D engine or heavy external assets:** the charm is procedural pixel art; a PNG atlas + `pixelfx.js` already perform.
- **Monetization (IAP/ads):** would change the free positioning and require stores/platforms. Retention first, cosmetics later (if ever).
- **More currencies:** gold + keys + shards are already enough; a third currency dilutes.
- **More gear grades:** 5 grades (normal→mythic) + stars + rainbow is already enough depth; another grade is inflation.

---

## Resumen en una página / One-page summary

### ES

**Mejorar primero:** no perder la forja al equipar (A1.5), HP persistente (A1.1), DPS visible (A2.3), modales propios (A2.1), exportar save (A4.1), cachear `stats()` (A3.1).
**Agregar primero:** progreso offline (B1), auto-farm (B2), tutorial + diarias (B6), sonido (B15), prestigio (B3).
**No agregar:** backend, 3D, monetización, más monedas/grados.

### EN

**Improve first:** don't lose forge on equip (A1.5), persistent HP (A1.1), visible DPS (A2.3), custom modals (A2.1), export save (A4.1), cache `stats()` (A3.1).
**Add first:** offline progress (B1), auto-farm (B2), tutorial + dailies (B6), sound (B15), prestige (B3).
**Don't add:** backend, 3D, monetization, more currencies/grades.

---

*Fin / End — Mejoras y Novedades (ES/EN). Ver también `PLAN_BILINGUAL.md` para el análisis completo y el roadmap de 12 semanas. / See also `PLAN_BILINGUAL.md` for the full analysis and 12-week roadmap.*
