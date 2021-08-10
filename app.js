// player move
let playerSelection = prompt("Rock, Paper or Scissors?")
// computer move
function computerMove() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3: 
            return "scissors"
    }
}

let computerSelection = computerMove();
// game logic
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie"
    }   else if 
        ((playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")) {
            return "win"
        }   else if
        ((playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "paper")) {
            return "lose"
        }   

}
let result = playRound(playerSelection, computerSelection);
alert(result);