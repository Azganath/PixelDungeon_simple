// 파일 역할: 게임 프로그램의 시작 지점과 랜덤 및 콘솔 인코딩 초기화를 담당한다.

#include "Game.h"

#include <cstdlib>
#include <ctime>
#include <windows.h>

int main()
{
    // [중요] Windows 콘솔 입출력 코드페이지를 UTF-8(65001)로 설정하여 한글 깨짐을 방지합니다.
    SetConsoleOutputCP(CP_UTF8);
    SetConsoleCP(CP_UTF8);

    // 현재 시간을 기준으로 랜덤 값 초기화
    srand(static_cast<unsigned int>(time(nullptr)));

    Game game;

    game.run();

    return 0;
}
