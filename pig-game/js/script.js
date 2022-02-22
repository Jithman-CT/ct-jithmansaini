'use strict';


// dom selection for all element
// const playerSection = document.querySelector('.player');
const player0Section = document.querySelector('.player--0');
const player1Section = document.querySelector('.player--1');

const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');

const totalScorePlayer0 = document.querySelector('#score--0');
const totalScorePlayer1 = document.querySelector('#score--1');

const currentScorePlayer0 = document.querySelector('#current--0');
const currentScorePlayer1 = document.querySelector('#current--1');

// dice image
const diceImage = document.querySelector('.dice');


// all btn

const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');


// Genrate random number btw 1 to 6
let randomNum = 0;
let player0CurrentScore = 0;
let player1CurrentScore = 0;
let totalPlayer0Score = 0;
let totalPlayer1Score = 0;


const randomNumberBtwOneToSix = () => {
    return randomNum = Math.trunc(Math.random() * 6) + 1;
}

diceImage.style.display = 'none'
// on ROLL dice generate random numbers

rollDiceBtn.addEventListener('click', function () {
    totalScorePlayer0.textContent = totalPlayer0Score;
    totalScorePlayer1.textContent = totalPlayer1Score;
    randomNumberBtwOneToSix();
    diceImage.style.display = 'block'
    diceImage.src = `dice-${randomNum}.png`;
    console.log(randomNum);

    if (randomNum === 1) {
        onClickMoveActiveClassFromOneSectionToAnother();
        player0CurrentScore = 0;
        player1CurrentScore = 0;
        currentScorePlayer0.textContent = player0CurrentScore;
        currentScorePlayer1.textContent = player1CurrentScore;
    } else if (randomNum !== 1 && player0Section.classList.contains('player--active')) {
        currentScorePlayer0.textContent = player0CurrentScore += randomNum;


    } else if (randomNum !== 1 && player1Section.classList.contains('player--active')) {
        currentScorePlayer1.textContent = player1CurrentScore += randomNum;

    }

});





// remove and add active class from player 0 and 1 

const removeActiveClassFromPlayer0 = (className) => {
    player0Section.classList.remove(className);
}
const addActiveClassFromPlayer0 = (className) => {
    player0Section.classList.add(className);
}

const removeActiveClassFromPlayer1 = (className) => {
    player1Section.classList.remove(className);
}
const addActiveClassFromPlayer1 = (className) => {
    player1Section.classList.add(className);
}
// function to toggle active class from one section to another

const onClickMoveActiveClassFromOneSectionToAnother = () => {
    if (player0Section.classList.contains('player--active')) {
        removeActiveClassFromPlayer0('player--active')
        addActiveClassFromPlayer1('player--active');
    } else if (player1Section.classList.contains('player--active')) {
        removeActiveClassFromPlayer1('player--active');
        addActiveClassFromPlayer0('player--active');
    }
}
// switch player on clicking HOLD btn
holdBtn.addEventListener('click', function () {
    onClickMoveActiveClassFromOneSectionToAnother();
})