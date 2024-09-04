document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('submit').addEventListener('click', checkInput);
document.getElementById('clear').addEventListener('click', clearInput);

let firstNumber = 0;
let secondNumber = 0;
let roundsCompleted = 0; // Track the number of successful rounds
const totalRounds = 3;    // Total rounds needed to win
let timeRemaining = 20;   // 20-second time limit
let timerInterval;        // To store the timer interval

function startGame() {
    resetTimer();         // Reset the timer for a new game
    startTimer();         // Start the timer
    startRound();         // Start the first round
}

function startRound() {
    firstNumber = generateRandomNumber();
    secondNumber = generateRandomNumber();
    displayNumbers(firstNumber, secondNumber);
    setTimeout(hideNumbers, 2000); // Show the numbers for 2 seconds
}

function generateRandomNumber() {
    return Math.floor(100 + Math.random() * 900); // Generate a 3-digit number
}

function displayNumbers(num1, num2) {
    document.getElementById('number-display').innerText = `${num1} + ${num2}`;
}

function hideNumbers() {
    document.getElementById('number-display').innerText = '********';
}

function checkInput() {
    const userInput = parseInt(document.getElementById('user-input').value, 10);
    const correctAnswer = firstNumber + secondNumber;

    if (userInput === correctAnswer) {
        roundsCompleted++;
        if (roundsCompleted === totalRounds) {
            showPopup('Congratulations! You completed all rounds successfully!');
            setTimeout(() => {
                window.location.href = 'goodending.html';
            }, 2000);
        } else {
            showPopup('Correct! Well done! Get ready for the next round.');
            startRound(); // Start the next round
        }
    } else {
        showPopup('Incorrect! The correct answer was ' + correctAnswer);
        timeRemaining -= 3; // Deduct 3 seconds for incorrect answer
        if (timeRemaining <= 0) {
            showPopup('Time is up! Game over.');
            setTimeout(() => {
                window.location.href = 'parallax.html';
            }, 2000);
        } else {
            updateTimerDisplay();
            startRound(); // Start the next round
        }
    }
    clearInput();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showPopup('Time is up! Game over.');
            setTimeout(() => {
                window.location.href = 'parallax.html';
            }, 2000);
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer-display').innerText = `Time Left: ${timeRemaining}s`;
}

function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 30;
    updateTimerDisplay();
}

function resetGame() {
    roundsCompleted = 0;
    resetTimer();
    document.getElementById('number-display').innerText = '';
}

function clearInput() {
    document.getElementById('user-input').value = '';
}

document.querySelectorAll('.key').forEach(button => {
    button.addEventListener('click', () => {
        const userInput = document.getElementById('user-input');
        userInput.value += button.innerText;
    });
});

function showPopup(message) {
    const popup = document.getElementById('popup-message');
    popup.innerText = message;
    popup.style.display = 'block';
    
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000); // Display the message for 2 seconds
}