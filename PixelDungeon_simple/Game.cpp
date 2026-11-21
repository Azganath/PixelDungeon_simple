#include "Game.h"

#include <iostream>
#include <limits>

using namespace std;

// ============================================================================
// [showMainMenu - 메인 메뉴 화면 출력]
// 마을에서 선택할 수 있는 행동들과 현재 플레이어의 상태를 출력합니다.
// ============================================================================
void Game::showMainMenu()
{
    cout << "\n========== PIXEL DUNGEON ==========" << endl;
    cout << "1. 던전 입장" << endl;
    cout << "2. 검 상자 열기 (열쇠 1개)" << endl;
    cout << "3. 방어구 상자 열기 (열쇠 1개)" << endl;
    cout << "4. 스킬 상자 열기 (열쇠 1개)" << endl;
    cout << "5. 검 강화 (1회 / 연속 강화)" << endl;
    cout << "6. 방어구 강화 (1회 / 연속 강화)" << endl;
    cout << "7. 캐릭터 정보" << endl;
    cout << "8. 스킬 관리 (현재: " << (skillManager.getAutoCast() ? "자동 시전" : "수동 선택") << ")" << endl;
    cout << "9. 보유 룬 및 세트 효과 확인" << endl;

    // 배속 설정은 10스테이지 이후에 해금됩니다.
    if (dungeon.getCurrentStage() >= 10)
    {
        cout << "10. 전투 배속 설정 (현재: ";
        if (dungeon.getBattleSpeed() == BattleSpeed::NORMAL) cout << "1배속)";
        else if (dungeon.getBattleSpeed() == BattleSpeed::FAST) cout << "2배속)";
        else cout << "자동 스킵)";
        cout << endl;
    }
    else
    {
        cout << "10. 전투 배속 설정 (🔒 10스테이지 클리어 시 해금)" << endl;
    }

    cout << "0. 게임 종료" << endl;
    cout << "===================================" << endl;

    cout << "HP: " << player.getHp() << "/" << player.getMaxHp()
        << " | 골드: " << player.getGold()
        << " | 열쇠: " << player.getKeys() << endl;

    cout << "선택: ";
}

// ============================================================================
// [showCharacterInfo - 캐릭터 상세 정보 출력]
// ============================================================================
void Game::showCharacterInfo()
{
    cout << "\n========== 캐릭터 정보 ==========" << endl;
    cout << "이름: " << player.getName() << endl;
    cout << "HP: " << player.getHp() << "/" << player.getMaxHp() << endl;
    cout << "공격력: " << player.getAttack() << endl;
    cout << "방어력: " << player.getDefense() << endl;
    cout << "골드: " << player.getGold() << endl;
    cout << "열쇠: " << player.getKeys() << endl;
    cout << "현재 스테이지: " << dungeon.getCurrentStage() << endl;

    // 주무기 (검) 정보
    cout << "\n[" << player.getDynamicSwordName() << "]" << endl;
    cout << player.getEquipment().getName()
         << " (" << player.getEquipment().getGrade() << ")" << endl;
    cout << "공격력 증가: +" << player.getEquipment().getAttackBonus() << endl;
    cout << "강화 단계: +" << player.getEquipmentEnhanceLevel() << " / 성공 확률: "
         << player.getEnhanceSuccessRate(player.getEquipmentEnhanceLevel()) << "%" << endl;

    // 보스 검 정보
    cout << "\n[보스 전용 검]" << endl;
    cout << player.getBossEquipment().getName()
         << " (" << player.getBossEquipment().getGrade() << ")" << endl;
    cout << "공격력 증가: +" << player.getBossEquipment().getAttackBonus() << endl;

    // 방어구 (갑옷) 정보
    cout << "\n[" << player.getDynamicArmorName() << "]" << endl;
    cout << player.getArmorName()
         << " (" << player.getArmorGrade() << ")" << endl;
    cout << "방어력 증가: +" << player.getArmorDefense() << endl;
    cout << "강화 단계: +" << player.getArmorEnhanceLevel() << " / 성공 확률: "
         << player.getEnhanceSuccessRate(player.getArmorEnhanceLevel()) << "%" << endl;

    // 보스 방어구 정보
    cout << "\n[보스 전용 방어구]" << endl;
    cout << player.getBossArmorName()
         << " (" << player.getBossArmorGrade() << ")" << endl;
    cout << "방어력 증가: +" << player.getBossArmorDefense() << endl;
}

