const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const roundResult = document.getElementById('result');
const displayScore = document.getElementById('score');
const restart = document.getElementById('restart')

let playerScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice(){
    const moves = ['ROCK', 'PAPER', 'SCISSORS'];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
};
function winner(playerMove, computerMove){
    if(playerMove === computerMove){
        return "DRAW!"
    } else if (
        playerMove === "ROCK" && computerMove === "SCISSORS" ||
        playerMove === "PAPER" && computerMove === "ROCK" ||
        playerMove === "SCISSORS" && computerMove === "PAPER"
    ) {
        return "YOU WIN!";
    } else{
        return "YOU LOSE!";
    }
}
function playRound(move){
    const computerMove = getComputerChoice();
    const result  = winner(move, computerMove);

    roundResult.innerHTML = `
    <p> PLAYER SELECTED: ${move}</p>
    <p> COMPUTER SELECTED: ${computerMove}</p>
    <p> ${result} </p>
    `;
    if(result === "YOU WIN!"){
        playerScore++;
    } else if(result === "YOU LOSE!"){
        computerScore++;
    }
    displayScore.innerHTML = `
        <p>Round: ${round}</p>
        <p>Player Score: ${playerScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
    if(round === 5){
        if(playerScore > computerScore){
            displayScore.innerHTML = `<br><p>Congratulations! Player Wins!</p>`
        } else if(playerScore < computerScore){
            displayScore.innerHTML = `<br><p>Sorry. You lose. Computer Wins.</p>`
        } else{
            displayScore.innerHTML = `<br><p>It's a Tie!</p>`
        }
        playerScore = 0;
        computerScore = 0;
        round = 1;
    } else {
        round++;
    }
};

rockButton.addEventListener('click', () => playRound('ROCK'));
paperButton.addEventListener('click', () => playRound('PAPER'));
scissorsButton.addEventListener('click', () => playRound('SCISSORS'));
