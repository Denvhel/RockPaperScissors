const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose " + computerChoice + "!");
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("What do you choose? Rock, Paper or Scissor?").toLowerCase();
    console.log("You chose " + playerChoice + "!");
    return playerChoice;
}

for (let i = 0; i < 3; i++) {

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("It's a tie! Play Again.");
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! Scissor beats paper.");
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You lose! Scissor beats paper.");
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log ("You win! Rock beats scissor.");
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log ("You lose! Rock beats scissor.");
    }


}

