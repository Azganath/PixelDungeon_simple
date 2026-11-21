// 파일 역할: 일반 몬스터와 엘리트 몬스터의 정보를 선언한다.

#pragma once

#include "Monster.h"

class NormalMonster : public Monster
{
private:
    bool elite;

public:
    // 몬스터 생성자
    NormalMonster(int stage, bool elite = false);

    // 엘리트 여부 반환
    bool isElite() const;
};