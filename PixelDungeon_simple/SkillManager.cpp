#include "SkillManager.h"

#include <iostream>
#include <limits>

using namespace std;

// ============================================================================
// [생성자] 기본 스킬 모드는 자동 시전(autoCast = true)으로 시작합니다.
// ============================================================================
SkillManager::SkillManager()
    : autoCast(true)
{
}

void SkillManager::setAutoCast(bool enable)
{
    autoCast = enable;
}

bool SkillManager::getAutoCast() const
{
    return autoCast;
}

// ============================================================================
// [addSkill - 새 스킬 습득 및 중복 스킬 강화]
// ============================================================================
void SkillManager::addSkill(const Skill& newSkill)
{
    for (Skill& skill : skills)
    {
        if (skill.getName() == newSkill.getName())
        {
            if (newSkill.getDamage() > skill.getDamage())
            {
                skill.updateGradeAndDamage(newSkill.getGrade(), newSkill.getDamage());
                cout << newSkill.getName() << " 스킬이 더 높은 등급(" 
                     << newSkill.getGrade() << ")으로 승급되었습니다!" << endl;
            }

            if (skill.getEnhanceLevel() >= 10)
            {
                cout << newSkill.getName() << " 스킬은 이미 최대 강화(+10) 상태입니다!" << endl;
                return;
            }

            skill.enhance();
            cout << newSkill.getName() << " 스킬이 강화되었습니다! (+" 
                 << skill.getEnhanceLevel() << ")" << endl;
            return;
        }
    }

    skills.push_back(newSkill);
    cout << newSkill.getName() << " 스킬을 새로 습득했습니다!" << endl;
}

// ============================================================================
// [showSkills - 스킬 목록 및 쿨타임 확인]
// ============================================================================
void SkillManager::showSkills() const
{
    cout << "\n========== 보유 스킬 ==========" << endl;
    cout << "스킬 시전 모드: " << (autoCast ? "[자동 시전 ON]" : "[수동 선택 ON]") << endl;

    if (skills.empty())
    {
        cout << "현재 보유한 스킬이 없습니다. (상점에서 스킬 상자를 열어보세요!)" << endl;
        return;
    }

    for (const Skill& skill : skills)
    {
        cout << "- " << skill.getName()
            << " [" << skill.getGrade() << "]"
            << " (+" << skill.getEnhanceLevel() << ")"
            << " | 피해량: " << skill.getTotalDamage()
            << " | 쿨타임: " << skill.getMaxCooldown() << "턴"
            << endl;
    }
}

int SkillManager::getSkillCount() const
{
    return static_cast<int>(skills.size());
}

// ============================================================================
// [resetCooldownsForBattle - 새 전투 진입 시 쿨타임 초기화]
// ============================================================================
void SkillManager::resetCooldownsForBattle()
{
    for (Skill& skill : skills)
    {
        skill.resetForBattle();
    }
}

// ============================================================================
// [reduceAllCooldowns - 턴 종료 시 쿨타임 1 감소]
// ============================================================================
void SkillManager::reduceAllCooldowns()
{
    for (Skill& skill : skills)
    {
        skill.reduceCooldown();
    }
}

// ============================================================================
// [hasReadySkill - 시전 가능한 스킬이 있는지 확인]
// ============================================================================
bool SkillManager::hasReadySkill() const
{
    for (const Skill& skill : skills)
    {
        if (skill.isReady())
        {
            return true;
        }
    }
    return false;
}

// ============================================================================
// [tryUseSkillAuto - 자동 시전 모드]
// 쿨타임이 찬 스킬 중 가장 강력한 스킬을 자동으로 골라 즉시 시전합니다.
// ============================================================================
bool SkillManager::tryUseSkillAuto(Monster& monster)
{
    if (skills.empty())
    {
        return false;
    }

    int bestIndex = -1;
    int maxDamage = -1;

    // 쿨타임이 찬 스킬 중 피해량이 가장 높은 스킬 탐색
    for (size_t i = 0; i < skills.size(); ++i)
    {
        if (skills[i].isReady() && skills[i].getTotalDamage() > maxDamage)
        {
            maxDamage = skills[i].getTotalDamage();
            bestIndex = static_cast<int>(i);
        }
    }

    if (bestIndex == -1)
    {
        return false; // 시전 가능한 스킬 없음
    }

    Skill& skill = skills[bestIndex];
    int damage = skill.getTotalDamage();

    cout << "\n[⚡ 자동 스킬 시전!] " << skill.getName()
        << " (+" << skill.getEnhanceLevel() << ") 발동!" << endl;
    cout << "방어 무시 마법 피해: " << damage << endl;

    monster.takeTrueDamage(damage);
    skill.resetCooldown(); // 사용 후 쿨타임 시작

    cout << monster.getName() << " HP: " << monster.getHp()
        << "/" << monster.getMaxHp() << endl;

    return true;
}

// ============================================================================
// [useSkillManual - 수동 시전 모드]
// 플레이어에게 현재 사용 가능한 스킬 목록을 보여주고 선택받아 시전합니다.
// ============================================================================
bool SkillManager::useSkillManual(Monster& monster)
{
    vector<int> readyIndices;

    cout << "\n[사용 가능한 스킬 목록]" << endl;
    for (size_t i = 0; i < skills.size(); ++i)
    {
        if (skills[i].isReady())
        {
            readyIndices.push_back(static_cast<int>(i));
            cout << readyIndices.size() << ". " << skills[i].getName()
                 << " (피해량: " << skills[i].getTotalDamage() << ")" << endl;
        }
        else
        {
            cout << "- " << skills[i].getName() << " (쿨타임: " 
                 << skills[i].getCurrentCooldown() << "턴 남음)" << endl;
        }
    }

    if (readyIndices.empty())
    {
        cout << "현재 사용 가능한 스킬이 없습니다! (모두 쿨타임 중)" << endl;
        return false;
    }

    cout << "0. 취소 (일반 공격으로 전환)" << endl;
    cout << "사용할 스킬 번호 선택: ";

    int choice = 0;
    if (cin >> choice)
    {
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        if (choice > 0 && choice <= static_cast<int>(readyIndices.size()))
        {
            int selectedIdx = readyIndices[choice - 1];
            Skill& skill = skills[selectedIdx];
            int damage = skill.getTotalDamage();

            cout << "\n[⚡ 스킬 시전!] " << skill.getName() << " 발동!" << endl;
            cout << "방어 무시 마법 피해: " << damage << endl;

            monster.takeTrueDamage(damage);
            skill.resetCooldown();

            cout << monster.getName() << " HP: " << monster.getHp()
                << "/" << monster.getMaxHp() << endl;

            return true;
        }
    }
    else
    {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    cout << "스킬 사용을 취소했습니다." << endl;
    return false;
}
