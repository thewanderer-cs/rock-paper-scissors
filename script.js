let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1){
        return "rock";
    } else if (random === 2){
        return "paper";
    } else{
        return "scissors";
    };
};

function getPlayerChoice(){
    let playerMove = prompt("What your move: (Rock, Paper, Scissors)?").toLowerCase();
    while(playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissors"){
        playerMove = ("Invalid input. Please enter a valid move: (Rock, Paper, Scissors)").toLowerCase();
    }
    return playerMove;
};

function playRound(playerMove, computerMove){
    console.log(`Player move: ${playerMove}`);
    console.log(`Computer move: ${computerMove}`);
    
    if(playerMove === computerMove){
        console.log("Tie!");
        console.log(`Your Score: ${playerScore}   Computer Score: ${computerScore}`);
    } else if (
        playerMove === "rock" && computerMove === "scissors" ||
        playerMove === "paper" && computerMove === "rock" ||
        playerMove === "scissors" && computerMove === "paper"
    ) {
        console.log("You win!");
        playerScore++;
        console.log(`Your Score: ${playerScore}   Computer Score: ${computerScore}`);
    } else{
        console.log("You lose!");
        computerScore++;
        console.log(`Your Score: ${playerScore}   Computer Score: ${computerScore}`);
    }
};

const playerMove = getPlayerChoice();
const computerMove = getComputerChoice();

playRound(playerMove, computerMove);



