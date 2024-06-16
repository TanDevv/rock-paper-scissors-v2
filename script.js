let choices = ["Rock", "Paper", "Scissors"];
let playerScoreNum = 0;
let computerScoreNum = 0;
let totalPlayerRoundsNum = 0;
let totalComputerRoundsNum = 0;

/* UI */

let scoreMessage = document.querySelector(".score-message");
let scoreInfo = document.querySelector(".score-info");
let playerSign = document.querySelector(".playerSign");
let playerScore = document.querySelector(".playerScore");
let computerSign = document.querySelector(".computerSign");
let computerScore = document.querySelector(".computerScore");
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
    playerScore.textContent = `Player: ${playerScoreNum}`;
  } else {
    computerScoreNum++;
    scoreMessage.textContent = `You pick ${player}. Computer picks ${computer}.`;
    scoreInfo.textContent = "Aw shucks, you lose! You got this!";
    computerScore.textContent = `Computer: ${computerScoreNum}`;
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
  playerScore.textContent = "Player Score: 0";
  computerScore.textContent = "Computer Score: 0";
  totalPlayerRounds.textContent = "Player Rounds: 0";
  totalComputerRounds.textContent = "Computer Rounds: 0";
});

function checkWinner() {
  if (playerScoreNum === 5) {
    totalPlayerRoundsNum++;
    totalPlayerRounds.textContent = `Player Rounds: ${totalPlayerRoundsNum}`;
    scoreMessage.textContent =
      "Congratulations! You win the game! Choose an option to try again!";
    scoreInfo.textContent = "";
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScore.textContent = "Player Score: 0";
    computerScore.textContent = "Computer Score: 0";
  } else if (computerScoreNum === 5) {
    totalComputerRoundsNum++;
    totalComputerRounds.textContent = `Computer Rounds: ${totalComputerRoundsNum}`;
    scoreMessage.textContent =
      "Oh no! You lost the game! Choose an option to try again!";
    scoreInfo.textContent = "";
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScore.textContent = "Player Score: 0";
    computerScore.textContent = "Computer Score: 0";
  }
}
