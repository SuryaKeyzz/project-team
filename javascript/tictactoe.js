const ContainerEl = document.querySelector(".container");
let playerTxt = document.querySelector(".message");
let resultMessage = document.getElementById("result-message");
let restartBtn = document.getElementById("restartbtn");
let boxes = document.querySelectorAll(".box");

const O_TXT = "O";
const X_TXT = "X";

// Scoreboard variables
let playerScore = 0;
let botScore = 0;
let playerScoreEl = document.getElementById("player-score");
let botScoreEl = document.getElementById("bot-score");

let currentPlayer = O_TXT;
let spaces = Array(9).fill(null);

// Start game
const startGame = () => {
    boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

// Box clicked by player
function boxClicked(e) {
    const id = e.target.id;

    if (!spaces[id] && currentPlayer === O_TXT) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        // Check for a winner or a tie
        if (checkGameOver()) return;

        currentPlayer = X_TXT; // Switch to bot's turn
        setTimeout(botMove, 1000); // 1 second delay
    }
}

// Bot's move
function botMove() {
    let availableSpaces = spaces
        .map((space, index) => (space === null ? index : null))
        .filter((value) => value !== null);

    if (availableSpaces.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSpaces.length);
        const botMove = availableSpaces[randomIndex];

        spaces[botMove] = X_TXT;
        boxes[botMove].innerText = X_TXT;

        // Check for a winner or a tie
        if (checkGameOver()) return;

        currentPlayer = O_TXT; // Switch back to the human player's turn
    }
}

// Winning combinations
const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Check for a winner or tie
function checkGameOver() {
    let winner = false;

    for (const condition of winningCombination) {
        let [a, b, c] = condition;

        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
            winner = true;
            // Highlight the winning boxes
            [a, b, c].forEach(index => boxes[index].style.backgroundColor = "#379fde");

            if (currentPlayer === O_TXT) {
                playerTxt.textContent = `Congratulations Player ${currentPlayer}`;
                resultMessage.textContent = "You've Won the Game!";
                playerScore++;
                playerScoreEl.textContent = playerScore;
            } else {
                playerTxt.textContent = `Congratulations Player ${currentPlayer}`;
                resultMessage.textContent = "You've Won the Game!";
                botScore++;
                botScoreEl.textContent = botScore;
            }

            ContainerEl.classList.add("success");
            return true;
        }
    }

    // Check for tie after ensuring no winner
    if (!winner && spaces.every((space) => space !== null)) {
        playerTxt.textContent = "Tie game!";
        resultMessage.textContent = "It's a tie!";
        ContainerEl.classList.add("tie");
        return true;
    }

    return false;
}

// Reset game
restartBtn.addEventListener("click", restartGame);

function restartGame() {
    spaces.fill(null);

    boxes.forEach((box) => {
        box.textContent = "";
        box.style.backgroundColor = "";
    });

    playerTxt.textContent = "Tic Tac Toe";
    resultMessage.textContent = "You've Won the Game!";
    currentPlayer = O_TXT;
    ContainerEl.classList.remove("success", "tie");
}

startGame();
