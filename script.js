let computerChoice;
let computerScore = 0;
let playerChoice;
let playerScore = 0;

function getPlayerChoice() {
  playerChoice = prompt("choose rock, paper, scissors").toLowerCase();
  while (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    playerChoice = prompt("must enter rock, paper, or scissors").toLowerCase();
  }
  return playerChoice;
}

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  playerChoice = getPlayerChoice();
  computerChoice = getComputerChoice();
  if (playerChoice == computerChoice) {
    return `
    you chose ${playerChoice} - computer chose ${computerChoice}
    draw 
    current score: P:${playerScore} C:${computerScore}
    `;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore += 1;
    return `
    you chose ${playerChoice} - computer chose ${computerChoice}
    you win 
    current score: P:${playerScore} C:${computerScore}
    `;
  } else {
    computerScore = +1;
    return `
    you chose ${playerChoice} - computer chose ${computerChoice}
    computer wins
    current score: P:${playerScore} C:${computerScore}
    `;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) console.log(playRound(i));
}
playGame();

function gameOver() {
  if (playerScore > computerScore) {
    return `YOU WIN THE GAME`;
  } else if (computerScore > playerScore) {
    return `YOU LOSE`;
  } else {
    return `GAME WAS A DRAW`;
  }
}
console.log(gameOver());
