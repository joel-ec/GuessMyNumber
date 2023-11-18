'use strict';
// "use strict";

console.log(document.querySelector('.message').textContent);

//practice
// const learn = {
//     i : 1,
//     age: 10,
//     month: "may",
//     Nationality:"Nigerian",
//     hold: function(i){
//         this.new_value = this.i *i;
//         return this;
//                  },
//                 };

// console.log(learn.hold(3).new_value);

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// const hold = '.number';
// document.querySelector(hold).textContent = number;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === number) {
    if (score > 0) {
      console.log(score);
      document.querySelector('.message').textContent = 'Correct Number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = number;
      //displayMessage('.number',number);

      document.querySelector('.number').style.width = '30rem';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      console.log('You have lost the game oga');
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = ' You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start Guessing..';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
