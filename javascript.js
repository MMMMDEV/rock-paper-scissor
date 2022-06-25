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
                return "You Win!, Paper beats Rock";
                break;
            case "scissor":
                return "You Lose!, Scissor won't beat Rock"
        }
    }
}

let player = "paper";
player = player.toLowerCase();
const computer = computerPlay();
console.log(playRound(player, computer));