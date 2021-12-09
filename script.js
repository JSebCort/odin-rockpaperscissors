let pScore = 0;
let cScore = 0;
const playerScore = document.querySelector("#playerScore");
const compScore = document.querySelector("#compScore");
const resultText = document.querySelector("#result")

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    playGame('Rock',computerPlay());
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    playGame('Paper',computerPlay());
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    playGame('Scissors',computerPlay());
});

/* 
    computerPlay()
    'options' variable holds a list of the three choices in RPC (Rock, Paper, Scissors).
    'move' varible is given a random choice of the three choices to be used in game versus the user.
*/
function computerPlay(){
    let gameOptions = ["Rock","Paper","Scissors"];
    let compMove = gameOptions[Math.floor(Math.random()*gameOptions.length)]
    return compMove;
}

/*
    playGame()
    The function acts as a checker of which player is the winner, if any.
    The result is then displayed to the user by updating the scores and result to the game.
    If a player reaches 5 game wins, they win the match and the game is reset.
*/
function playGame(playerSelection, computerSelection){
    if ((playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors') || (playerSelection == 'Scissors' && computerSelection == 'Paper')){
        pScore++;
        playerScore.textContent=`Player: ${pScore}`;
        resultText.textContent=(`Congratulations, you won! Your ${playerSelection} beat  the opponent's ${computerSelection}`);
    }
    else if(playerSelection == computerSelection){
        resultText.textContent="Draw!";
    }
    else{
        cScore++;
        compScore.textContent=`Computer: ${cScore}`;
        resultText.textContent=(`Sorry, you lost. Opponent's ${computerSelection} beat your ${playerSelection}`);
    }

    if (pScore == 5){
        alert("You have beaten the computer! The game will now self-destruct and reset.");
        resetGame();
    }
    else if(cScore == 5){
        alert("The computer has beaten you. It will now erase your memory and reset the game.")
        resetGame();
    }
}

/*
    resetGame()
    If one of the players gets to 5 game wins, the match ends and everything is reset.
*/
function resetGame(){
    pScore = 0;
    cScore = 0;
    playerScore.textContent="Player: 0";
    compScore.textContent="Computer: 0";
    resultText.textContent="Awaiting match...";
}

/*
    DEPRECATED 
    No longer used as the game has moved from console.
    game()
    This function gets the choices from both the user and the computer, then calls the playGame function to start the game.
*/
function game(){
    let playerChoice = prompt("Choose one of the following: Rock, Paper, or Scissors").toLowerCase();
    playGame(playerChoice,compChoice);
}