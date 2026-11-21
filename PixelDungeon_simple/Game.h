#pragma once

#include "Player.h"
#include "Dungeon.h"
#include "SkillManager.h"
#include "RuneManager.h"
#include "ChestSystem.h"

// ============================================================================
// [Game 클래스]
// 게임 전체의 흐름(메인 루프)과 메뉴 출력, 사용자 입력을 관리합니다.
// 플레이어, 던전, 스킬 관리자, 룬 관리자, 상자 시스템을 멤버로 보유합니다.
// ============================================================================
class Game
{
private:
    Player player;             // 플레이어 캐릭터
    Dungeon dungeon;           // 던전 진행 객체
    SkillManager skillManager; // 보유 스킬 관리 객체
    RuneManager runeManager;   // 보유 룬 및 세트 효과 관리 객체
    ChestSystem chestSystem;   // 상자 개봉(가챠) 시스템

    // 메인 메뉴 출력
    void showMainMenu();

    // 캐릭터 정보 출력
    void showCharacterInfo();

    // 스킬 메뉴 (목록 확인 및 자동/수동 전환)
    void handleSkillMenu();

    // 검 / 방어구 강화 메뉴 (1회 및 연속 강화)
    void handleSwordUpgrade();
    void handleArmorUpgrade();

    // 전투 배속 설정 메뉴
    void handleSpeedSetting();

public:
    // 게임 실행 (메인 루프)
    void run();
};
