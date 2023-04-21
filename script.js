'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').
*/

////////////////////////////////////////////////////////
// DEVELOPING THE APPLICATION

let secretNumber = Math.round(Math.random() * 20); // Secret Number generator (between 1-20)
let score = 20; // Setting up for decreasing the score value with each wrong guess
let highscore = 0;

console.log(secretNumber);

// Setting up the Again! button to reset game
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // resets Score
  secretNumber = Math.round(Math.random() * 20); // Generate new secret number
  console.log(secretNumber); // Peek at new Secret Number 😉
  document.querySelector('.message').textContent = 'Start guessing...'; // reset message
  document.querySelector('.number').textContent = '?'; // reHide secret number
  document.querySelector('.score').textContent = score; // resets Score: counter display
  document.querySelector('.guess').value = ''; // Clears the input text box
  document.querySelector('body').style.backgroundColor = '#222'; // restores original background color
  document.querySelector('.number').style.width = '15rem'; // original "?" text size
});

// listening to the 'Check!' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Setting up the logic

  //   When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥇 CORRECT! 🥇';
    document.querySelector('.number').textContent = secretNumber; // Replacing "?" with Secret Number value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High 🔊';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 YOU LOSE 🔥';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low 🔉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 YOU LOSE 🔥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
