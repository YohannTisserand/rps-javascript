"use strict";

const buttons = document.querySelectorAll(".button");

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
    result += `It's a tie. Computer choose ${computerSelection}`;
  } else if (playerSelection === winmap[computerSelection]) {
    result += `Computer win with ${computerSelection}`;
  } else if (winmap[playerSelection] === computerSelection) {
    result += `You win! Computer choose ${computerSelection}`;
  }
  document.getElementById("result").innerHTML = result;
}
