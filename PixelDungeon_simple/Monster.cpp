// 파일 역할: Monster 클래스의 생성자와 보상 정보 반환 기능을 구현한다.

#include "Monster.h"

using namespace std;

// 몬스터 생성자
Monster::Monster(
    const string& name,
    int hp,
    int attack,
    int defense,
    int goldReward,
    int keyDropChance
)
    : Character(name, hp, attack, defense),
    goldReward(goldReward),
    keyDropChance(keyDropChance)
{
}

// 골드 보상 반환
int Monster::getGoldReward() const
{
    return goldReward;
}

// 열쇠 드롭 확률 반환
int Monster::getKeyDropChance() const
{
    return keyDropChance;
}