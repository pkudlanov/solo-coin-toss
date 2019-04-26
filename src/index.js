//import function
import headsTailsCalculator from './heads-tails-function.js';

//reference DOM elements
const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');
const coinFace = document.getElementById('coin-face');
const headsChoice = document.getElementById('heads-choice');
const resultMessage = document.getElementById('message');
const newButton = document.getElementById('coin-container');

//initialize some stuff
var losses = 0;
var wins = 0;

//call event listener
newButton.addEventListener('click', () => {
    //generate random number
    const randomNumber = Math.random();

    //pass random number to function
    const computerChoice = headsTailsCalculator(randomNumber);

    //set image src based on result
    coinFace.src = '../assets/' + computerChoice + '.png';

    //determine our choice
    let ourChoice;
    if(headsChoice.checked){
        ourChoice = 'heads';
    }else{
        ourChoice = 'tails';
    }

    //show lost won message
    const winCondition = ourChoice === computerChoice;
    
    if(winCondition){
        resultMessage.textContent = 'You won!';
    }else{
        resultMessage.textContent = 'You lost!';
    }

    //counter
    if(winCondition){
        wins++;
        winsCount.textContent = 'Wins: ' + wins;
    }else{
        losses++;
        lossesCount.textContent = 'Losses: ' + losses;
    }
});