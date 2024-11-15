'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

//initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const dice = math.trunc(Math.random() * 6) + 1;


  diceEl.classList.remove('hidden');
  dice.src = `dice-${dice}.png`;

  if(dice !== 1){
    currentScore += dice;

  }else{
    
  }


});
