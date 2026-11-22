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
```

### English

PixelDungeon_simple is a static, dependency-free 16-bit idle RPG. There is no build step.

* `src/core/formulas.js` holds every pure formula (damage, costs, chest odds, DPS) and is shared by the browser (`window.PDCF`) and the test suite.
* `npm test` runs the Node test runner (no `npm install` needed); `npm run check` runs syntax checks; `npm run serve` starts a local static server on port 8080.
* CI (`.github/workflows/ci.yml`) runs both on every push and pull request.
* **New in v1.1:** save export/import (code or `.json`), HP persists between battles (30% heal on victory), DPS meter in the menu/character/forge screens, stoppable auto-forge with a `+10`/`MAX` goal, and in-game modals instead of native `alert()`/`confirm()` dialogs.
