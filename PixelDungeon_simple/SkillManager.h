#pragma once

#include "Skill.h"
#include "Monster.h"

#include <vector>

// ============================================================================
// [SkillManager 클래스]
// 플레이어가 보유한 스킬들을 관리하고, 쿨타임 체크 및 자동/수동 시전을 총괄합니다.
// ============================================================================
class SkillManager
{
private:
    std::vector<Skill> skills; // 보유 스킬 목록
    bool autoCast;             // 스킬 자동 시전 모드 (true: 자동 시전, false: 수동 선택)

public:
    SkillManager();

    // 자동 / 수동 시전 모드 설정
    void setAutoCast(bool enable);
    bool getAutoCast() const;

    // 새 스킬 획득 및 중복 강화
    void addSkill(const Skill& newSkill);

    // 보유 스킬 목록 출력 (쿨타임 상태 포함)
    void showSkills() const;

    // 보유 스킬 개수 반환
    int getSkillCount() const;

    // 전투 관련 쿨타임 관리
    void resetCooldownsForBattle(); // 전투 진입 시 모든 스킬 사용 가능 상태로
    void reduceAllCooldowns();      // 턴 경과 시 모든 스킬 쿨타임 1 감소
    bool hasReadySkill() const;     // 현재 시전 가능한 스킬이 있는지 확인

    // 스킬 시전 함수
    bool tryUseSkillAuto(Monster& monster); // 자동 모드: 쿨타임 찬 스킬 중 가장 강한 스킬 즉시 시전
    bool useSkillManual(Monster& monster);  // 수동 모드: 플레이어가 선택하여 시전
};
