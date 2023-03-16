'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const prvi = document.querySelector('.prvi');
const drugi = document.querySelector('.drugi');
const diceEl = document.querySelector('#dice');
const btnNew = document.querySelector('#btn--new');
const btnRoll = document.querySelector('#btn--roll');
const btnHold = document.querySelector('#btn--hold');

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
btnRoll.addEventListener('click', function (e) {
  e.preventDefault();
  let rollDice = Math.trunc(Math.random() * 6) + 1;
  // current0El=0

  //Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollDice}.png`;
  console.log(rollDice);

  //Check for rolled 1
  if (rollDice !== 1) {
    currentScore += rollDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //Switch to next player
    switchNext();
  }
});

btnHold.addEventListener('click', function (e) {
  e.preventDefault();
  //Add current score to active player score
  scores[activePlayer] += currentScore;
  if (scores[activePlayer] < 10) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    switchNext();

    //Check if players score >=100
    console.log('Scores: ' + scores);
  } else {
    console.log('Winner');
    document
      .getElementById(`player--${activePlayer}`)
      .classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    diceEl.classList.add('hidden');
  }
});

function switchNext() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
btnNew.addEventListener('click', function (e) {
  e.preventDefault();
  btnRoll.disabled = false;
  btnHold.disabled = false;
  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  document
    .getElementById(`player--${activePlayer}`)
    .classList.remove('player--winner');
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${rollDice}.png`;
  scores = [0, 0];
  currentScore = 0;
});
// const prviIgrac = prompt('Upišite Prvog Igrača', 'Prvi');
// const drugiIgrac = prompt('Upišite Prvog Igrača', 'Drugi');

// prvi.textContent = prviIgrac;
// drugi.textContent = drugiIgrac;
