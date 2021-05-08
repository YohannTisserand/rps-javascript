"use strict";

const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function computerPlay() {
  const myArray = ["rock", "paper", "scissors"];
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection) {
  let winmap = { rock: "scissors", paper: "rock", scissors: "paper"};
  let computerSelection = computerPlay();
  let result = "";

  if (playerSelection === computerSelection) {
    result += `It's a tie. Computer choose ${computerSelection}.<br> your score is: ${playerScore}<br> Computer score is: ${computerScore}`;
  } else if (playerSelection === winmap[computerSelection]) {
    computerScore += 1;
    result += `Computer win with ${computerSelection}.<br> your score is: ${playerScore}<br> Computer score is: ${computerScore}`;
  } else if (winmap[playerSelection] === computerSelection) {
    playerScore += 1;
    result += `You win! Computer choose ${computerSelection}.<br> your score is: ${playerScore}<br> Computer score is: ${computerScore}`;
  }
  document.getElementById("result").innerHTML = result;
}
