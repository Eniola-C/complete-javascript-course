'use strict';

/*console.log(document.querySelector('.message').textContent);
//Set the content of the element
document.querySelector('.message').textContent = 'Correct Number!🎉';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
//for input field to get the actual value we use the value property
document.querySelector('.guess').value = 33;
console.log(document.querySelector('.guess').value);*/
//An event is something that happens on the page e.g a mouse click or a mouse moving or key press etc. With an event listener we can wait for certain event to happen and then react to it.
//addeventlistener is a method. First pass in the type of event
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😞';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 😞';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

//restoring all the initial conditions
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#a52a2a';
  document.querySelector('.number').style.width = '15rem';
});
