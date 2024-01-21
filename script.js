const choices = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Computer chose " + computerChoice + "!");
    return computerChoice;
}

function playRound() {

    const playerChoice = prompt("What do you choose? Rock, Paper or Scissor?").toLowerCase();
    console.log("You chose " + playerChoice + "!");

    const computerSelection = getComputerChoice();
    const playerSelection = playerChoice;

    if (playerSelection === computerSelection) {
        console.log("It's a tie! Play Again.");
        playRound();
    } 
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.");
        return computerScore = computerScore + 1;
        
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        return playerScore = playerScore + 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("You win! Scissor beats paper.");
        return playerScore = playerScore + 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("You lose! Scissor beats paper.");
        return computerScore = computerScore + 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log ("You win! Rock beats scissor.");
        return playerScore = playerScore + 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log ("You lose! Rock beats scissor.");
        return computerScore = computerScore + 1;
    }

}

function game() {

    playRound();

    console.log("Player has "+ playerScore + " points");
    console.log("Computer has " + computerScore + " points");

    if (playerScore == 3) {
        console.log("We have a winner! Player wins.");
    }
    else if (computerScore == 3) {
        console.log("We have a winner! Computer wins.");
    }

}

for (let i = 0; i < 5; i++) {
    game();

    if (playerScore == 3 || computerScore == 3){
        break;
    }
}