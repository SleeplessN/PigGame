// 전역 변수
let turn = "player";
let playerScore = 0;
let enemyScore = 0;

// min과 max사이에 랜덤한 정수를 얻는 함수
function getRandomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// target에 score를 누적시키는 함수
const setScore = (target, score) => {
  if (score === 1) {
    if (target === "player") playerScore = 0;
    else enemyScore = 0;
    return;
  }

  if (target === "player") playerScore += score;
  else enemyScore += score;
};

const rollDice = (target) => {
  const currentNumber = getRandomDice(1, 6);
  setScore(target, currentNumber);
};
