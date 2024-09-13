let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

const submitGuessButton = document.getElementById('submitGuess');
const restartGameButton = document.getElementById('restartGame');
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const attempts = document.getElementById('attempts');
const heartsContainer = document.getElementById('hearts');

submitGuessButton.addEventListener('click', function() {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  attemptsLeft--;
  attempts.textContent = `Attempts remaining: ${attemptsLeft}`;

  if (userGuess === randomNumber) {
    feedback.textContent = `Congrats! You guessed the number: ${randomNumber}!`;
    showHearts();
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else {
    feedback.textContent = 'Too high! Try again.';
  }

  if (attemptsLeft === 0) {
    feedback.textContent = `Game over! The correct number was: ${randomNumber}.`;
    endGame();
  }
});

function endGame() {
  submitGuessButton.disabled = true;
  guessInput.disabled = true;
  restartGameButton.style.display = 'block';
}

restartGameButton.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  feedback.textContent = '';
  attempts.textContent = `Attempts remaining: 10`;
  submitGuessButton.disabled = false;
  guessInput.disabled = false;
  guessInput.value = '';
  restartGameButton.style.display = 'none';
  heartsContainer.innerHTML = '';
  heartsContainer.style.display = 'none';
});

function showHearts() {
  heartsContainer.style.display = 'block';
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.classList.add('heart');
    heartsContainer.appendChild(heart);
  }
}
