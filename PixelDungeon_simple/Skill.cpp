#include "Skill.h"

using namespace std;

// ============================================================================
// [Skill 생성자]
// 스킬 생성 시 기본 쿨타임 설정 및 초기 상태(사용 가능 상태: 0)로 시작합니다.
// ============================================================================
Skill::Skill(
    const string& name,
    const string& grade,
    int damage,
    int maxCooldown
)
    : name(name),
    grade(grade),
    damage(damage),
    enhanceLevel(0),
    maxCooldown(maxCooldown),
    currentCooldown(0) // 첫 시작 시 바로 사용 가능
{
}

string Skill::getName() const
{
    return name;
}

string Skill::getGrade() const
{
    return grade;
}

int Skill::getDamage() const
{
    return damage;
}

int Skill::getEnhanceLevel() const
{
    return enhanceLevel;
}

int Skill::getMaxCooldown() const
{
    return maxCooldown;
}

int Skill::getCurrentCooldown() const
{
    return currentCooldown;
}

// 쿨타임이 0 이하이면 사용 가능(READY)
bool Skill::isReady() const
{
    return currentCooldown <= 0;
}

// 턴이 끝날 때마다 쿨타임을 1씩 감소
void Skill::reduceCooldown()
{
    if (currentCooldown > 0)
    {
        currentCooldown--;
    }
}

// 스킬 시전 직후 쿨타임 재시작
void Skill::resetCooldown()
{
    currentCooldown = maxCooldown;
}

// 새 전투 진입 시 쿨타임 초기화
void Skill::resetForBattle()
{
    currentCooldown = 0;
}

void Skill::enhance()
{
    if (enhanceLevel < 10)
    {
        enhanceLevel++;
    }
}

void Skill::updateGradeAndDamage(const string& newGrade, int newDamage)
{
    if (newDamage > damage)
    {
        grade = newGrade;
        damage = newDamage;
    }
}

int Skill::getTotalDamage() const
{
    return damage + (enhanceLevel * 5);
}
