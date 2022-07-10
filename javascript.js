// function to return random rock-paper-scissor
function computerPlay() {

    // num = random number between 0-2
    let num = Math.floor(Math.random() * 3);

    // switch case for the 3 possible number
    switch (num) {
        case 0: 
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissor";
            break;
    }
}



// function to play a round of rps
function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        switch (playerSelection) {
            case "rock":
                console.log ("Draw!, Rock and Rock are the same");
                break;
            case "paper":
                console.log("Win!, Paper beats Rock");
                break;
            case "scissors":
                console.log("Loose!, Scissors won't beat Rock");
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                console.log("Loose!, Rock won't beat Paper");
                break;
            case "paper":
                console.log("Draw!, Paper and Paper are the same");
                break;
            case "scissors":
                console.log("Win!, Scissors beats Paper");
        }
    } else if (computerSelection === "scissor") {
        switch (playerSelection) {
            case "rock":
                console.log("Win!, Rock beats Scissors");
                break;
            case "paper":
                console.log("Loose!, Paper won't beat Scissors");
                break;
            case "scissors":
                console.log("Draw!, Scissors and Scissors are the same");
        }
    }
}

//adding eventlisteners to run playround on each button

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

btnRock.addEventListener("click", e => {
    playRound("rock", computerPlay());
});

btnPaper.addEventListener("click", e => {
    playRound("paper", computerPlay())
});

btnScissors.addEventListener("click", e => {
    playRound("scissors", computerPlay())
});
