const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    console.log(random);
}

getComputerChoice();