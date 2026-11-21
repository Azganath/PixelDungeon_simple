#include "RuneManager.h"
#include "Player.h"

#include <iostream>

using namespace std;

RuneManager::RuneManager()
    : normalSetApplied(false),
    rareSetApplied(false),
    heroicSetApplied(false)
{
}

// ============================================================================
// [addRune - 새로운 룬 획득]
// 1. 이미 같은 이름의 룬을 갖고 있다면: 100골드로 판매 환산합니다.
// 2. 새로운 룬이면: 플레이어 스탯을 올리고 목록에 보관한 뒤, 세트 완성을 체크합니다.
// ============================================================================
bool RuneManager::addRune(const Rune& newRune, Player& player)
{
    // 중복 체크
    for (const Rune& rune : runes)
    {
        if (rune.getName() == newRune.getName())
        {
            cout << "\n이미 보유 중인 룬입니다: " << newRune.getName() << endl;
            player.addGold(100);
            cout << "중복 획득 보상으로 100골드를 획득했습니다." << endl;
            return false;
        }
    }

    // 새로운 룬 등록 및 능력치 반영
    runes.push_back(newRune);

    cout << "\n🔮 [새로운 룬 획득!] " << newRune.getName() << " (" << newRune.getGrade() << ")" << endl;
    if (newRune.getHpBonus() > 0) cout << "최대 HP 증가: +" << newRune.getHpBonus() << endl;
    if (newRune.getAttackBonus() > 0) cout << "공격력 증가: +" << newRune.getAttackBonus() << endl;
    if (newRune.getDefenseBonus() > 0) cout << "방어력 증가: +" << newRune.getDefenseBonus() << endl;

    player.applyRuneStats(newRune.getHpBonus(), newRune.getAttackBonus(), newRune.getDefenseBonus());

    // 세트 완성 체크
    checkAndApplySetEffects(player);

    return true;
}

// ============================================================================
// [checkAndApplySetEffects - 세트 효과 검사 및 발동]
// 일반, 희귀, 영웅 등급별로 [생명, 방어, 공격] 3종류를 다 모았는지 확인합니다.
// ============================================================================
void RuneManager::checkAndApplySetEffects(Player& player)
{
    // 등급별 룬 개수 카운트
    int normalCount = 0;
    int rareCount = 0;
    int heroicCount = 0;

    for (const Rune& rune : runes)
    {
        if (rune.getGrade() == "일반") normalCount++;
        else if (rune.getGrade() == "희귀") rareCount++;
        else if (rune.getGrade() == "영웅") heroicCount++;
    }

    // 1. 일반 룬 3세트 완성 체크
    if (!normalSetApplied && normalCount >= 3)
    {
        normalSetApplied = true;
        cout << "\n=============================================" << endl;
        cout << "✨ [세트 효과 발동!] 일반 등급 룬 세트 완성! ✨" << endl;
        cout << "추가 세트 보너스: 최대 HP +15 / 공격력 +3 / 방어력 +2" << endl;
        cout << "=============================================" << endl;
        player.applyRuneStats(15, 3, 2);
    }

    // 2. 희귀 룬 3세트 완성 체크
    if (!rareSetApplied && rareCount >= 3)
    {
        rareSetApplied = true;
        cout << "\n=============================================" << endl;
        cout << "✨ [세트 효과 발동!] 희귀 등급 룬 세트 완성! ✨" << endl;
        cout << "추가 세트 보너스: 최대 HP +35 / 공격력 +7 / 방어력 +5" << endl;
        cout << "=============================================" << endl;
        player.applyRuneStats(35, 7, 5);
    }

    // 3. 영웅 룬 3세트 완성 체크
    if (!heroicSetApplied && heroicCount >= 3)
    {
        heroicSetApplied = true;
        cout << "\n=============================================" << endl;
        cout << "✨ [세트 효과 발동!] 영웅 등급 룬 세트 완성! ✨" << endl;
        cout << "추가 세트 보너스: 최대 HP +80 / 공격력 +15 / 방어력 +10" << endl;
        cout << "=============================================" << endl;
        player.applyRuneStats(80, 15, 10);
    }
}

// ============================================================================
// [showRunes - 룬 및 세트 상태 출력]
// ============================================================================
void RuneManager::showRunes() const
{
    cout << "\n========== 보유 룬 목록 ==========" << endl;

    if (runes.empty())
    {
        cout << "보유 중인 룬이 없습니다. (엘리트 몬스터를 처치해 보세요!)" << endl;
    }
    else
    {
        for (const Rune& rune : runes)
        {
            cout << "• " << rune.getName() << " [" << rune.getGrade() << "] (";
            if (rune.getHpBonus() > 0) cout << "HP+" << rune.getHpBonus() << " ";
            if (rune.getAttackBonus() > 0) cout << "공격력+" << rune.getAttackBonus() << " ";
            if (rune.getDefenseBonus() > 0) cout << "방어력+" << rune.getDefenseBonus();
            cout << ")" << endl;
        }
    }

    cout << "\n[세트 활성화 상태]" << endl;
    cout << "- 일반 룬 세트: " << (normalSetApplied ? "★ 활성화됨 (HP+15 / 공+3 / 방+2)" : "미완성 (3종 필요)") << endl;
    cout << "- 희귀 룬 세트: " << (rareSetApplied ? "★ 활성화됨 (HP+35 / 공+7 / 방+5)" : "미완성 (3종 필요)") << endl;
    cout << "- 영웅 룬 세트: " << (heroicSetApplied ? "★ 활성화됨 (HP+80 / 공+15 / 방+10)" : "미완성 (3종 필요)") << endl;
}

int RuneManager::getRuneCount() const
{
    return static_cast<int>(runes.size());
}

