// 파일 역할: 검 상자와 스킬 상자의 기능을 선언한다.

#pragma once

class Player;
class SkillManager;

class ChestSystem
{
public:
    // 검 상자 열기
    void openSwordChest(Player& player);

    // 스킬 상자 열기
    void openSkillChest(Player& player, SkillManager& skillManager);

    // 방어구 상자 열기
    void openArmorChest(Player& player);
};