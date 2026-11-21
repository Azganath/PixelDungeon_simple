#include "Player.h"

#include <iostream>

using namespace std;

// ============================================================================
// [Player 생성자]
// 초기 스탯: 이름 "모험가", HP 100, 공격력 10, 방어력 3
// 초기 자원: 300골드, 열쇠 2개 (초반 상자 오픈 지원)
// ============================================================================
Player::Player()
    : Character("모험가", 100, 10, 3),
    gold(300),
    keys(2),
    equipmentEnhanceLevel(0),
    bossEquipment("보스 검 없음", "없음", 0, 0),
    armor(),
    armorEnhanceLevel(0),
    bossArmor("보스 갑옷 없음", "없음", 0, 0)
{
}

int Player::getGold() const
{
    return gold;
}

int Player::getKeys() const
{
    return keys;
}

void Player::addGold(int amount)
{
    if (amount > 0)
    {
        gold += amount;
    }
}

// 골드를 지불할 때 사용. 잔액이 부족하면 false를 반환합니다.
bool Player::spendGold(int amount)
{
    if (gold < amount)
    {
        return false;
    }

    gold -= amount;
    return true;
}

void Player::addKeys(int amount)
{
    if (amount > 0)
    {
        keys += amount;
    }
}

// 열쇠를 소모할 때 사용. 열쇠가 없으면 false를 반환합니다.
bool Player::spendKeys(int amount)
{
    if (keys < amount)
    {
        return false;
    }

    keys -= amount;
    return true;
}

const Equipment& Player::getEquipment() const
{
    return equipment;
}

int Player::getEquipmentEnhanceLevel() const
{
    return equipmentEnhanceLevel;
}

const Equipment& Player::getBossEquipment() const
{
    return bossEquipment;
}

const Armor& Player::getArmor() const
{
    return armor;
}

int Player::getArmorEnhanceLevel() const
{
    return armorEnhanceLevel;
}

const Armor& Player::getBossArmor() const
{
    return bossArmor;
}

string Player::getArmorName() const
{
    return armor.getName();
}

string Player::getArmorGrade() const
{
    return armor.getGrade();
}

int Player::getArmorDefense() const
{
    return armor.getDefenseBonus();
}

string Player::getBossArmorName() const
{
    return bossArmor.getName();
}

string Player::getBossArmorGrade() const
{
    return bossArmor.getGrade();
}

int Player::getBossArmorDefense() const
{
    return bossArmor.getDefenseBonus();
}

// 등급 우선순위 랭크 (1: 일반 ~ 5: 신화)
static int getGradeRank(const string& grade)
{
    if (grade == "신화" || grade == "Mythic") return 5;
    if (grade == "전설" || grade == "Legendary") return 4;
    if (grade == "영웅" || grade == "Epic" || grade == "Heroic") return 3;
    if (grade == "희귀" || grade == "Rare") return 2;
    return 1; // 일반 (Common)
}

string Player::getDynamicSwordName() const
{
    string grade = equipment.getGrade();
    if (grade == "신화" || grade == "Mythic") return "신화의 성검 (" + equipment.getName() + ")";
    if (grade == "전설" || grade == "Legendary") return "전설의 대검 (" + equipment.getName() + ")";
    if (grade == "영웅" || grade == "Epic" || grade == "Heroic") return "영웅의 검 (" + equipment.getName() + ")";
    if (grade == "희귀" || grade == "Rare") return "희귀 장검 (" + equipment.getName() + ")";
    return "일반 검 (" + equipment.getName() + ")";
}

string Player::getDynamicArmorName() const
{
    string grade = armor.getGrade();
    if (grade == "신화" || grade == "Mythic") return "신화의 수호성갑 (" + armor.getName() + ")";
    if (grade == "전설" || grade == "Legendary") return "전설의 용린갑 (" + armor.getName() + ")";
    if (grade == "영웅" || grade == "Epic" || grade == "Heroic") return "영웅의 판금갑 (" + armor.getName() + ")";
    if (grade == "희귀" || grade == "Rare") return "희귀 사슬갑옷 (" + armor.getName() + ")";
    return "일반 갑옷 (" + armor.getName() + ")";
}

