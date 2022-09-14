'use strict';

// document.querySelector('.number').textContent = 12
// document.querySelector('.score').textContent = 10
// document.querySelector('.guess').value = 22
// console.log(document.querySelector('.guess').value );


let secretNumber = Math.trunc(Math.random()*20)+1;

console.log(secretNumber);

document.querySelector('.number').textContent = '?';

let score = 20;
let highScore = 0;

const check = document.querySelector('.check');
const again= document.querySelector('.again')

let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


check.addEventListener('click', () => {
    // console.log('clicked');

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess){
        displayMessage('⛔ No number !');
    }
    else if (guess === secretNumber){
        document.querySelector('.message').textContent ='Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else if (guess < secretNumber){
        if (score > 1){
            displayMessage('📉 Too low !');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('😂 You lose !');
            document.querySelector('.score').textContent = 0
        }
        
    } 
    else if (guess > secretNumber){
        if (score > 1){
            displayMessage('📈 Too high !');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('😂 You lose !');
            document.querySelector('.score').textContent = 0;
        }
    }
});



again.addEventListener('click', ()=>{
    document.querySelector('body').style.backgroundColor = '#222';  
    document.querySelector('.number').style.width = '15rem';  
    // document.querySelector('.message').textContent = 'Start guessing';
    displayMessage('🌚 Start guessing');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random()*20)+1;
});