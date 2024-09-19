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

function playRound(){
    
    const playerMove = getPlayerChoice();
    const computerMove = getComputerChoice();
    
    console.log(`Player move: ${playerMove}`);
    console.log(`Computer move: ${computerMove}`);
    
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




