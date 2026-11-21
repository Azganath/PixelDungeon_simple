#include "ChestSystem.h"
#include "Player.h"
#include "SkillManager.h"
#include "Equipment.h"
#include "Armor.h"
#include "Skill.h"

#include <iostream>
#include <cstdlib>

using namespace std;

// 검 상자 열기
void ChestSystem::openSwordChest(Player& player)
{
    cout << "\n========== 검 상자 ==========" << endl;

    if (!player.spendKeys(1))
    {
        cout << "열쇠가 부족합니다!" << endl;
        return;
    }

    int randomNumber = rand() % 100 + 1;

    string grade;
    string name;
    int attackBonus;
    int sellPrice;

    if (randomNumber <= 50)
    {
        grade = "일반";
        name = "철 단검";
        attackBonus = 10;
        sellPrice = 30;
    }
    else if (randomNumber <= 80)
    {
        grade = "희귀";
        name = "은빛 기사의 롱소드";
        attackBonus = 70;
        sellPrice = 100;
    }
    else if (randomNumber <= 95)
    {
        grade = "영웅";
        name = "룬문자 플랑베르주";
        attackBonus = 150;
        sellPrice = 250;
    }
    else if (randomNumber <= 99)
    {
        grade = "전설";
        name = "드래곤 슬레이어";
        attackBonus = 250;
        sellPrice = 600;
    }
    else
    {
        grade = "신화";
        name = "엑스칼리버";
        attackBonus = 400;
        sellPrice = 1500;
    }

    Equipment newEquipment(name, grade, attackBonus, sellPrice);

    cout << "\n[검 상자 개봉]" << endl;
    cout << "등급: " << grade << endl;
    cout << "장비: " << name << endl;
    cout << "공격력 증가: +" << attackBonus << endl;

    player.equipEquipment(newEquipment);
}

// 스킬 상자 열기
void ChestSystem::openSkillChest(
    Player& player,
    SkillManager& skillManager
)
{
    cout << "\n========== 스킬 상자 ==========" << endl;

    if (!player.spendKeys(1))
    {
        cout << "열쇠가 부족합니다!" << endl;
        return;
    }

    int randomNumber = rand() % 100 + 1;

    string grade;
    string skillName;
    int damage;

    if (randomNumber <= 55)
    {
        grade = "희귀";
        damage = 30;
    }
    else if (randomNumber <= 85)
    {
        grade = "영웅";
        damage = 60;
    }
    else if (randomNumber <= 97)
    {
        grade = "전설";
        damage = 100;
    }
    else
    {
        grade = "신화";
        damage = 180;
    }

    int skillNumber = rand() % 3;
    int cooldown = 3;

    switch (skillNumber)
    {
    case 0:
        skillName = "화염 강타";
        cooldown = 3;
        break;

    case 1:
        skillName = "번개 일격";
        cooldown = 2;
        break;

    case 2:
        skillName = "대지 분쇄";
        cooldown = 4;
        break;
    }

    Skill newSkill(skillName, grade, damage, cooldown);

    cout << "\n[스킬 상자 개봉]" << endl;
    cout << "등급: " << grade << endl;
    cout << "스킬: " << skillName << endl;
    cout << "기본 피해량: " << damage << " (쿨타임: " << cooldown << "턴)" << endl;

    skillManager.addSkill(newSkill);
}

// 방어구 상자 열기
void ChestSystem::openArmorChest(Player& player)
{
    cout << "\n========== 방어구 상자 ==========" << endl;

    if (!player.spendKeys(1))
    {
        cout << "열쇠가 부족합니다!" << endl;
        return;
    }

    int randomNumber = rand() % 100 + 1;

    string grade;
    string name;
    int defenseBonus;
    int sellPrice;

    if (randomNumber <= 50)
    {
        grade = "일반";
        name = "가죽 흉갑";
        defenseBonus = 10;
        sellPrice = 30;
    }
    else if (randomNumber <= 80)
    {
        grade = "희귀";
        name = "사슬 갑옷";
        defenseBonus = 40;
        sellPrice = 100;
    }
    else if (randomNumber <= 95)
    {
        grade = "영웅";
        name = "성기사의 판금 갑옷";
        defenseBonus = 80;
        sellPrice = 250;
    }
    else if (randomNumber <= 99)
    {
        grade = "전설";
        name = "흑룡의 비늘 갑옷";
        defenseBonus = 130;
        sellPrice = 600;
    }
    else
    {
        grade = "신화";
        name = "아이기스의 성갑";
        defenseBonus = 200;
        sellPrice = 1500;
    }

    Armor newArmor(name, grade, defenseBonus, sellPrice);

    cout << "\n[방어구 상자 개봉]" << endl;
    cout << "등급: " << grade << endl;
    cout << "장비: " << name << endl;
    cout << "방어력 증가: +" << defenseBonus << endl;

    player.equipArmor(newArmor);
}
