'use strict';

//selecting elements
const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector(".btn--hold");


//initial 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  
    }

//rolling functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    
    //1.generating random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2.display 
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3.check if it 1 ;true switch otherwise add to current
    if (dice !== 1) {
      //add dice to current score
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  

    } else {
      //switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    
    //1. add currentScore to scores
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2. if scores >=100 
    if (scores[activePlayer] >= 20) {
      //finish
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
    //else
    else{
     //switch the next player
    switchPlayer();
    }
   
  }
})

