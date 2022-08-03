// roll 버튼 클릭 시
rollDice(turn);

// hold 버튼 클릭 시
turn = turn === "player" ? "enemy" : "player";

// 게임 종료
if (playerScore >= 100) {
  alert("이겼다!");
}

if (enemyScore >= 100) {
  alert("졌다!");
}
