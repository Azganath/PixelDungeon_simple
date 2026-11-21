// 파일 역할: 보스 몬스터의 능력치와 보스 전용 보상 정보를 선언한다.

#pragma once

#include "Monster.h"

class Boss : public Monster
{
private:
    int equipmentDropChance;

public:
    // 보스 생성자
    Boss(int stage);

    // 보스 장비 드롭 확률 반환
    int getEquipmentDropChance() const;
};