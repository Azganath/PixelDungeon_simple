#include "Dungeon.h"
#include "NormalMonster.h"
#include "Boss.h"
#include "Equipment.h"
#include "Armor.h"
#include "SkillManager.h"
#include "RuneManager.h"
#include "Rune.h"

#include <iostream>
#include <cstdlib>
#include <string>

using namespace std;

// ============================================================================
// [생성자] 첫 시작은 스테이지 1로 초기화합니다.
// ============================================================================
Dungeon::Dungeon()
    : currentStage(1)
{
}

int Dungeon::getCurrentStage() const
{
    return currentStage;
}

void Dungeon::setBattleSpeed(BattleSpeed speed)
{
    battleSystem.setBattleSpeed(speed);
}

BattleSpeed Dungeon::getBattleSpeed() const
{
    return battleSystem.getBattleSpeed();
}

// ============================================================================
// [enterDungeon - 던전 전투 진행 핵심 함수]
// 스테이지 규칙:
// - 10의 배수 스테이지: "던전 보스" 등장
// - 5의 배수 스테이지: "엘리트 몬스터" 등장
// - 그 외 스테이지: "일반 몬스터" 등장
// 승리 시:
// - 골드, 열쇠(확률), 보스 전용 장비(보스전 확률) 획득
// - 체력 30%~40% 자동 회복
// - 다음 스테이지로 전진 (currentStage++)
// 패배 시:
// - 체력 100% 회복
// - 이전 스테이지로 후퇴 (currentStage--)
// ============================================================================
void Dungeon::enterDungeon(Player& player, SkillManager& skillManager, RuneManager& runeManager)
{
    cout << "\n========== DUNGEON ==========" << endl;
    cout << "현재 스테이지: " << currentStage << endl;

    // 체력 경고 (현재 HP가 30% 이하인 상태로 입장 시 안내)
    if (player.getHp() <= player.getMaxHp() * 30 / 100)
    {
        cout << "\n[⚠️ 경고: 현재 HP가 너무 낮습니다! (" << player.getHp() << "/" << player.getMaxHp() 
             << ") 이번 전투에서 위험할 수 있습니다.]" << endl;
    }

    // 1. [10의 배수 스테이지: 보스전]
    if (currentStage % 10 == 0)
    {
        Boss boss(currentStage);

        cout << "\n[보스 등장!] " << boss.getName() << "이(가) 나타났습니다!" << endl;

        BattleResult result = battleSystem.startBattle(player, boss, skillManager);

        if (result == BattleResult::PLAYER_WIN)
        {
            cout << "\n★ 보스 처치 성공! 대단한 승리입니다! ★" << endl;

            player.addGold(boss.getGoldReward());
            player.addKeys(1);

            cout << boss.getGoldReward() << " 골드를 획득했습니다." << endl;
            cout << "열쇠 1개를 획득했습니다." << endl;

            // 보스 전용 검 드롭 체크 (30% 확률)
            int randomNumber = rand() % 100 + 1;
            if (randomNumber <= boss.getEquipmentDropChance())
            {
                cout << "\n[보스 전용 검 획득!]" << endl;
                int attackBonus = 120 + currentStage * 5;
                int sellPrice = 400 + currentStage * 20;

                Equipment bossEquipment(
                    "파멸을 부르는 심연의 대검",
                    "보스 전용",
                    attackBonus,
                    sellPrice
                );

                cout << bossEquipment.getName() << " (공격력 +" << attackBonus << ")" << endl;
                player.equipBossEquipment(bossEquipment);
            }
            else
            {
                cout << "\n보스 전용 검이 드롭되지 않았습니다." << endl;
            }

            // 보스 전용 방어구 드롭 체크 (20% 확률)
            int armorRandomNumber = rand() % 100 + 1;
            if (armorRandomNumber <= 20)
            {
                cout << "\n[보스 전용 방어구 획득!]" << endl;
                int defenseBonus = 70 + currentStage * 3;
                int sellPrice = 400 + currentStage * 20;

                Armor bossArmor(
                    "던전 군주의 흑철 갑주",
                    "보스 전용",
                    defenseBonus,
                    sellPrice
                );

                cout << bossArmor.getName() << " (방어력 +" << defenseBonus << ")" << endl;
                player.equipBossArmor(bossArmor);
            }
            else
            {
                cout << "\n보스 전용 방어구가 드롭되지 않았습니다." << endl;
            }

            // 보스 처치 보너스: 체력 40% 회복
            int healAmount = player.getMaxHp() * 40 / 100;
            player.heal(healAmount);
            cout << "\n보스 토벌의 환희로 체력을 " << healAmount << " 회복했습니다! (현재 HP: " 
                 << player.getHp() << "/" << player.getMaxHp() << ")" << endl;

            currentStage++;
        }
        else
        {
            cout << "\n보스에게 패배했습니다..." << endl;

            if (currentStage > 1)
            {
                currentStage--;
            }

            player.heal(player.getMaxHp());
        }
    }
    // 2. [일반 및 엘리트 몬스터전]
    else
    {
        bool isElite = (currentStage % 5 == 0);
        NormalMonster monster(currentStage, isElite);

        if (isElite)
        {
            cout << "\n[강력한 엘리트 몬스터 등장!]" << endl;
        }
        else
        {
            cout << "\n[일반 몬스터 등장!]" << endl;
        }

        BattleResult result = battleSystem.startBattle(player, monster, skillManager);

        if (result == BattleResult::PLAYER_WIN)
        {
            cout << "\n몬스터 처치 성공!" << endl;

            player.addGold(monster.getGoldReward());
            cout << monster.getGoldReward() << " 골드를 획득했습니다." << endl;

            // 열쇠 드롭 체크
            int randomNumber = rand() % 100 + 1;
            if (randomNumber <= monster.getKeyDropChance())
            {
                player.addKeys(1);
                cout << "열쇠 1개를 획득했습니다!" << endl;
            }

            // [엘리트 몬스터 전용 특수 보상: 룬 드롭 (60% 확률)]
            if (isElite)
            {
                int runeRoll = rand() % 100 + 1;
                if (runeRoll <= 60)
                {
                    // 스테이지에 따른 룬 등급 결정
                    string runeGrade = "일반";
                    int gradeRoll = rand() % 100 + 1;

                    if (currentStage >= 25 && gradeRoll <= 20)
                    {
                        runeGrade = "영웅";
                    }
                    else if (currentStage >= 15 && gradeRoll <= 40)
                    {
                        runeGrade = "희귀";
                    }
                    else if (gradeRoll <= 30)
                    {
                        runeGrade = "희귀";
                    }

                    // 룬 종류 결정 (0: 생명, 1: 방어, 2: 공격)
                    int typeRoll = rand() % 3;
                    string runeName = "";
                    RuneType rType = RuneType::LIFE;
                    int hpBonus = 0;
                    int atkBonus = 0;
                    int defBonus = 0;

                    if (typeRoll == 0)
                    {
                        rType = RuneType::LIFE;
                        runeName = runeGrade + " 생명의 룬";
                        hpBonus = (runeGrade == "일반") ? 15 : ((runeGrade == "희귀") ? 35 : 70);
                    }
                    else if (typeRoll == 1)
                    {
                        rType = RuneType::DEFENSE;
                        runeName = runeGrade + " 수호의 룬";
                        defBonus = (runeGrade == "일반") ? 2 : ((runeGrade == "희귀") ? 5 : 10);
                    }
                    else
                    {
                        rType = RuneType::ATTACK;
                        runeName = runeGrade + " 용기의 룬";
                        atkBonus = (runeGrade == "일반") ? 3 : ((runeGrade == "희귀") ? 7 : 15);
                    }

                    Rune droppedRune(runeName, runeGrade, rType, hpBonus, atkBonus, defBonus);
                    runeManager.addRune(droppedRune, player);
                }
                else
                {
                    cout << "\n엘리트 몬스터에게서 룬이 드롭되지 않았습니다." << endl;
                }
            }

            // 일반/엘리트 승리 보너스: 체력 30% 회복
            int healAmount = player.getMaxHp() * 30 / 100;
            player.heal(healAmount);
            cout << "\n전투 승리 보너스로 체력을 " << healAmount << " 회복했습니다! (현재 HP: " 
                 << player.getHp() << "/" << player.getMaxHp() << ")" << endl;

            currentStage++;
        }
        else
        {
            cout << "\n몬스터에게 패배했습니다..." << endl;

            if (currentStage > 1)
            {
                currentStage--;
            }

            player.heal(player.getMaxHp());
        }
    }

    cout << "\n현재 스테이지: " << currentStage << endl;
    cout << "보유 골드: " << player.getGold() << " | 보유 열쇠: " << player.getKeys() << endl;
}
