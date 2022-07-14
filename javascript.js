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
let player = 0;
let computer = 0;
let clickCount = 1;

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        switch (playerSelection) {
            case "rock":
                result.textContent = "Draw!, Rock and Rock are the same";
                break;
            case "paper":
                result.textContent = "Win!, Paper beats Rock";
                player++;
                break;
            case "scissors":
                result.textContent = "Loose!, Scissors won't beat Rock";
                computer++;
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                result.textContent = "Loose!, Rock won't beat Paper";
                computer++;
                break;
            case "paper":
                result.textContent = "Draw!, Paper and Paper are the same";
                break;
            case "scissors":
                result.textContent = "Win!, Scissors beats Paper";
                player++;
        }
    } else if (computerSelection === "scissor") {
        switch (playerSelection) {
            case "rock":
                result.textContent = "Win!, Rock beats Scissors";
                player++;
                break;
            case "paper":
                result.textContent = "Loose!, Paper won't beat Scissors";
                computer++;
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
const roundWinner = document.querySelector(".round-winner-container");
const resultContainer = document.querySelector(".result-container");
const modalContainer = document.querySelector(".modal-container");
const overlay = document.querySelector(".overlay");

btnRock.addEventListener("click", e => {
    playRound("rock", computerPlay());
});
btnRock.addEventListener("click", e => {
    game()
});
btnRock.addEventListener("click", e => {
    clickCount++;
})

btnPaper.addEventListener("click", e => {
    playRound("paper", computerPlay())
});
btnPaper.addEventListener("click", e => {
    game()
});
btnPaper.addEventListener("click", e => {
    clickCount++;
})

btnScissors.addEventListener("click", e => {
    playRound("scissors", computerPlay())
});
btnScissors.addEventListener("click", e => {
    game()
});
btnScissors.addEventListener("click", e => {
    clickCount++;
})

const round = document.createElement("h4");
round.classList.add("round");

const winner = document.createElement("p");
round.classList.add("winner");

const result = document.createElement("p");
result.classList.add("result");

round.textContent = "Start";

roundWinner.appendChild(round);
modalContainer.appendChild(winner);
resultContainer.appendChild(result);

//function for button to refresh page
function refresh() {
    window.location.reload();
}

// let game play 5 times and return winner 
function game() {

    //keep track of round
    round.textContent = "Round " + `${clickCount}`;

    //end of round track
    if (clickCount === 4) {
        round.textContent = "";

        if (player > computer) {
            winner.textContent = "Player Wins!";
        } else if (player < computer) {
            winner.textContent = "Computer Wins!";
        } else if (player === computer) {
            winner.textContent = "Tie!";
        }
        
        result.textContent = "";

        

    } else { 
        winner.textContent = "";
    };

    if (clickCount === 3) {
        modalContainer.classList.add("active");
        overlay.classList.add("active");

        const btnPlayAgain = document.createElement("button");
        btnPlayAgain.classList.add("playAgain");
        btnPlayAgain.textContent = "Play Again!"
        btnPlayAgain.addEventListener("click", e => {
            refresh();
        }); 

        modalContainer.appendChild(btnPlayAgain);
    }
    
}


