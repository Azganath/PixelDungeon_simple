// 파일 역할: 검 장비의 이름, 등급, 공격력 및 판매 가격을 관리한다.

#pragma once

#include <string>

class Equipment
{
private:
    std::string name;
    std::string grade;
    int attackBonus;
    int sellPrice;

public:
    // 생성자
    Equipment();

    Equipment(
        const std::string& name,
        const std::string& grade,
        int attackBonus,
        int sellPrice
    );

    // 장비 정보 반환
    std::string getName() const;
    std::string getGrade() const;
    int getAttackBonus() const;
    int getSellPrice() const;

    // 검 공격력 강화
    void upgradeAttackBonus(int amount);
};