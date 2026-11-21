#pragma once

#include <string>

// ============================================================================
// [RuneType - 룬 종류 열거형]
// ============================================================================
enum class RuneType
{
    LIFE,    // 생명의 룬 (체력 증가)
    DEFENSE, // 수호의 룬 (방어력 증가)
    ATTACK   // 용기의 룬 (공격력 증가)
};

// ============================================================================
// [Rune 클래스]
// 엘리트 몬스터에게서 드롭되는 룬 장비입니다.
// 이름, 등급, 종류, 스탯 증가량(HP, ATK, DEF)을 담고 있습니다.
// ============================================================================
class Rune
{
private:
    std::string name;   // 룬 이름 (예: 일반 생명의 룬)
    std::string grade;  // 룬 등급 (일반, 희귀, 영웅)
    RuneType type;      // 룬 종류 (LIFE, DEFENSE, ATTACK)
    int hpBonus;        // 체력 증가량
    int attackBonus;    // 공격력 증가량
    int defenseBonus;   // 방어력 증가량

public:
    Rune();

    Rune(
        const std::string& name,
        const std::string& grade,
        RuneType type,
        int hpBonus,
        int attackBonus,
        int defenseBonus
    );

    // 정보 반환 함수들 (Getter)
    std::string getName() const;
    std::string getGrade() const;
    RuneType getType() const;
    int getHpBonus() const;
    int getAttackBonus() const;
    int getDefenseBonus() const;
};

