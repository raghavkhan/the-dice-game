const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');
const score0E = document.getElementById('score--0');
const score1E = document.getElementById('score--1');

const diceE = document.querySelector('.dice');
const btnRollE = document.querySelector('.btn--roll');
const btnHoldE = document.querySelector('.btn--hold');
const btnNewE = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing ;

const init = function() {
scores = [0,0];
currentScore = 0;
playing = true;
activePlayer = 0;

current0E.textcontent = 0;
current1E.textContent = 0;
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');
player0E.classList.add('player--active');
player1E.classList.remove('player--active');
player0E.classList.remove('player--winner');
player1E.classList.remove('player--winner');
};

init();

const switchPlayer = function() {
currentScore = 0;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
activePlayer = activePlayer === 0 ? 1 : 0 ;
player0E.classList.toggle('player--active');
player1E.classList.toggle('player--active');

};

const roll = function() {
if(playing) {    
const rand = Math.trunc(Math.random()*6)+1;
diceE.classList.remove('hidden');
diceE.src = `dice-${rand}.png`;
if (rand !== 1)
{
currentScore += rand;
//`current${activePlayer}E`.textContent = currentScore; 
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
}
else
switchPlayer();
}
};

const hold = function() {
if(playing) {
scores[activePlayer] += currentScore;
document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
if(scores[activePlayer] >= 100) {
playing = false;
diceE.classList.add('hidden');
document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}
else
switchPlayer();
}
};


btnRollE.addEventListener('click', roll);
btnHoldE.addEventListener('click', hold);
btnNewE.addEventListener('click', init);