// ============================================================================
// [equipEquipment - 일반 검 장착]
// 1. 새로 획득한 검의 등급 또는 공격력이 현재 장착 검보다 높을 때만 자동 교체합니다.
// 2. 기존 검이 더 좋거나 같으면 기존 검을 유지하고, 새 검은 자동 판매하여 골드로 환원합니다.
// ============================================================================
void Player::equipEquipment(const Equipment& newEquipment)
{
    int newRank = getGradeRank(newEquipment.getGrade());
    int curRank = getGradeRank(equipment.getGrade());

    bool isBetter = (newRank > curRank) || (newRank == curRank && newEquipment.getAttackBonus() > equipment.getAttackBonus());

    if (!isBetter)
    {
        addGold(newEquipment.getSellPrice());
        cout << "\n[장비 유지] 현재 장착 중인 검(" << equipment.getName() 
             << " [" << equipment.getGrade() << "])이 더 강력하거나 동일합니다." << endl;
        cout << "새로 획득한 " << newEquipment.getName() << " [" << newEquipment.getGrade() 
             << "]을(를) 자동 판매하여 " << newEquipment.getSellPrice() << "골드로 환원했습니다." << endl;
        return;
    }

    // 기존 검 판매
    if (equipment.getSellPrice() > 0)
    {
        addGold(equipment.getSellPrice());
        cout << "\n기존 장착 검(" << equipment.getName() << ")을 "
             << equipment.getSellPrice() << "골드에 판매했습니다." << endl;
    }

    // 기존 검의 공격력을 빼고 새 검의 공격력을 더합니다.
    attack -= equipment.getAttackBonus();
    equipment = newEquipment;
    equipmentEnhanceLevel = 0; // 새 장비는 +0강부터 시작
    attack += equipment.getAttackBonus();

    cout << "\n[장비 교체] 더 강력한 검을 획득하여 자동 장착했습니다!" << endl;
    cout << equipment.getName() << " [" << equipment.getGrade() << "]을(를) 장착했습니다!" << endl;
    cout << "공격력 증가: +" << equipment.getAttackBonus() << endl;
}

// ============================================================================
// [getEnhanceSuccessRate - 강화 단계별 성공 확률 (%)]
// +0 ~ +2: 100%
// +3 ~ +4: 80%
// +5 ~ +6: 60%
// +7 ~ +8: 40%
// +9: 20%
// ============================================================================
int Player::getEnhanceSuccessRate(int currentLevel) const
{
    if (currentLevel < 3) return 100;
    if (currentLevel < 5) return 80;
    if (currentLevel < 7) return 60;
    if (currentLevel < 9) return 40;
    return 20;
}

// ============================================================================
// [upgradeEquipment - 일반 검 1회 강화]
// 비용: 100골드 소모. 단계별 확률에 따라 성공/실패가 갈립니다. (실패해도 장비 유지)
// ============================================================================
bool Player::upgradeEquipment()
{
    const int upgradeCost = 100;
    const int attackIncrease = 5;

    if (equipmentEnhanceLevel >= 10)
    {
        cout << "\n검이 이미 최대 강화 단계입니다! (+10)" << endl;
        return false;
    }

    int successRate = getEnhanceSuccessRate(equipmentEnhanceLevel);
    cout << "\n[검 강화 시도] 현재: +" << equipmentEnhanceLevel 
         << " ➜ +" << (equipmentEnhanceLevel + 1)
         << " (성공 확률: " << successRate << "%, 비용: " << upgradeCost << "G)" << endl;

    if (!spendGold(upgradeCost))
    {
        cout << "골드가 부족합니다! (필요: " << upgradeCost << "G)" << endl;
        return false;
    }

    int roll = rand() % 100 + 1;
    if (roll <= successRate)
    {
        equipment.upgradeAttackBonus(attackIncrease);
        equipmentEnhanceLevel++;
        attack += attackIncrease;

        cout << "✨ [강화 대성공!] 검 강화에 성공했습니다!" << endl;
        cout << "강화 단계: +" << equipmentEnhanceLevel << " (공격력 +" << attackIncrease << ")" << endl;
        return true;
    }
    else
    {
        cout << "💥 [강화 실패] 강화에 실패했습니다... 장비는 안전합니다." << endl;
        return false;
    }
}

