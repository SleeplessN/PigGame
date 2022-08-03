let turn = "player";
let playerScore = 0;
let enemyScore = 0;

// roll 버튼 클릭 시
rollDice(turn);

// hold 버튼 클릭 시
turn = turn === "player" ? "player" : "enemy";
