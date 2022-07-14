
function userPlay() {
    let play = prompt("rock, paper or scissors?")
    return play;
}

function computerPLay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    let playerFormatedSelection = playerSelection.toLowerCase();
    if (playerFormatedSelection === "rock") {
        if (computerSelection === "rock") {
            return "Draw!";
        } else if (computerSelection === "paper") {
            return "Computer wins!";
        } else {
            return "User wins!";
        }
    } else if (playerFormatedSelection === "paper") {
        if (computerSelection === "rock") {
            return "User wins!";
        } else if (computerSelection === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!"
        }
    } else {
        if (computerSelection === "rock") {
            return "Computer wins!"
        } else if (computerSelection === "paper ") {
            return "User wins!"
        } else {
            return "Draw!"
        }
    }
}

let userChoice = userPlay();
let computerChoice = computerPLay();
let result = playRound(userChoice, computerChoice);
console.log("user's choice ", userChoice)
console.log("computer's choice ", computerChoice)
console.log("Result is ", result)