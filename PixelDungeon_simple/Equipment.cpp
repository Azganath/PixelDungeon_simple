// 파일 역할: 장비의 생성과 정보 반환 및 강화 기능을 구현한다.

#include "Equipment.h"

using namespace std;

// 기본 장비 생성
Equipment::Equipment()
    : name("나무 검"),
    grade("일반"),
    attackBonus(0),
    sellPrice(0)
{
}

// 장비 생성
Equipment::Equipment(
    const string& name,
    const string& grade,
    int attackBonus,
    int sellPrice
)
    : name(name),
    grade(grade),
    attackBonus(attackBonus),
    sellPrice(sellPrice)
{
}

// 장비 이름 반환
string Equipment::getName() const
{
    return name;
}

// 장비 등급 반환
string Equipment::getGrade() const
{
    return grade;
}

// 공격력 증가량 반환
int Equipment::getAttackBonus() const
{
    return attackBonus;
}

// 판매 가격 반환
int Equipment::getSellPrice() const
{
    return sellPrice;
}

// 검 공격력 강화
void Equipment::upgradeAttackBonus(int amount)
{
    attackBonus += amount;
}