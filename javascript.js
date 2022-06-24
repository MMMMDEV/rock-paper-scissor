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
console.log(computerPlay());