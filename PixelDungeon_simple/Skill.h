#pragma once

#include <string>

// ============================================================================
// [Skill 클래스]
// 플레이어가 사용하는 스킬의 이름, 등급, 데미지, 강화 수치 및 쿨타임을 관리합니다.
// ============================================================================
class Skill
{
private:
    std::string name;        // 스킬 이름
    std::string grade;       // 스킬 등급 (희귀, 영웅, 전설, 신화)
    int damage;              // 기본 데미지
    int enhanceLevel;        // 강화 단계 (최대 +10)
    int maxCooldown;         // 필요 쿨타임 (턴 수)
    int currentCooldown;     // 현재 남은 쿨타임 (0이면 사용 가능)

public:
    Skill(
        const std::string& name,
        const std::string& grade,
        int damage,
        int maxCooldown = 3
    );

    // 정보 반환 (Getter)
    std::string getName() const;
    std::string getGrade() const;
    int getDamage() const;
    int getEnhanceLevel() const;
    int getMaxCooldown() const;
    int getCurrentCooldown() const;

    // 쿨타임 관련 함수
    bool isReady() const;       // 현재 시전 가능한 상태인지 확인 (currentCooldown <= 0)
    void reduceCooldown();      // 턴 경과 시 쿨타임 1 감소
    void resetCooldown();       // 스킬 사용 후 쿨타임 초기화
    void resetForBattle();      // 새 전투 시작 시 쿨타임 0(READY)으로 초기화

    // 스킬 강화 및 등급 갱신
    void enhance();
    void updateGradeAndDamage(const std::string& newGrade, int newDamage);

    // 강화 단계가 적용된 최종 피해량 계산
    int getTotalDamage() const;
};
