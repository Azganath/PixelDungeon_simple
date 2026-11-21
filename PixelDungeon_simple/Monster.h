// 파일 역할: 모든 몬스터가 공통으로 사용하는 정보를 선언한다.

#pragma once

#include "Character.h"

class Monster : public Character
{
protected:
    int goldReward;
    int keyDropChance;

public:
    // 몬스터 생성자
    Monster(
        const std::string& name,
        int hp,
        int attack,
        int defense,
        int goldReward,
        int keyDropChance
    );

    // 보상 정보 반환
    int getGoldReward() const;
    int getKeyDropChance() const;
};