// ============================================================================
// [handleSkillMenu - 스킬 관리 메뉴 (목록 확인 및 자동/수동 전환)]
// ============================================================================
void Game::handleSkillMenu()
{
    int subChoice = 0;
    skillManager.showSkills();

    cout << "\n1. 스킬 자동/수동 모드 변경 (현재: " 
         << (skillManager.getAutoCast() ? "자동 시전" : "수동 선택") << ")" << endl;
    cout << "0. 뒤로 가기" << endl;
    cout << "선택: ";

    if (cin >> subChoice)
    {
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        if (subChoice == 1)
        {
            bool current = skillManager.getAutoCast();
            skillManager.setAutoCast(!current);
            cout << "\n스킬 시전 모드가 [" << (!current ? "자동 시전" : "수동 선택") << "] 모드로 변경되었습니다!" << endl;
        }
    }
    else
    {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
}

// ============================================================================
// [handleSwordUpgrade - 검 강화 메뉴 (1회 / 연속 강화)]
// ============================================================================
void Game::handleSwordUpgrade()
{
    int subChoice = 0;
    cout << "\n========== 검 강화소 ==========" << endl;
    cout << "현재 검: " << player.getEquipment().getName() << " (+" << player.getEquipmentEnhanceLevel() << "강)" << endl;
    cout << "다음 강화 성공 확률: " << player.getEnhanceSuccessRate(player.getEquipmentEnhanceLevel()) << "%" << endl;
    cout << "보유 골드: " << player.getGold() << "G (1회당 100G)" << endl;
    cout << "1. 1회 강화 시도" << endl;
    cout << "2. 목표 단계까지 연속 강화" << endl;
    cout << "0. 뒤로 가기" << endl;
    cout << "선택: ";

    if (cin >> subChoice)
    {
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        if (subChoice == 1)
        {
            player.upgradeEquipment();
        }
        else if (subChoice == 2)
        {
            int target = 10;
            cout << "목표 강화 단계를 입력하세요 (최대 10): ";
            if (cin >> target)
            {
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
                player.autoUpgradeEquipment(target);
            }
        }
    }
    else
    {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
}

// ============================================================================
// [handleArmorUpgrade - 방어구 강화 메뉴 (1회 / 연속 강화)]
// ============================================================================
void Game::handleArmorUpgrade()
{
    int subChoice = 0;
    cout << "\n========== 방어구 강화소 ==========" << endl;
    cout << "현재 갑옷: " << player.getArmorName() << " (+" << player.getArmorEnhanceLevel() << "강)" << endl;
    cout << "다음 강화 성공 확률: " << player.getEnhanceSuccessRate(player.getArmorEnhanceLevel()) << "%" << endl;
    cout << "보유 골드: " << player.getGold() << "G (1회당 100G)" << endl;
    cout << "1. 1회 강화 시도" << endl;
    cout << "2. 목표 단계까지 연속 강화" << endl;
    cout << "0. 뒤로 가기" << endl;
    cout << "선택: ";

    if (cin >> subChoice)
    {
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        if (subChoice == 1)
        {
            player.upgradeArmor();
        }
        else if (subChoice == 2)
        {
            int target = 10;
            cout << "목표 강화 단계를 입력하세요 (최대 10): ";
            if (cin >> target)
            {
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
                player.autoUpgradeArmor(target);
            }
        }
    }
    else
    {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
}

// ============================================================================
// [handleSpeedSetting - 전투 배속 원터치 설정 (10스테이지 이후 해금)]
// ============================================================================
void Game::handleSpeedSetting()
{
    if (dungeon.getCurrentStage() < 10)
    {
        cout << "\n[🔒 잠김] 전투 배속 설정은 10스테이지(첫 보스 클리어) 이후에 해금됩니다!" << endl;
        cout << "현재 던전 스테이지: " << dungeon.getCurrentStage() << " / 10" << endl;
        return;
    }

    int speedChoice = 0;
    cout << "\n========== 전투 배속 설정 ==========" << endl;
    cout << "현재 설정: ";
    if (dungeon.getBattleSpeed() == BattleSpeed::NORMAL) cout << "1배속 (기본 연출)" << endl;
    else if (dungeon.getBattleSpeed() == BattleSpeed::FAST) cout << "2배속 (빠른 연출)" << endl;
    else cout << "3배속/스킵 (자동 즉시 완료)" << endl;

    cout << "\n변경할 배속을 선택하세요:" << endl;
    cout << "1. 1배속 (0.3초 대기로 턴 지켜보기)" << endl;
    cout << "2. 2배속 (빠르게 턴 진행)" << endl;
    cout << "3. 자동 스킵 (텍스트 없이 즉시 결과 확인)" << endl;
    cout << "0. 취소 (현재 유지)" << endl;
    cout << "선택: ";

    if (cin >> speedChoice)
    {
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
        if (speedChoice == 1)
        {
            dungeon.setBattleSpeed(BattleSpeed::NORMAL);
            cout << "\n전투 속도가 [1배속]으로 설정되었습니다!" << endl;
        }
        else if (speedChoice == 2)
        {
            dungeon.setBattleSpeed(BattleSpeed::FAST);
            cout << "\n전투 속도가 [2배속]으로 설정되었습니다!" << endl;
        }
        else if (speedChoice == 3)
        {
            dungeon.setBattleSpeed(BattleSpeed::SKIP);
            cout << "\n전투 속도가 [자동 스킵]으로 설정되었습니다!" << endl;
        }
    }
    else
    {
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }
}

// ============================================================================
// [run - 게임 메인 루프]
// ============================================================================
void Game::run()
{
    int choice = -1;

    cout << "PIXEL DUNGEON에 오신 것을 환영합니다!" << endl;

    while (choice != 0)
    {
        showMainMenu();

        if (!(cin >> choice))
        {
            if (cin.eof())
            {
                cout << "\n입력이 종료되었습니다. 게임을 종료합니다." << endl;
                break;
            }

            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "\n잘못된 입력입니다. 숫자를 입력해 주세요." << endl;
            continue;
        }

        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        switch (choice)
        {
        case 1:
            dungeon.enterDungeon(player, skillManager, runeManager);
            break;

        case 2:
            chestSystem.openSwordChest(player);
            break;

        case 3:
            chestSystem.openArmorChest(player);
            break;

        case 4:
            chestSystem.openSkillChest(player, skillManager);
            break;

        case 5:
            handleSwordUpgrade();
            break;

        case 6:
            handleArmorUpgrade();
            break;

        case 7:
            showCharacterInfo();
            break;

        case 8:
            handleSkillMenu();
            break;

        case 9:
            runeManager.showRunes();
            break;

        case 10:
            handleSpeedSetting();
            break;

        case 0:
            cout << "\n게임을 종료합니다. 플레이해 주셔서 감사합니다!" << endl;
            break;

        default:
            cout << "\n잘못된 선택입니다. 목록에 있는 번호를 입력해 주세요." << endl;
            break;
        }
    }
}
