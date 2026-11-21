#include "BattleSystem.h"
#include "SkillManager.h"

#include <iostream>
#include <thread>
#include <chrono>
#include <limits>

using namespace std;

// ============================================================================
// [생성자] 기본 전투 속도는 1배속(NORMAL)으로 시작합니다.
// ============================================================================
BattleSystem::BattleSystem()
    : currentSpeed(BattleSpeed::NORMAL)
{
}

void BattleSystem::setBattleSpeed(BattleSpeed speed)
{
    currentSpeed = speed;
}

BattleSpeed BattleSystem::getBattleSpeed() const
{
    return currentSpeed;
}

// 20% 확률로 크리티컬 히트 (1.5배 피해)
static int calculatePlayerHit(int baseAttack, bool& outIsCrit)
{
    outIsCrit = (rand() % 100 < 20);
    if (outIsCrit)
    {
        return static_cast<int>(baseAttack * 1.5f);
    }
    return baseAttack;
}

// ============================================================================
// [startBattle - 턴제 전투 진행 함수]
// 플레이어와 몬스터가 턴을 주고받으며, 스킬은 쿨타임 및 자동/수동 설정에 따라 동작합니다.
// ============================================================================
BattleResult BattleSystem::startBattle(
    Player& player,
    Monster& monster,
    SkillManager& skillManager
)
{
    cout << "\n========== 전투 시작 ==========" << endl;
    cout << player.getName() << " VS " << monster.getName() << endl;

    // 새 전투 시작 시 모든 스킬 쿨타임 초기화
    skillManager.resetCooldownsForBattle();

    int turnCount = 0;

    // 둘 다 살아있는 동안 턴 반복
    while (player.isAlive() && monster.isAlive())
    {
        turnCount++;

        // 1. 일반/2배속 모드: 상세 연출 및 수동 조작 지원
        if (currentSpeed != BattleSpeed::SKIP)
        {
            cout << "\n----------------------------------------" << endl;
            cout << "[" << turnCount << "턴] " << player.getName() << "의 차례!" << endl;

            // [수동 조작 모드인 경우: 행동 선택지 제공]
            if (!skillManager.getAutoCast())
            {
                int actionChoice = 1;
                cout << "1. 일반 공격" << endl;
                cout << "2. 스킬 사용" << (skillManager.hasReadySkill() ? " (사용 가능!)" : " (쿨타임 중)") << endl;
                cout << "행동 선택: ";

                if (cin >> actionChoice)
                {
                    cin.ignore(numeric_limits<streamsize>::max(), '\n');
                }
                else
                {
                    cin.clear();
                    cin.ignore(numeric_limits<streamsize>::max(), '\n');
                    actionChoice = 1;
                }

                if (actionChoice == 2)
                {
                    bool used = skillManager.useSkillManual(monster);
                    if (!used)
                    {
                        // 스킬 취소 시 일반 공격 실행
                        bool isCrit = false;
                        int dmg = calculatePlayerHit(player.getAttack(), isCrit);
                        monster.takeDamage(dmg);
                        if (isCrit) cout << "💥 [CRITICAL HIT!] 치명타 공격! (" << dmg << " 피해)" << endl;
                        else cout << player.getName() << "의 일반 공격! (" << dmg << " 피해)" << endl;
                    }
                }
                else
                {
                    bool isCrit = false;
                    int dmg = calculatePlayerHit(player.getAttack(), isCrit);
                    monster.takeDamage(dmg);
                    if (isCrit) cout << "💥 [CRITICAL HIT!] 치명타 공격! (" << dmg << " 피해)" << endl;
                    else cout << player.getName() << "의 일반 공격! (" << dmg << " 피해)" << endl;
                }
            }
            else
            {
                // [자동 모드인 경우]
                // 1단계: 플레이어 기본 공격 (20% 크리티컬 연산)
                bool isCrit = false;
                int dmg = calculatePlayerHit(player.getAttack(), isCrit);
                monster.takeDamage(dmg);
                if (isCrit) cout << "💥 [CRITICAL HIT!] 치명타 공격! (" << dmg << " 피해)" << endl;
                else cout << player.getName() << "의 기본 공격! (" << dmg << " 피해)" << endl;

                cout << monster.getName() << " HP: " << monster.getHp() << "/" << monster.getMaxHp() << endl;

                if (!monster.isAlive())
                {
                    break;
                }

                // 2단계: 쿨타임 찬 스킬 자동 발동
                skillManager.tryUseSkillAuto(monster);
            }

            cout << monster.getName() << " HP: " << monster.getHp() << "/" << monster.getMaxHp() << endl;

            // 몬스터가 쓰러졌다면 전투 종료
            if (!monster.isAlive())
            {
                break;
            }

            // 3단계: 몬스터의 반격
            cout << "\n" << monster.getName() << "의 공격!" << endl;
            player.takeDamage(monster.getAttack());
            cout << player.getName() << " HP: " << player.getHp() << "/" << player.getMaxHp() << endl;

            // 턴 종료 시 쿨타임 1 감소
            skillManager.reduceAllCooldowns();

            // 배속별 딜레이 적용
            if (currentSpeed == BattleSpeed::NORMAL)
            {
                this_thread::sleep_for(chrono::milliseconds(300));
            }
            else if (currentSpeed == BattleSpeed::FAST)
            {
                this_thread::sleep_for(chrono::milliseconds(70));
            }
        }
        else
        {
            // 2. 자동 스킵(SKIP) 모드: 텍스트 없이 즉시 연산
            monster.takeDamage(player.getAttack());
            if (!monster.isAlive()) break;

            skillManager.tryUseSkillAuto(monster);
            if (!monster.isAlive()) break;

            player.takeDamage(monster.getAttack());
            skillManager.reduceAllCooldowns();
        }
    }

    // 자동 스킵 모드 완료 요약 출력
    if (currentSpeed == BattleSpeed::SKIP)
    {
        cout << "\n[자동 전투 완료] 총 " << turnCount << "턴 동안의 치열한 전투가 끝났습니다!" << endl;
        cout << player.getName() << " 남은 HP: " << player.getHp() << "/" << player.getMaxHp() << endl;
    }

    // 최종 승패 판정
    if (player.isAlive())
    {
        cout << "\n몬스터를 처치했습니다!" << endl;
        return BattleResult::PLAYER_WIN;
    }

    cout << "\n전투에서 패배했습니다..." << endl;
    return BattleResult::PLAYER_LOSE;
}
