


//make func to play game
function rpc() {

    // function to randomize number
    function getRan() {
        return Math.floor(Math.random() * 3);
    }

    //get user input
    let input = prompt("Choose, rock-paper-scissor... GO!");
    input = input.toLowerCase();
    
    // if and else if to check for possibilities
    if (input == "rock") {
        let answer =  "You picked " + input + "!...";
        if (getRan() == 0) {
            return answer + "computer says 'rock'..." + "Congratulations! you won";
        } else if (getRan() == 1) {
            return answer + "computer says 'paper'..." + "sorry you lost";
        } else if (getRan() == 2) {
            return answer + "computer says 'scissor'..." + "sorry you lost";
        }
    }
}



console.log(rpc());