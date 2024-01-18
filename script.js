const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose " + computerChoice + "!");
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("What do you choose? Rock, Paper or Scissor?");
    console.log("You chose " + playerChoice + "!");
    return playerChoice;
}

for (let i = 0; i < 3; i++) {

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Computer wins!");
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Player wins!");
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Player wins!");
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("Computer wins!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log ("Player wins!");
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log ("Computer wins!");
    }

}
