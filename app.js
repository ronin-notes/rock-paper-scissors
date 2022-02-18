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

function playRound(computerSelection, playerSelection) {
    if(playerSelection=="Rock"&&computerSelection=="Rock") {
        return "Draw! Rock vs Rock";
    }
    if(playerSelection=="Rock"&&computerSelection=="Paper") {
        return "You Lose! Paper beats Rock";
    }
    if(playerSelection=="Rock"&&computerSelection=="Scissors") {
        return "You Win! Rock beats Scissors";
    }
    if(playerSelection=="Paper"&&computerSelection=="Rock") {
        return "You Win! Paper beats Rock";
    }
    if(playerSelection=="Paper"&&computerSelection=="Paper") {
        return "Draw! Paper vs Paper";
    }
    if(playerSelection=="Paper"&&computerSelection=="Scissors") {
        return "You Lose! Scissors beats Paper";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Rock") {
        return "You Lose! Rock beats Scissors";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Paper") {
        return "You Win! Scissors beats Paper";
    }
    if(playerSelection=="Scissors"&&computerSelection=="Scissors") {
        return "Draw! Scissors vs Scissors";
    }

}

function game() {
    for(let i = 0; i <5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
     alert(result);
    }
}

game();