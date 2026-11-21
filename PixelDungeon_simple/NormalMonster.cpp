#include "NormalMonster.h"

using namespace std;

// 몬스터 생성자
NormalMonster::NormalMonster(int stage, bool elite)
    : Monster(
        elite ? "엘리트 몬스터" : "일반 몬스터",

        // 체력
        elite ? 100 + stage * 15 : 30 + stage * 12,

        // 공격력
        elite ? 12 + stage * 3 : 5 + stage * 2,

        // 방어력
        elite ? 3 + stage : 1 + stage,

        // 골드 보상
        elite ? 100 + stage * 10 : 20 + stage * 5,

        // 열쇠 드롭 확률 (일반 몬스터 50%로 상향)
        elite ? 100 : 50
    ),
    elite(elite)
{
}

bool NormalMonster::isElite() const
{
    return elite;
}
