#pragma once

#include <string>

// ============================================================================
// [Character 클래스]
// 플레이어와 모든 몬스터의 부모(기본) 클래스입니다.
// 이름, 체력, 공격력, 방어력 등 가장 기본이 되는 능력치와 전투 기능을 담당합니다.
// ============================================================================
class Character
{
protected:
    std::string name; // 캐릭터 이름
    int hp;           // 현재 체력
    int maxHp;        // 최대 체력
    int attack;       // 공격력
    int defense;      // 방어력

public:
    // 생성자: 이름, 체력, 공격력, 방어력을 받아 캐릭터를 초기화합니다.
    Character(const std::string& name, int hp, int attack, int defense);

    // [중요] 가상 소멸자: 부모 포인터로 자식 객체를 안전하게 메모리 해제하기 위해 필요합니다.
    virtual ~Character() = default;

    // 정보 반환 함수들 (Getter)
    std::string getName() const;
    int getHp() const;
    int getMaxHp() const;
    int getAttack() const;
    int getDefense() const;

    // 전투 관련 함수들
    void takeDamage(int damage);     // 일반 피해 (방어력 계산 적용)
    void takeTrueDamage(int damage); // 스킬 고정 피해 (방어력 무시)
    void heal(int amount);           // 체력 회복
    bool isAlive() const;            // 생존 여부 확인 (체력이 0보다 크면 true)
};
