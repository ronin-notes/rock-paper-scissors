function computerPlay() {
    let computerSelection = Math.floor((Math.random() * 3) + 1);
    if (computerSelection==1) {
        return "Rock";
    }
    if (computerSelection==2) {
        return "Paper";
    }
    if (computerSelection==3) {
        return "Scissors";
    }
}
function playerPlay() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if(playerSelection=="Rock"&&computerSelection=="Rock") {
        return "Draw! Rock vs Rock";
    }
    if(playerSelection=="Rock"&&computerSelection=="Paper") {
        current_score_computer++;
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="Rock"&&computerSelection=="Scissors") {
        current_score_player++;
        return "You Win! Rock beats Scissors";
    }
    if(playerSelection=="Paper"&&computerSelection=="Rock") {
        current_score_player++;
        return "You Win! Paper beats Rock";
    }
    if(playerSelection=="Paper"&&computerSelection=="Paper") {
        return "Draw! Paper vs Paper";
    }
    if(playerSelection=="Paper"&&computerSelection=="Scissors") {
        current_score_computer++;
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Rock") {
        current_score_computer++;
        return "You Lose! Rock beats Scissors";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Paper") {
        current_score_player++;
        return "You Win! Scissors beats Paper";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Scissors") {
        return "Draw! Scissors vs Scissors";
    }

}
const results = document.querySelector("#results");
const running_score = document.querySelector("#running_score");
let current_score_player = 0;
let current_score_computer = 0;
running_score.textContent = current_score_player + "      :      " + current_score_computer;



const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    results.textContent = playRound("Rock");
    running_score.textContent = current_score_player + "      :      " + current_score_computer;

});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    results.textContent = playRound("Paper");
    running_score.textContent = current_score_player + "      :      " + current_score_computer;

});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    results.textContent = playRound("Scissors");
    running_score.textContent = current_score_player + "      :      " + current_score_computer;

});

const new_game = document.querySelector("#new_game");
new_game.addEventListener("click", () => {
    current_score_player = 0;
    current_score_computer = 0;
    running_score.textContent = current_score_player + "      :      " + current_score_computer;
})