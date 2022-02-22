'use strict';

// DOM manipulation
const message = document.querySelector(".message");
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const guess = document.querySelector('.guess');
const checkbtn = document.querySelector('.check');
const body = document.querySelector('body');
const againbtn = document.querySelector('.again');
// const highscore = document.querySelector('.highscore');


// change textContent
// message.textContent = "Correct Number!"
// number.textContent = 13
// score.textContent = 10


// secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);
// score
let minusScore = 20;
let highscore = 0;


// button eventlistner on click
checkbtn.addEventListener('click', function (e) {
    const guessValue = Number(guess.value);

    if (!guessValue) {
        message.textContent = "🛑 No number!";
    } else if (guessValue <= 0 || guessValue > 20) {
        message.textContent = "Number out of range!";
    }
    // player's win
    else if (guessValue === secretNumber) {

        message.textContent = "🎉 Correct Number!"
        number.textContent = secretNumber;
        // change bg color
        body.style.backgroundColor = "#60b347";
        // change number width
        number.style.width = "25rem";

        if (minusScore > highscore) {
            highscore = minusScore;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    // Guess is too High
    else if (guessValue > secretNumber) {
        if (minusScore > 1) {
            message.textContent = "📈 Too High!"
            minusScore--;
            score.textContent = minusScore;

            body.style.backgroundColor = "#222";
            number.style.width = "15rem";
            number.textContent = "?";
        } else {
            message.textContent = "💥 You Lost the game!";
            score.textContent = 0;
        }

    }
    // Guess is too Low
    else if (guessValue < secretNumber) {
        if (minusScore > 1) {
            message.textContent = "📉 Too Low!"
            minusScore--;
            score.textContent = minusScore;

            body.style.backgroundColor = "#222";
            number.style.width = "15rem";
            number.textContent = "?";
        } else {
            message.textContent = "💥 You Lost the game!";
            score.textContent = 0;
        }

    }
})


// play again event listner

againbtn.addEventListener('click', function () {
    // reset everything
    message.textContent = "Start guessing..."
    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
    minusScore = 20;
    score.textContent = 20;
    number.textContent = "?";
    guess.value = "";
    console.log(highscore, initialHighScore)
})


























