# PixelDungeon_simple

[![CI](https://github.com/Azganath/PixelDungeon_simple/actions/workflows/ci.yml/badge.svg)](https://github.com/Azganath/PixelDungeon_simple/actions/workflows/ci.yml)

# ⚔️ [게임 제목]

웹 브라우저에서 바로 즐길 수 있는 방치형·단조 성장 RPG입니다.  
장비를 강화하고 보스를 토벌하며 더 높은 스테이지에 도전해 보세요!

## 🎮 게임 플레이 링크
👉 **[여기를 클릭해서 게임 시작하기](https://jun-joyfully.github.io/PixelDungeon_simple/)**

---

## ✨ 주요 콘텐츠

* **🔨 대장간 & 초월 단조**
  * 검과 방어구 강화 및 실패 시 확률 보정 시스템
  * 장비 무료 승급 및 궁극의 **무지개별 초월 각성**
  * 최대 60회까지 한 번에 진행하는 **연속 단조** 지원
* **⚔️ 스테이지 & 보스 토벌**
  * 일반 몬스터, 정예 몬스터, 스테이지 보스 및 50층 단위 심연 대군주 등장
  * 보스 처치 시 획득하는 **보스 전용 무기·방어구** 파밍
  * 스테이지 10 클리어 시 **전투 2배속 및 스킵 모드** 해금
  * 클리어한 스테이지 반복 파밍 및 레이드 콘텐츠
* **💎 영웅 육성**
  * 골드와 소환 열쇠를 활용한 **영웅 훈련소** 및 **상자 소환**
  * 룬 획득 및 **룬 합성소** 승급 시스템

---

## ⌨️ 편의 단축키 (전투 결과창)

* **`Enter`** : 다음 스테이지 즉시 진행 (패배/레이드 시 마을로 귀환)
* **`R`** : 방금 클리어한 스테이지 반복 전투
* **`ESC`** : 마을(메인 화면)로 귀환

---

## 📌 테스트 안내 및 주의사항

* **저장 방식:** 게임 진행 데이터는 현재 사용 중인 브라우저(로컬 스토리지)에 자동 저장됩니다. 시크릿 모드를 사용하거나 브라우저 캐시/쿠키를 삭제하면 데이터가 초기화될 수 있습니다.
* **테스트 버전:** 밸런스 조정 및 기능 추가가 수시로 이루어질 수 있습니다. 버그 제보나 피드백은 언제든 환영합니다!
* **세이브 백업 (v1.1):** 타이틀/마을의 **[💾 세이브]** 버튼으로 진행 상황을 코드나 `.json` 파일로 내보낼 수 있습니다. 다른 기기에서 **[📥 가져오기]** 로 그대로 복원됩니다.
* **전투 사이 HP 유지 (v1.1):** 전투에서 잃은 HP는 다음 전투로 이어지며, 승리 시 최대 HP의 30%만 회복됩니다. 물약·흡혈·방어력이 실제로 의미를 갖습니다. (패배 시에는 마을에서 완전 회복)
* **오프라인 수익 (v1.2):** 앱을 닫아둔 동안에도 최대 8시간까지 자동 사냥 수익이 쌓입니다 (5분 유예, 50% 효율). 접속하면 `🌙 오프라인 수익 보고서`가 뜹니다.
* **자동 파밍 (v1.2):** 마을의 `🔁 자동 파밍`에서 HP·골드·열쇠·전투 횟수 조건을 정하면 결과창이 자동으로 넘어가며 계속 사냥합니다.
* **튜토리얼 & 일일 퀘스트 (v1.2):** 5단계 튜토리얼 보상 + 매일 00:00에 새로 열리는 3개의 일일 퀘스트, 연속 접속 보너스(최대 7일).
* **사운드 & 언어 (v1.2):** 웹오디오로 합성한 칩튠 효과음(볼륨/음소거 저장)과 `🌐 언어` 선택 (한국어 / English / Español).
* **프레스티지 / 환생 (v1.3):** Stage 100 도달 후 환생하면 별 1개(+10% 전체 배율, 최대 20개 ×3)를 얻고 장비·훈련·룬이 초기화됩니다. 도감·업적·펫·골드·열쇠는 유지됩니다.
* **로드아웃 & 자동 시전 규칙 (v1.4):** `🎯 로드아웃`에서 스킬 4개·펫·배속을 3개 프리셋으로 저장/적용하고, 스킬마다 `항상 / 보스전만 / 마무리(50%↓)` 규칙을 지정할 수 있습니다. 규칙은 AUTO·⚡스킵·오프라인에도 동일하게 적용됩니다.
* **보스 패턴 & 상태이상 (v1.4):** 10층 단위 보스가 보호막(🛡️)·자가 회복(💚)·하수인 소환(👥)·격노(😡)를 사용합니다. 스킬 적중 시 ☠️독·🔥화상·❄️빙결·💫기절이 확률로 걸리고, 빙결/기절은 보스의 턴을 뺏습니다.
* **장비 인벤토리 (v1.5, 데이터):** 뽑기에서 나온 장비가 자동 판매되지 않고 **최대 20칸** 인벤토리에 보관됩니다. 더 높은 등급이 나오면 즉시 장착되고 이전 장비는 인벤토리로 돌아가며, 강화·초월 진행도는 그대로 따라옵니다. 가득 차면 자동 판매됩니다. (비교·장착 화면은 다음 업데이트)
* **밸런스 (v1.3):** 훈련 비용이 레벨당 2%씩 증가하고, Lv.100 이후 훈련 효과는 점감합니다. 승급은 첫 1회 무료, 이후 5만 G / 20만 G. 곡선은 `docs/BALANCE.md` 에 시뮬레이션 결과로 기록됩니다.

---

## 🛠️ 개발 / Development

게임은 빌드 과정 없이 정적 파일로 동작합니다 (`index.html` + `game.js` + `pixelfx.js`).

* **수식 모듈:** 모든 데미지·비용·확률 공식은 `src/core/formulas.js` 에 있으며, 브라우저(`window.PDCF`)와 테스트가 **같은 코드**를 사용합니다.
* **테스트:** `npm test` (Node 18+, 의존성 설치 불필요 — `node --test` 사용)
* **문법 검사:** `npm run check`
* **로컬 실행:** `npm run serve` 후 <http://localhost:8080> 접속
* **CI:** 모든 push/PR 에서 문법 검사와 테스트가 자동 실행됩니다 (`.github/workflows/ci.yml`).

```
src/core/formulas.js   순수 공식 (데미지·비용·상자 확률·DPS)
tests/*.test.js        단위 테스트 + game.js 통합 스모크 테스트
tests/fixtures/        세이브 마이그레이션 픽스처 (save-v7.json)
src/i18n/              번역 런타임 + 사전 (ko/en/es) + 자동 추출 인벤토리
tools/                 i18n 추출·번들 스크립트
```

### English

PixelDungeon_simple is a static, dependency-free 16-bit idle RPG. There is no build step.

* `src/core/formulas.js` holds every pure formula (damage, costs, chest odds, DPS) and is shared by the browser (`window.PDCF`) and the test suite.
* `npm test` runs the Node test runner (no `npm install` needed); `npm run check` runs syntax checks; `npm run serve` starts a local static server on port 8080.
* i18n: `npm run i18n` re-extracts every Korean string (`src/i18n/ko.auto.json`) and rebuilds `src/i18n/strings.js` from the curated `ko/en/es` dictionaries. The runtime (`src/i18n/index.js`) exposes `t()`, `setLang()` and a Korean fallback, so missing translations never break the layout.
* CI (`.github/workflows/ci.yml`) runs both on every push and pull request.
* **New in v1.1:** save export/import (code or `.json`), HP persists between battles (30% heal on victory), DPS meter in the menu/character/forge screens, stoppable auto-forge with a `+10`/`MAX` goal, and in-game modals instead of native `alert()`/`confirm()` dialogs.
* **New in v1.5 (data layer):** gear drops are no longer auto-sold — up to 20 swords/armors are stored with ids and favourites, the previous piece returns to the bag with its forge progress, and overflow falls back to selling. (Compare/equip UI lands in 3.4b.)
* **New in v1.4:** 3 loadout presets (skills/pet/speed/rules) with per-skill auto-cast rules (`always`/`boss only`/`finisher <50 %`) honoured by AUTO, skip mode and the offline simulation; boss patterns (shield, self-heal, minions, enrage) and status effects (poison, burn, freeze, stun) resolved by one shared monster-turn resolver.
* **New in v1.3:** prestige/rebirth (Stage 100 → +10 % per star, up to ×3, resets gear/training/runes but keeps codex, achievements, pets, gold and keys) and rebalanced curves (training costs +2 %/level, soft cap after Lv.100, rank-ups free once then 50k/200k) documented in `docs/BALANCE.md` and guarded by `npm run balance:check`.
* **New in v1.2:** offline earnings (up to 8 h, 5 min grace, 50% efficiency) with a report modal, auto-farm with HP/gold/keys/battle stop rules, a 5-step tutorial plus 3 rotating daily quests with a login streak, WebAudio chiptune SFX (no asset files), coalesced saves + memoised `stats()`, and a KO/EN/ES language picker built on the new i18n layer.
