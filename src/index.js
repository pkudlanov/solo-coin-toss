import headsTailsCalculator from './heads-tails-function.js';
import betJustifier from './bet-justifier.js';

const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');
const coinFace = document.getElementById('coin-face');
const headsChoice = document.getElementById('heads-choice');
const resultMessage = document.getElementById('message');
const newButton = document.getElementById('coin-container');
const betInput = document.getElementById('bet').value;
const moneyHas.textContent = document.getElementById('money-has');

var losses = 0;
var wins = 0;

newButton.addEventListener('click', () => {
    const randomNumber = Math.random();

    const computerChoice = headsTailsCalculator(randomNumber);

    coinFace.src = '../assets/' + computerChoice + '.png';

    let ourChoice;
    if(headsChoice.checked){
        ourChoice = 'heads';
    }else{
        ourChoice = 'tails';
    }

    const winCondition = ourChoice === computerChoice;
    
    if(winCondition){
        resultMessage.textContent = 'You won!';
    }else{
        resultMessage.textContent = 'You lost!';
    }

    if(winCondition){
        wins++;
        winsCount.textContent = 'Wins: ' + wins;
    }else{
        losses++;
        lossesCount.textContent = 'Losses: ' + losses;
    }

    let moneyInBank = moneyHas.nodeValue
    if(betInput > moneyInBank){
        window.alert('You cannot bet more money they what you have. Make a smaller bet.');
    }else{
        var myMessage = betJustifier(betInput, moneyInBank, winCondition);
    }

    moneyHas.textContent = '$' + myMessage;
});