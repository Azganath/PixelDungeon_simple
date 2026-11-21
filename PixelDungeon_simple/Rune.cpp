#include "Rune.h"

using namespace std;

// 기본 생성자
Rune::Rune()
    : name("비어있는 룬"),
    grade("없음"),
    type(RuneType::LIFE),
    hpBonus(0),
    attackBonus(0),
    defenseBonus(0)
{
}

// 룬 초기화 생성자
Rune::Rune(
    const string& name,
    const string& grade,
    RuneType type,
    int hpBonus,
    int attackBonus,
    int defenseBonus
)
    : name(name),
    grade(grade),
    type(type),
    hpBonus(hpBonus),
    attackBonus(attackBonus),
    defenseBonus(defenseBonus)
{
}

string Rune::getName() const
{
    return name;
}

string Rune::getGrade() const
{
    return grade;
}

RuneType Rune::getType() const
{
    return type;
}

int Rune::getHpBonus() const
{
    return hpBonus;
}

int Rune::getAttackBonus() const
{
    return attackBonus;
}

int Rune::getDefenseBonus() const
{
    return defenseBonus;
}