// ============================================================================
// [autoUpgradeEquipment - 일반 검 연속 강화]
// 목표 단계까지 또는 골드가 다 떨어질 때까지 자동으로 연속 강화를 진행합니다.
// ============================================================================
void Player::autoUpgradeEquipment(int targetLevel)
{
    const int upgradeCost = 100;
    const int attackIncrease = 5;

    if (targetLevel > 10) targetLevel = 10;
    if (equipmentEnhanceLevel >= targetLevel)
    {
        cout << "\n이미 목표 단계(+" << targetLevel << ") 이상입니다!" << endl;
        return;
    }

    cout << "\n========== 검 연속 강화 시작 ==========" << endl;
    cout << "목표 단계: +" << targetLevel << "강 | 1회 비용: " << upgradeCost << "G" << endl;

    int attempts = 0;
    int successCount = 0;
    int failCount = 0;
    int startLevel = equipmentEnhanceLevel;

    while (equipmentEnhanceLevel < targetLevel && gold >= upgradeCost)
    {
        attempts++;
        spendGold(upgradeCost);

        int rate = getEnhanceSuccessRate(equipmentEnhanceLevel);
        int roll = rand() % 100 + 1;

        if (roll <= rate)
        {
            equipment.upgradeAttackBonus(attackIncrease);
            equipmentEnhanceLevel++;
            attack += attackIncrease;
            successCount++;
            cout << "시도 " << attempts << "회차: 성공! (+ " << equipmentEnhanceLevel << ")" << endl;
        }
        else
        {
            failCount++;
            cout << "시도 " << attempts << "회차: 실패..." << endl;
        }
    }

    cout << "\n========== 연속 강화 결과 ==========" << endl;
    cout << "결과 단계: +" << startLevel << " ➜ +" << equipmentEnhanceLevel << endl;
    cout << "총 시도 횟수: " << attempts << "회 (성공: " << successCount << ", 실패: " << failCount << ")" << endl;
    cout << "소모된 골드: " << (attempts * upgradeCost) << "G | 남은 골드: " << gold << "G" << endl;

    if (equipmentEnhanceLevel < targetLevel && gold < upgradeCost)
    {
        cout << "골드가 부족하여 연속 강화를 중단했습니다." << endl;
    }
    else if (equipmentEnhanceLevel >= targetLevel)
    {
        cout << "🎉 목표 단계(+" << targetLevel << ")에 도달했습니다!" << endl;
    }
}

// ============================================================================
// [equipBossEquipment - 보스 전용 검 장착]
// 보스를 처치했을 때만 얻을 수 있는 보스 검 전용 슬롯에 장착합니다.
// ============================================================================
void Player::equipBossEquipment(const Equipment& newEquipment)
{
    if (newEquipment.getAttackBonus() <= bossEquipment.getAttackBonus())
    {
        addGold(newEquipment.getSellPrice());
        cout << "기존 보스 검보다 약하여 " << newEquipment.getSellPrice() << "골드에 판매했습니다." << endl;
        return;
    }

    if (bossEquipment.getSellPrice() > 0)
    {
        addGold(bossEquipment.getSellPrice());
        cout << "기존 보스 검을 판매했습니다." << endl;
    }

    attack -= bossEquipment.getAttackBonus();
    bossEquipment = newEquipment;
    attack += bossEquipment.getAttackBonus();

    cout << "\n보스 전용 검을 장착했습니다!" << endl;
    cout << bossEquipment.getName() << endl;
    cout << "공격력 증가: +" << bossEquipment.getAttackBonus() << endl;
}

