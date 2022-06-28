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
                return "Draw!, Rock and Rock are the same";
                break;
            case "paper":
                return "Win!, Paper beats Rock";
                break;
            case "scissors":
                return "Loose!, Scissors won't beat Rock";
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                return "Loose!, Rock won't beat Paper";
                break;
            case "paper":
                return "Draw!, Paper and Paper are the same";
                break;
            case "scissors":
                return "Win!, Scissors beats Paper";
        }
    } else if (computerSelection === "scissor") {
        switch (playerSelection) {
            case "rock":
                return "Win!, Rock beats Scissors";
                break;
            case "paper":
                return "Loose!, Paper won't beat Scissors";
                break;
            case "scissors":
                return "Draw!, Scissors and Scissors are the same";
        }
    }
}

//function to play multiple rounds
let round = 0;

// regex to verify if player looses or wins round and variables for tracking that
let regexW = /^["Win!"]/;
let regexL = /^["Loose!"]/;

let computer = 0;
let player = 0;

function game() {
    while (round < 5) {
        round++;
        console.log("round " + round)

        let a = playRound(prompt("Rock, Paper, or Scissors?!").toLowerCase(), computerPlay());

        console.log(a);

        if (regexW.test(a) === true) {
            player++;
        } else if (regexL.test(a) === true) {
            computer++;
        };
    }
    
}

console.log(game());

if (player > computer) {
    console.log("Player Wins!");
} else if (player < computer) {
    console.log("Computer Wins!");
} else if (player === computer) {
    console.log("Tie!");
};
