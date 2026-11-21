#pragma once

#include "Player.h"
#include "BattleSystem.h"

class SkillManager;
class RuneManager;

// ============================================================================
// [Dungeon 클래스]
// 던전 스테이지 진행, 스테이지에 따른 몬스터(일반/엘리트/보스) 생성,
// 전투 개시 및 승패에 따른 보상(골드, 열쇠, 보스 장비, 룬, 체력 회복)을 총괄합니다.
// ============================================================================
class Dungeon
{
private:
    int currentStage;           // 현재 도전 중인 던전 스테이지 (1부터 시작)
    BattleSystem battleSystem;  // 전투를 실행하는 전투 시스템 객체

public:
    Dungeon();

    // 현재 스테이지 반환
    int getCurrentStage() const;

    // 배속 설정 함수들 (10스테이지 이상 기능)
    void setBattleSpeed(BattleSpeed speed);
    BattleSpeed getBattleSpeed() const;

    // 플레이어가 던전에 입장하여 전투를 진행하는 핵심 함수
    void enterDungeon(Player& player, SkillManager& skillManager, RuneManager& runeManager);
};