// ============================================================================
// [equipArmor - 일반 갑옷 장착]
// 새로 획득한 방어구의 등급 또는 방어력이 더 높을 때만 자동 교체합니다.
// 기존 방어구가 더 좋거나 같으면 유지하고 새 방어구는 자동 판매하여 골드로 환원합니다.
// ============================================================================
void Player::equipArmor(const Armor& newArmor)
{
    int newRank = getGradeRank(newArmor.getGrade());
    int curRank = getGradeRank(armor.getGrade());

    bool isBetter = (newRank > curRank) || (newRank == curRank && newArmor.getDefenseBonus() > armor.getDefenseBonus());

    if (!isBetter)
    {
        addGold(newArmor.getSellPrice());

        cout << "\n[방어구 유지] 현재 장착 중인 방어구(" << armor.getName() 
             << " [" << armor.getGrade() << "])가 더 견고하거나 동일합니다." << endl;
        cout << "새로 획득한 " << newArmor.getName() << " [" << newArmor.getGrade() 
             << "]을(를) 자동 판매하여 " << newArmor.getSellPrice() << "골드로 환원했습니다." << endl;

        return;
    }

    if (armor.getSellPrice() > 0)
    {
        addGold(armor.getSellPrice());
        cout << "\n기존 방어구(" << armor.getName() << ")를 " << armor.getSellPrice() << "골드에 판매했습니다." << endl;
    }

    defense -= armor.getDefenseBonus();
    armor = newArmor;
    armorEnhanceLevel = 0;
    defense += armor.getDefenseBonus();

    cout << "\n[방어구 교체] 더 견고한 방어구를 획득하여 자동 장착했습니다!" << endl;
    cout << armor.getName() << " [" << armor.getGrade() << "]을(를) 장착했습니다!" << endl;
    cout << "방어력 증가: +" << armor.getDefenseBonus() << endl;
}

// ============================================================================
// [upgradeArmor - 일반 갑옷 1회 강화]
// 100골드를 소모하여 갑옷의 방어력을 +2 증가시킵니다. (확률 적용, 실패 시 유지)
// ============================================================================
bool Player::upgradeArmor()
{
    const int upgradeCost = 100;
    const int defenseIncrease = 2;

    if (armorEnhanceLevel >= 10)
    {
        cout << "\n방어구가 이미 최대 강화 단계입니다! (+10)" << endl;
        return false;
    }

    int successRate = getEnhanceSuccessRate(armorEnhanceLevel);
    cout << "\n[방어구 강화 시도] 현재: +" << armorEnhanceLevel 
         << " ➜ +" << (armorEnhanceLevel + 1)
         << " (성공 확률: " << successRate << "%, 비용: " << upgradeCost << "G)" << endl;

    if (!spendGold(upgradeCost))
    {
        cout << "골드가 부족합니다! (필요: " << upgradeCost << "G)" << endl;
        return false;
    }

    int roll = rand() % 100 + 1;
    if (roll <= successRate)
    {
        armor.upgradeDefenseBonus(defenseIncrease);
        armorEnhanceLevel++;
        defense += defenseIncrease;

        cout << "✨ [강화 대성공!] 방어구 강화에 성공했습니다!" << endl;
        cout << "강화 단계: +" << armorEnhanceLevel << " (방어력 +" << defenseIncrease << ")" << endl;
        return true;
    }
    else
    {
        cout << "💥 [강화 실패] 강화에 실패했습니다... 장비는 안전합니다." << endl;
        return false;
    }
}

