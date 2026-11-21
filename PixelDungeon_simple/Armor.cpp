#include "Armor.h"

using namespace std;

Armor::Armor()
    : name("낡은 갑옷"),
    grade("일반"),
    defenseBonus(0),
    sellPrice(0)
{
}

Armor::Armor(
    const string& name,
    const string& grade,
    int defenseBonus,
    int sellPrice
)
    : name(name),
    grade(grade),
    defenseBonus(defenseBonus),
    sellPrice(sellPrice)
{
}

string Armor::getName() const
{
    return name;
}

string Armor::getGrade() const
{
    return grade;
}

int Armor::getDefenseBonus() const
{
    return defenseBonus;
}

int Armor::getSellPrice() const
{
    return sellPrice;
}

void Armor::upgradeDefenseBonus(int amount)
{
    defenseBonus += amount;
}
