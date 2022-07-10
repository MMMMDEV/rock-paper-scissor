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
                result.textContent = "Draw!, Rock and Rock are the same";
                break;
            case "paper":
                result.textContent = "Win!, Paper beats Rock";
                break;
            case "scissors":
                result.textContent = "Loose!, Scissors won't beat Rock";
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                result.textContent = "Loose!, Rock won't beat Paper";
                break;
            case "paper":
                result.textContent = "Draw!, Paper and Paper are the same";
                break;
            case "scissors":
                result.textContent = "Win!, Scissors beats Paper";
        }
    } else if (computerSelection === "scissor") {
        switch (playerSelection) {
            case "rock":
                result.textContent = "Win!, Rock beats Scissors";
                break;
            case "paper":
                result.textContent = "Loose!, Paper won't beat Scissors";
                break;
            case "scissors":
                result.textContent = "Draw!, Scissors and Scissors are the same";
        }
    }
}

//adding eventlisteners to run playround on each button

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const resultContainer = document.querySelector(".result-container");

btnRock.addEventListener("click", e => {
    playRound("rock", computerPlay());
});

btnPaper.addEventListener("click", e => {
    playRound("paper", computerPlay())
});

btnScissors.addEventListener("click", e => {
    playRound("scissors", computerPlay())
});

const result = document.createElement("p");
result.classList.add("result");

resultContainer.appendChild(result);