// ============================================================================
// [autoUpgradeArmor - 일반 갑옷 연속 강화]
// 목표 단계까지 또는 골드가 다 떨어질 때까지 자동으로 연속 강화를 진행합니다.
// ============================================================================
void Player::autoUpgradeArmor(int targetLevel)
{
    const int upgradeCost = 100;
    const int defenseIncrease = 2;

    if (targetLevel > 10) targetLevel = 10;
    if (armorEnhanceLevel >= targetLevel)
    {
        cout << "\n이미 목표 단계(+" << targetLevel << ") 이상입니다!" << endl;
        return;
    }

    cout << "\n========== 방어구 연속 강화 시작 ==========" << endl;
    cout << "목표 단계: +" << targetLevel << "강 | 1회 비용: " << upgradeCost << "G" << endl;

    int attempts = 0;
    int successCount = 0;
    int failCount = 0;
    int startLevel = armorEnhanceLevel;

    while (armorEnhanceLevel < targetLevel && gold >= upgradeCost)
    {
        attempts++;
        spendGold(upgradeCost);

        int rate = getEnhanceSuccessRate(armorEnhanceLevel);
        int roll = rand() % 100 + 1;

        if (roll <= rate)
        {
            armor.upgradeDefenseBonus(defenseIncrease);
            armorEnhanceLevel++;
            defense += defenseIncrease;
            successCount++;
            cout << "시도 " << attempts << "회차: 성공! (+ " << armorEnhanceLevel << ")" << endl;
        }
        else
        {
            failCount++;
            cout << "시도 " << attempts << "회차: 실패..." << endl;
        }
    }

    cout << "\n========== 연속 강화 결과 ==========" << endl;
    cout << "결과 단계: +" << startLevel << " ➜ +" << armorEnhanceLevel << endl;
    cout << "총 시도 횟수: " << attempts << "회 (성공: " << successCount << ", 실패: " << failCount << ")" << endl;
    cout << "소모된 골드: " << (attempts * upgradeCost) << "G | 남은 골드: " << gold << "G" << endl;

    if (armorEnhanceLevel < targetLevel && gold < upgradeCost)
    {
        cout << "골드가 부족하여 연속 강화를 중단했습니다." << endl;
    }
    else if (armorEnhanceLevel >= targetLevel)
    {
        cout << "🎉 목표 단계(+" << targetLevel << ")에 도달했습니다!" << endl;
    }
}

// ============================================================================
// [equipBossArmor - 보스 전용 갑옷 장착]
// ============================================================================
void Player::equipBossArmor(const Armor& newBossArmor)
{
    if (newBossArmor.getDefenseBonus() <= bossArmor.getDefenseBonus())
    {
        addGold(newBossArmor.getSellPrice());
        cout << "기존 보스 방어구보다 약하여 " << newBossArmor.getSellPrice() << "골드에 판매했습니다." << endl;
        return;
    }

    if (bossArmor.getSellPrice() > 0)
    {
        addGold(bossArmor.getSellPrice());
        cout << "기존 보스 방어구를 판매했습니다." << endl;
    }

    defense -= bossArmor.getDefenseBonus();
    bossArmor = newBossArmor;
    defense += bossArmor.getDefenseBonus();

    cout << "\n보스 전용 방어구를 장착했습니다!" << endl;
    cout << bossArmor.getName() << endl;
    cout << "방어력 증가: +" << bossArmor.getDefenseBonus() << endl;
}

// ============================================================================
// [applyRuneStats - 룬 장착 및 세트 효과에 따른 스탯 증가]
// 룬이나 세트 완성으로 얻은 보너스를 플레이어 스탯에 직접 영구 반영합니다.
// ============================================================================
void Player::applyRuneStats(int hpBonus, int attackBonus, int defenseBonus)
{
    if (hpBonus > 0)
    {
        maxHp += hpBonus;
        hp += hpBonus; // 늘어난 최대 체력만큼 현재 체력도 증가
    }
    if (attackBonus > 0)
    {
        attack += attackBonus;
    }
    if (defenseBonus > 0)
    {
        defense += defenseBonus;
    }
}
