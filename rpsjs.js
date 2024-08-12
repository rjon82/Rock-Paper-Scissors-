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
//Take two inputs, Human and comptuer, and compare the two to add a point
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
let maxRounds = 1;
function playGame (){
    //Edited round number, in for line below, to be 1 round for testing
    for (let round = 1; round <= maxRounds; round++) {
        console.log('Round: ' + round);
        getHumanChoice();
        getComputerChoice();
        console.log('The computer chose: ', computerChoice + '');
        playRound(humanChoice,computerChoice);
        console.log('You have: ' + humanScore + ' points');
        console.log('Computer has: ' + computerScore + ' points');
        if (round == maxRounds) {
            if (humanScore > computerScore) {
                console.log('Congrats, you won the game!');
            } else if (humanScore < computerScore){
                console.log('Sorry, you lost!');
            } else {
                console.log('Its a tie!')
            }
        }
    }
}
buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        humanChoice = button.id;
        getComputerChoice();

/////edit below
        yourChoice.textContent = `You chose: ${humanChoice}\n`
        compChoice.textContent = `Computer chose: ${computerChoice}`;
        results.appendChild(yourChoice);
        results.appendChild(compChoice);


//edit above
        playRound(humanChoice, computerChoice);
    });
});
