//Array of possible moves
const moves = ['rock', 'paper', 'scissors'];

//Computer Move
function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

//Find Winner

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove){
        return 'Draw!'
    }
    if ( 
        (playerMove === 'rock' && computerMove === 'scissors') || 
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        return 'Player Wins!'
    } else {
        return 'Computer Wins'
    }
}

//Play Game
function playGame(playerMove) {
    const computerMove = getComputerMove();
    const winner = getWinner(playerMove, computerMove);
    const resultElement = document.getElementById('gameResult');
        resultElement.textContent = `Player: ${playerMove}, 
         Computer: ${computerMove}. ${winner}`;
}