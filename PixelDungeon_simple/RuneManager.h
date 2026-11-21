#pragma once

#include "Rune.h"
#include <vector>
#include <string>

class Player;

// ============================================================================
// [RuneManager 클래스]
// 플레이어가 획득한 룬들을 보관하고,
// 등급별(일반/희귀/영웅) 세트 완성 여부를 감지하여 추가 세트 스탯을 적용합니다.
// ============================================================================
class RuneManager
{
private:
    std::vector<Rune> runes; // 보유 중인 룬 목록

    // 등급별 세트 활성화 여부
    bool normalSetApplied;
    bool rareSetApplied;
    bool heroicSetApplied;

    // 세트 완성 여부 검사 내부 함수
    void checkAndApplySetEffects(Player& player);

public:
    RuneManager();

    // 룬 추가 함수 (중복 여부 확인 및 스탯 적용)
    bool addRune(const Rune& newRune, Player& player);

    // 룬 보유 현황 및 세트 효과 상태 출력
    void showRunes() const;

    // 보유 룬 개수 반환
    int getRuneCount() const;
};

