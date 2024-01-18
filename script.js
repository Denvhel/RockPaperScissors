const choices = ["Rock", "Paper", "Scissor"];

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

function singleRound() {
    if (getPlayerChoice === getComputerChoice) {
        console.log("It's a tie!");
    }
}

getPlayerChoice();
getComputerChoice();
singleRound();

