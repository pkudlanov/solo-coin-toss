import headsTailsCalculator from './heads-tails-function.js';
import betJustifier from './bet-justifier.js';

const winsCount = document.getElementById('wins');
const lossesCount = document.getElementById('losses');
const coinFace = document.getElementById('coin-face');
const headsChoice = document.getElementById('heads-choice');
const resultMessage = document.getElementById('message');
const newButton = document.getElementById('coin-container');
const betInput = document.getElementById('bet');
let moneyHas = document.getElementById('money-has');

let losses = 0;
let wins = 0;
let moneyInBank = 1000;

newButton.addEventListener('click', () => {
    const randomNumber = Math.random();

    const computerChoice = headsTailsCalculator(randomNumber);

    coinFace.src = '../assets/' + computerChoice + '.png';

    let ourChoice;
    if(headsChoice.checked){
        ourChoice = 'heads';
    } else {
        ourChoice = 'tails';
    }

    const winCondition = ourChoice === computerChoice;
    
    if(winCondition){
        resultMessage.textContent = 'You won!';
    } else {
        resultMessage.textContent = 'You lost!';
    }

    if(winCondition){
        wins++;
        winsCount.textContent = 'Wins: ' + wins;
    } else {
        losses++;
        lossesCount.textContent = 'Losses: ' + losses;
    }

    if(betInput.value > moneyInBank){
        window.alert('You cannot bet more money than what you have. Make a smaller bet.');
    }else{
        var myMessage = betJustifier(betInput.value, moneyInBank, winCondition);
        moneyHas.textContent = '$' + myMessage;
        moneyInBank = myMessage;
    }

    if (myMessage === 0){
        window.alert('You are out of money!');
        location.reload();
    }
});