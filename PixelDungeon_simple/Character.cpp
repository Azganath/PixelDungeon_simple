#include "Character.h"

using namespace std;

// ============================================================================
// [생성자]
// 캐릭터가 처음 태어날 때 능력치를 초기화합니다.
// 최대 체력(maxHp)은 초기 체력(hp)과 동일하게 설정됩니다.
// ============================================================================
Character::Character(
    const string& name,
    int hp,
    int attack,
    int defense
)
    : name(name),
    hp(hp),
    maxHp(hp),
    attack(attack),
    defense(defense)
{
}

// 캐릭터의 이름을 반환합니다.
string Character::getName() const
{
    return name;
}

// 현재 체력을 반환합니다.
int Character::getHp() const
{
    return hp;
}

// 최대 체력을 반환합니다.
int Character::getMaxHp() const
{
    return maxHp;
}

// 공격력을 반환합니다.
int Character::getAttack() const
{
    return attack;
}

// 방어력을 반환합니다.
int Character::getDefense() const
{
    return defense;
}

// ============================================================================
// [takeDamage 함수 - 일반 공격 피격]
// 적의 공격을 방어력에 따라 경감하여 체력을 깎습니다.
// 공식: 실제 피해 = 공격력 * 100 / (100 + 방어력)
// -> 방어력이 높아도 무적이 되지 않으며, 방어력이 낮아도 일방적으로 즉사하지 않습니다.
// ============================================================================
void Character::takeDamage(int damage)
{
    // 방어력이 0 이하인 경우의 오류 방지
    int effectiveDefense = (defense < 0) ? 0 : defense;

    // 비율 기반 방어력 감소 공식 적용
    int actualDamage = damage * 100 / (100 + effectiveDefense);

    // 최소 피해량은 무조건 1을 보장합니다.
    if (actualDamage < 1)
    {
        actualDamage = 1;
    }

    hp -= actualDamage;

    // 체력이 음수가 되지 않도록 0으로 보정합니다.
    if (hp < 0)
    {
        hp = 0;
    }
}

// ============================================================================
// [takeTrueDamage 함수 - 스킬 고정 마법 피해 피격]
// 스킬은 방어력을 완전히 무시하고 고정 수치 그대로 체력을 깎습니다.
// ============================================================================
void Character::takeTrueDamage(int damage)
{
    if (damage < 1)
    {
        damage = 1;
    }

    hp -= damage;

    if (hp < 0)
    {
        hp = 0;
    }
}

// ============================================================================
// [heal 함수 - 체력 회복]
// 체력을 amount만큼 회복하되, 최대 체력(maxHp)을 초과하지 않도록 합니다.
// ============================================================================
void Character::heal(int amount)
{
    hp += amount;

    // 최대 체력을 넘지 못하게 제한
    if (hp > maxHp)
    {
        hp = maxHp;
    }
}

// ============================================================================
// [isAlive 함수 - 생존 여부 판단]
// 체력이 1 이상 남아있으면 true, 쓰러졌으면 false를 반환합니다.
// ============================================================================
bool Character::isAlive() const
{
    return hp > 0;
}
