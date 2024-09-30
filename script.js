const rockButton = document.getElementById('rock-btn');
const paperButton = document.getElementById('paper-btn');
const scissorsButton = document.getElementById('scissors-btn');
const roundResult = document.getElementById('result');
const score = document.getElementById('score');

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
    `
};

rockButton.addEventListener('click', () => playRound('ROCK'));
paperButton.addEventListener('click', () => playRound('PAPER'));
scissorsButton.addEventListener('click', () => playRound('SCISSORS'));

