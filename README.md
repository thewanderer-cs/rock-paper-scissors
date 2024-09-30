# Simple Rock Paper Scissors Game

The game can be played in the console of your browser.
You will play versus the computer for a total of 5 rounds
each round will require a input and will show the result and score at the console
after 5 rounds the winner will be declared and the game will end!


const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const result = document.getElementById('result');
const score = document.getElementById('score');


function getComputerChoice(){
    const moves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
};

function getPlayerChoice(playerMove){
    rockButton.addEventListener('click', () => getPlayerChoice('rock'));
    paperButton.addEventListener('click', () => getPlayerChoice('paper'));
    scissorsButton.addEventListener('click', () => getPlayerChoice('scissors'));
    return playerMove;
};

function playRound(){
    
    const playerMove = getPlayerChoice();
    const computerMove = getComputerChoice();
    
    if(playerMove === computerMove){
        console.log("Draw!  ");
        return "draw";
    } else if (
        playerMove === "rock" && computerMove === "scissors" ||
        playerMove === "paper" && computerMove === "rock" ||
        playerMove === "scissors" && computerMove === "paper"
    ) {
        console.log("You win!");
        return "player";
    } else{
        console.log("You lose!");
        return "computer";
    }


};

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (round = 1; round <= 5; round++){
        console.log(`Round: ${round}`);
        let result = playRound();
        if(result === "player"){
            playerScore++;
        } else if(result === "computer"){
            computerScore++;
        }
        console.log(`Your Score: ${playerScore}   Computer Score: ${computerScore}`);
    };

    console.log("Final Score: ");
    console.log(`Your Score: ${playerScore}   Computer Score: ${computerScore}`);

    if(playerScore > computerScore){
        console.log("Congratulations! Player Wins!");
    } else if(playerScore < computerScore){
        console.log("Sorry. You lose. Computer Wins");
    } else{
        console.log("It's a Tie!");
    }
} 

playGame();
