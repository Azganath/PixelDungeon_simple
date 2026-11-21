#pragma once

#include "Character.h"
#include "Equipment.h"
#include "Armor.h"

#include <string>

// ============================================================================
// [Player 클래스]
// Character를 상속받은 플레이어 클래스입니다.
// 재화(골드, 열쇠)와 4가지 장비 슬롯(일반 검, 보스 검, 일반 갑옷, 보스 갑옷),
// 그리고 장비 장착 및 강화를 관리합니다.
// ============================================================================
class Player : public Character
{
private:
    int gold; // 보유 골드
    int keys; // 보유 열쇠

    // 일반 검 & 강화 수치
    Equipment equipment;
    int equipmentEnhanceLevel;

    // 보스 전용 검 (별도 슬롯)
    Equipment bossEquipment;

    // 일반 방어구 & 강화 수치
    Armor armor;
    int armorEnhanceLevel;

    // 보스 전용 방어구 (별도 슬롯)
    Armor bossArmor;

public:
    Player();

    // 재화 관련 함수들
    int getGold() const;
    int getKeys() const;
    void addGold(int amount);
    bool spendGold(int amount);
    void addKeys(int amount);
    bool spendKeys(int amount);

    // 장비 정보 반환 (Getter)
    const Equipment& getEquipment() const;
    int getEquipmentEnhanceLevel() const;
    const Equipment& getBossEquipment() const;

    const Armor& getArmor() const;
    int getArmorEnhanceLevel() const;
    const Armor& getBossArmor() const;

    // UI 출력용 간편 Getter
    std::string getArmorName() const;
    std::string getArmorGrade() const;
    int getArmorDefense() const;
    std::string getBossArmorName() const;
    std::string getBossArmorGrade() const;
    int getBossArmorDefense() const;

    // 등급별 동적 장비 이름 반환
    std::string getDynamicSwordName() const;
    std::string getDynamicArmorName() const;

    // 장비 장착 및 강화 기능
    void equipEquipment(const Equipment& newEquipment);
    bool upgradeEquipment();                             // 검 1회 강화 시도
    void autoUpgradeEquipment(int targetLevel);          // 검 연속 강화 (목표 단계까지)
    void equipBossEquipment(const Equipment& newEquipment);

    void equipArmor(const Armor& newArmor);
    bool upgradeArmor();                                 // 방어구 1회 강화 시도
    void autoUpgradeArmor(int targetLevel);              // 방어구 연속 강화 (목표 단계까지)
    void equipBossArmor(const Armor& newBossArmor);

    // 강화 단계별 성공 확률 계산 함수
    int getEnhanceSuccessRate(int currentLevel) const;

    // 룬 및 세트 효과에 의한 스탯 적용
    void applyRuneStats(int hpBonus, int attackBonus, int defenseBonus);
};
