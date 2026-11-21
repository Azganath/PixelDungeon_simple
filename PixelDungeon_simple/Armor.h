#pragma once

#include <string>

class Armor
{
private:
    std::string name;
    std::string grade;
    int defenseBonus;
    int sellPrice;

public:
    Armor();

    Armor(
        const std::string& name,
        const std::string& grade,
        int defenseBonus,
        int sellPrice
    );

    std::string getName() const;
    std::string getGrade() const;
    int getDefenseBonus() const;
    int getSellPrice() const;

    void upgradeDefenseBonus(int amount);
};
