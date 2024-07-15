//Psuedocode: 
//Define three string variables for each of the selections in the game as well as two variable that define the human and computer score
//Create a function (getComputerChoice) that randomly selects a string value
    //between rock, paper, or scissors
//Create a function(getHumanChoice) that prompts the user for a choice of: rock, paper, or scissors 
//Create a function (playRound) that has RPS logic and talleis up the score of each player
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let computerScore = 0;
let humanScore = 0;
let humanChoice ;
let computerChoice ;


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

function getHumanChoice () {
    humanChoice = prompt('Please choose rock, paper, or scissors').toLowerCase();
    console.log('You chose: ', humanChoice);
    return humanChoice;
}


//Take two inputs, Human and comptuer, and compare the two to add a point
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log ('Its a draw');
    } else if (humanChoice  == rock && computerChoice == scissors) {
        console.log('You win, rock beats scissors!');
        return humanScore ++;
    } else if (humanChoice == paper && computerChoice == rock) {
        console.log('You win, paper beats scissors!')
        return humanScore ++;
    } else if (humanChoice == scissors && computerChoice == paper) {
        console.log ('You win, scissors beats paper!');
        return humanScore ++;
    } else {
        console.log ('Computer wins, ' + computerChoice + ' beats ' + humanChoice)
        computerScore ++;
    }
}


function playGame (){
    for (let round = 1; round <= 5; round++) {
        console.log('Round: ' + round);
        getHumanChoice();
        getComputerChoice();
        console.log('The computer chose: ', computerChoice + '');
        playRound(humanChoice,computerChoice);
        console.log('You have: ' + humanScore + ' points');
        console.log('Computer has: ' + computerScore + ' points');
        if (round == 5) {
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

playGame();