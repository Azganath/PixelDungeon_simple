#pragma once

#include "Player.h"
#include "Monster.h"

class SkillManager;

// ============================================================================
// [BattleResult - 전투 결과 열거형]
// ============================================================================
enum class BattleResult
{
    PLAYER_WIN,  // 플레이어 승리
    PLAYER_LOSE  // 플레이어 패배
};

// ============================================================================
// [BattleSpeed - 전투 연출 속도 모드]
// 10스테이지 클리어 시 잠금 해제되는 옵션입니다.
// ============================================================================
enum class BattleSpeed
{
    NORMAL = 1, // 1배속 (0.3초 대기로 턴을 지켜봄)
    FAST = 2,   // 2배속 (0.07초 대기로 빠르게 진행)
    SKIP = 3    // 자동 스킵 (텍스트 없이 초고속 연산 후 결과만 출력)
};

// ============================================================================
// [BattleSystem 클래스]
// 플레이어와 몬스터의 턴제 1:1 전투를 진행하고 승패 결과를 판정합니다.
// ============================================================================
class BattleSystem
{
private:
    BattleSpeed currentSpeed; // 현재 설정된 전투 속도

public:
    BattleSystem();

    // 배속 설정 및 조회
    void setBattleSpeed(BattleSpeed speed);
    BattleSpeed getBattleSpeed() const;

    // 플레이어와 몬스터의 전투 시작 함수
    BattleResult startBattle(
        Player& player,
        Monster& monster,
        SkillManager& skillManager
    );
};
