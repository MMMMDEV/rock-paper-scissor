//make func to play game
function rpc() {

    // function to randomize number
    function getRan() {
        return Math.floor(Math.random() * 2);
    }

    //get user input
    let input = prompt("Choose, rock-paper-scissor... GO!");
    input = input.toLowerCase();

    let answer =  "You picked " + input + "!...";

    // if and else if to check for possibilities
    if (input == "rock") {
        if (getRan() == 0) {
            return answer + "Computer says 'rock'..." + "Draw!";
        } else if (getRan() == 1) {
            return answer + "Computer says 'paper'..." + "Sorry you lost";
        } else if (getRan() == 2) {
            return answer + "computer says 'scissor'..." + "Congratulations, You Won!";
        } else {
            return "Error";
        }
    } else if (input == "paper") {
        if (getRan() == 0) {
            return answer + "Computer says 'rock'..." + "Congratulations, You Won!";
        } else if (getRan() == 1) {
            return answer + "Computer says 'paper'..." + "Draw!";
        } else if (getRan() == 2) {
            return answer + "computer says 'scissor'..." + "Sorry you lost";
        } else {
            return "Error";
        }
    } else if (input == "scissor") {
        if (getRan() == 0) {
            return answer + "Computer says 'rock'..." + "Sorry you lost";
        } else if (getRan() == 1) {
            return answer + "Computer says 'paper'..." + "Congratulations, You Won!";
        } else if (getRan() == 2) {
            return answer + "computer says 'scissor'..." + "Draw!";
        } else {
            return "Error";
        }
    } else {
        return "sorry, valid inputs are 'rock, paper, scissor'";
    }
}



console.log(rpc());