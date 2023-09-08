let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
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
    you win this round
    current score: P:${playerScore} C:${computerScore}
    `;
  } else {
    computerScore += 1;
    return `
    you chose ${playerChoice} - computer chose ${computerChoice}
    computer wins this round
    current score: P:${playerScore} C:${computerScore}
    `;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (roundsPlayed < 5) {
      const playerChoice = event.target.value;
      const result = playRound(playerChoice);
      console.log(result);
      roundsPlayed++;

      if (playerScore >= 3 || computerScore >= 3 || roundsPlayed === 5) {
        console.log(game());
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
      }
    }
  });
});

function game() {
  if (playerScore === 0 && computerScore === 0) {
    return `Welcome To RPS`;
  } else if (playerScore >= 3) {
    return `YOU WIN THE GAME`;
  } else if (computerScore >= 3) {
    return `YOU LOSE`;
  } else {
    return `GAME WAS A DRAW`;
  }
}
