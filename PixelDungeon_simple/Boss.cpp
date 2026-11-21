// 파일 역할: 보스 몬스터의 능력치와 보상을 설정한다.

#include "Boss.h"

using namespace std;

// 보스 몬스터 생성자
Boss::Boss(int stage)
    : Monster(
        "던전 보스",

        // 보스 체력 (현실적인 전투 호흡으로 조정)
        200 + stage * 25,

        // 보스 공격력 (3턴 즉사 방지)
        16 + stage * 1,

        // 보스 방어력
        4 + stage / 2,

        // 골드 보상
        200 + stage * 20,

        // 열쇠 드롭 확률
        100
    ),
    equipmentDropChance(30)
{
}

int Boss::getEquipmentDropChance() const
{
    return equipmentDropChance;
}