//Psuedocode: 
//Create a function (playRound) that has RPS logic and talleis up the score of each player
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let computerScore = 0;
let humanScore = 0;
let humanChoice ;
let computerChoice ;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const yourChoice = document.createElement('p');
const compChoice = document.createElement('p');
const roundResult = document.createElement('div');
const roundDisplay = document.createElement('p');
const yourScoreDisplay = document.createElement ('p');
const compScoreDisplay =  document.createElement ('p');
const winnerMsg = document.createElement('p');
const loserMsg = document.createElement('p');
const tieMsg = document.createElement('p');

function getComputerChoice () {
    computerChoice = Math.random() * 100;
    if (computerChoice <33) {
        return computerChoice = rock ;
    } else if (33 < computerChoice && computerChoice < 66){
        return computerChoice = paper;
    } else{
        return computerChoice = scissors;
    }
    
}
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = "It's a draw!";
        results.appendChild(roundResult);

    } else if (humanChoice  == rock && computerChoice == scissors) {
        roundResult.textContent = "You win, rock beats scissors!";
        results.appendChild(roundResult);
        return humanScore ++;

    } else if (humanChoice == paper && computerChoice == rock) {
        roundResult.textContent = "You win, paper beats rock!";
        results.appendChild(roundResult);
        return humanScore ++;

    } else if (humanChoice == scissors && computerChoice == paper) {
        roundResult.textContent = "You win, scissors beats paper!";
        results.appendChild(roundResult);
        return humanScore ++;

    } else {
        roundResult.textContent = `Computer wins, ${computerChoice} beats ${humanChoice}`;
        results.appendChild(roundResult);
        computerScore ++;
    }
}

let round = 1;
let maxScore = 5;
function playGame (){
    playRound(humanChoice,computerChoice);
    roundDisplay.textContent = `Round: ${round}`;
    yourScoreDisplay.textContent = `Your score is: ${humanScore}`;
    compScoreDisplay.textContent = `Computer Score is: ${computerScore}`;
    results.appendChild(roundDisplay);
    results.appendChild(yourScoreDisplay);
    results.appendChild(compScoreDisplay);
    console.log(humanScore, computerScore);
    if ((computerScore == maxScore) || (humanScore == maxScore)) {
        if (humanScore == maxScore) {
            winnerMsg.textContent = 'Congrats, you won the game!'
            results.appendChild(winnerMsg);
        } else if (computerScore == maxScore){
            loserMsg.textContent = 'Sorry, you lost!'
            results.appendChild(loserMsg);
        } else {
            tieMsg.textContent = "It's a tie!"
            results.appendChild(tieMsg);
        }
    }
}

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        humanChoice = button.id;
        getComputerChoice();
        yourChoice.textContent = `You chose: ${humanChoice}\n`
        compChoice.textContent = `Computer chose: ${computerChoice}`;
        results.appendChild(yourChoice);
        results.appendChild(compChoice);
        playGame();
        round++
    });
});

