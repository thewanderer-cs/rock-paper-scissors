let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        return "Rock";
    } else if (random === 2){
        return "Paper";
    } else{
        return "Scissors";
    };
};
function getPlayerChoice(){
    let playerMove = prompt("What your move?")
    return playerMove
};
function playRound(playerMove, computerMove){
    console.log(`Player move: ` + playerMove);
    console.log(`Computer move: ` + computerMove);
    if(playerMove === "Rock"){
        if (computerMove === "Rock"){
            console.log("DRAW!");
        } else if (computerMove === "Paper"){
            console.log("YOU LOSE! Paper beats Rock.");
        } else {
            console.log("YOU WIN! Rock beats Scissors.");
        }
    };
    if(playerMove === "Paper"){
        if (computerMove === "Rock"){
            console.log("YOU WIN! Paper beats Rock.");
        } else if (computerMove === "Paper"){
            console.log("DRAW!");
        } else {
            console.log("YOU LOSE! Scissors beats Paper.");
        }
    };
    if(playerMove === "Scissors"){
        if (computerMove === "Rock"){
            console.log("YOU LOSE! Rock beats Scissors.");
        } else if (computerMove === "Paper"){
            console.log("YOU WIN! Scissors beats Paper.");
        } else {
            console.log("DRAW!");
        }
    };
};

const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();

playRound(playerMove, computerMove);


