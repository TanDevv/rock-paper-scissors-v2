let choices = ["Rock", "Paper", "Scissors"];
let playerScoreNum = 0;
let computerScoreNum = 0;
let totalPlayerRoundsNum = 0;
let totalComputerRoundsNum = 0;

/* UI */

let scoreMessage = document.querySelector(".score-message");
let scoreInfo = document.querySelector(".score-info");
let playerSign = document.querySelector(".playerSign");
let playerScoreText = document.querySelector(".playerScore");
let playerScoreSpan = document.querySelector(".playerScoreSpan");
let totalPlayerScoreSpan = document.querySelector(".totalPlayerScoreSpan");
let computerSign = document.querySelector(".computerSign");
let computerScoreText = document.querySelector(".computerScore");
let computerScoreSpan = document.querySelector(".computerScoreSpan");
let totalComputerScoreSpan = document.querySelector(".totalComputerScoreSpan");
let rockBtn = document.querySelector(".btn-rock");
let paperBtn = document.querySelector(".btn-paper");
let scissorsBtn = document.querySelector(".btn-scissors");
let resetBtn = document.querySelector(".reset-button");
let totalPlayerRounds = document.querySelector(".playerRounds");
let totalComputerRounds = document.querySelector(".computerRounds");

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
  if (player === computer) {
    scoreMessage.textContent = `You pick ${player}. Computer picks ${computer}.`;
    scoreInfo.textContent = "It is a tie!";
  } else if (
    (player === "Rock" && computer == "Scissors") ||
    (player === "Paper" && computer == "Rock") ||
    (player === "Scissors" && computer == "Paper")
  ) {
    playerScoreNum++;
    scoreMessage.textContent = `You pick ${player}. Computer picks ${computer}.`;
    scoreInfo.textContent = "You win! Good job!";
    playerScoreText.textContent = "Player:";
    playerScoreSpan.textContent = `${playerScoreNum}`;
  } else {
    computerScoreNum++;
    scoreMessage.textContent = `You pick ${player}. Computer picks ${computer}.`;
    scoreInfo.textContent = "Aw shucks, you lose! You got this!";
    computerScoreText.textContent = "Computer:";
    computerScoreSpan.textContent = `${computerScoreNum}`;
  }

  switch (computer) {
    case "Rock":
      computerSign.textContent = "✊";
      break;
    case "Paper":
      computerSign.textContent = "📄";
      break;
    case "Scissors":
      computerSign.textContent = "✂️";
      break;
  }
  checkWinner();
}
rockBtn.addEventListener("click", function () {
  playRound("Rock", getComputerChoice());
  playerSign.textContent = "✊";
});
paperBtn.addEventListener("click", function () {
  playRound("Paper", getComputerChoice());
  playerSign.textContent = "📄";
});
scissorsBtn.addEventListener("click", function () {
  playRound("Scissors", getComputerChoice());
  playerSign.textContent = "✂️";
});

resetBtn.addEventListener("click", function () {
  playerScoreNum = 0;
  computerScoreNum = 0;
  totalPlayerRoundsNum = 0;
  totalComputerRoundsNum = 0;
  scoreMessage.textContent = "First to score 5 points wins the game!";
  scoreInfo.textContent = "Choose your option:";
  playerScoreText.textContent = "Player:";
  playerScoreSpan.textContent = `${playerScoreNum}`;
  computerScoreText.textContent = "Computer:";
  computerScoreSpan.textContent = `${computerScoreNum}`;
  totalPlayerRounds.textContent = "Player Rounds:";
  totalPlayerScoreSpan.textContent = `${totalPlayerRoundsNum}`;
  totalComputerRounds.textContent = "Computer Rounds:";
  totalComputerScoreSpan.textContent = `${totalComputerRoundsNum}`;
});

function checkWinner() {
  if (playerScoreNum === 5) {
    totalPlayerRoundsNum++;
    totalPlayerRounds.textContent = "Player Rounds:";
    totalPlayerScoreSpan.textContent = `${totalPlayerRoundsNum}`;
    scoreMessage.textContent =
      "Congratulations! You win the game! Choose an option to try again!";
    scoreInfo.textContent = "";
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScoreText.textContent = "Player:";
    playerScoreSpan.textContent = `${playerScoreNum}`;
    computerScoreText.textContent = "Computer:";
    computerScoreSpan.textContent = `${computerScoreNum}`;
    /* Confetti from the left side */
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
    });
    /* Confetti from the right side */
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
    });
  } else if (computerScoreNum === 5) {
    totalComputerRoundsNum++;
    totalComputerRounds.textContent = "Computer Rounds:";
    totalComputerScoreSpan.textContent = `${totalComputerRoundsNum}`;
    scoreMessage.textContent =
      "Oh no! You lost the game! Choose an option to try again!";
    scoreInfo.textContent = "";
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScoreText.textContent = "Player:";
    playerScoreSpan.textContent = `${playerScoreNum}`;
    computerScoreText.textContent = "Computer:";
    computerScoreSpan.textContent = `${computerScoreNum}`;
  }
}
