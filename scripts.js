function startCrossword() {
    // Displays the crossword grid when the button is clicked
    document.getElementById('game-area').innerHTML = `
        <h2>Mini Crossword Puzzle</h2>
        <table id="crossword-table">
            <tr>
                <td><input type="text" maxlength="1" id="cell-1"></td>
                <td><input type="text" maxlength="1" id="cell-2"></td>
                <td><input type="text" maxlength="1" id="cell-3"></td>
            </tr>
            <tr>
                <td><input type="text" maxlength="1" id="cell-4"></td>
                <td><input type="text" maxlength="1" id="cell-5"></td>
                <td><input type="text" maxlength="1" id="cell-6"></td>
            </tr>
            <tr>
                <td><input type="text" maxlength="1" id="cell-7"></td>
                <td><input type="text" maxlength="1" id="cell-8"></td>
                <td><input type="text" maxlength="1" id="cell-9"></td>
            </tr>
        </table>
        <button onclick="checkCrossword()">Submit</button>
        <p id="crossword-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

function checkCrossword() {
    const answers = ['c', 'a', 't', 'd', 'o', 'g', 'r', 'a', 't'];
    let isCorrect = true;

    answers.forEach((answer, index) => {
        const userAnswer = document.getElementById(`cell-${index + 1}`).value.toLowerCase();
        if (userAnswer !== answer) {
            isCorrect = false;
        }
    });

    const feedback = document.getElementById('crossword-feedback');
    if (isCorrect) {
        feedback.textContent = 'Congratulations! You completed the crossword correctly!';
    } else {
        feedback.textContent = 'Some answers are incorrect. Please try again.';
    }
}


function startRiddle() {
    const riddles = [
        { question: "What has keys but can’t open locks?", answer: "piano" },
        { question: "What comes down but never goes up?", answer: "rain" },
        { question: "I speak without a mouth and hear without ears. What am I?", answer: "echo" }
    ];
    const randomRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    
    document.getElementById('game-area').innerHTML = `
        <h2>Daily Riddle</h2>
        <p>${randomRiddle.question}</p>
        <input type="text" id="riddle-answer" placeholder="Your answer">
        <button onclick="checkRiddleAnswer('${randomRiddle.answer}')">Submit</button>
        <p id="riddle-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

function checkRiddleAnswer(correctAnswer) {
    const userAnswer = document.getElementById('riddle-answer').value.toLowerCase();
    const feedback = document.getElementById('riddle-feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! You solved the riddle!';
    } else {
        feedback.textContent = 'Incorrect answer. Try again!';
    }
}


function startGuessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('game-area').innerHTML = `
        <h2>Guess the Number</h2>
        <p>I'm thinking of a number between 1 and 100. Can you guess what it is?</p>
        <input type="number" id="guess-input" placeholder="Enter your guess">
        <button onclick="checkGuess(${randomNumber})">Submit</button>
        <p id="guess-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

function checkGuess(correctNumber) {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('guess-feedback');
    if (userGuess === correctNumber) {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
    } else if (userGuess < correctNumber) {
        feedback.textContent = 'Too low! Try again.';
    } else {
        feedback.textContent = 'Too high! Try again.';
    }
}

function startWordSearch() {
    // Simple word search example (no grid; user searches for a word in a sentence)
    document.getElementById('game-area').innerHTML = `
        <h2>Word Search</h2>
        <p>Find the word "sun" in the following text:</p>
        <p>"The quick brown fox jumps over the lazy dog on a sunny day."</p>
        <input type="text" id="word-search-input" placeholder="Enter the word you found">
        <button onclick="checkWordSearch()">Submit</button>
        <p id="word-search-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

function checkWordSearch() {
    const userAnswer = document.getElementById('word-search-input').value.toLowerCase();
    const feedback = document.getElementById('word-search-feedback');
    if (userAnswer === 'sun') {
        feedback.textContent = 'Correct! You found the word!';
    } else {
        feedback.textContent = 'Incorrect, please try again!';
    }
}
function startRockPaperScissors() {
    document.getElementById('game-area').innerHTML = `
        <h2>Rock, Paper, Scissors</h2>
        <p>Choose your move:</p>
        <button onclick="playRPS('rock')">Rock</button>
        <button onclick="playRPS('paper')">Paper</button>
        <button onclick="playRPS('scissors')">Scissors</button>
        <p id="rps-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

function playRPS(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    document.getElementById('rps-feedback').textContent = `Computer chose ${computerChoice}. ${result}`;
}
function startTicTacToe() {
    document.getElementById('game-area').innerHTML = `
        <h2>Tic-Tac-Toe</h2>
        <table id="tic-tac-toe-board">
            <tr>
                <td onclick="makeMove(0, 0)"></td>
                <td onclick="makeMove(0, 1)"></td>
                <td onclick="makeMove(0, 2)"></td>
            </tr>
            <tr>
                <td onclick="makeMove(1, 0)"></td>
                <td onclick="makeMove(1, 1)"></td>
                <td onclick="makeMove(1, 2)"></td>
            </tr>
            <tr>
                <td onclick="makeMove(2, 0)"></td>
                <td onclick="makeMove(2, 1)"></td>
                <td onclick="makeMove(2, 2)"></td>
            </tr>
        </table>
        <p id="tic-tac-toe-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

let currentPlayer = 'X';
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('tic-tac-toe-board').rows[row].cells[col].textContent = currentPlayer;
        if (checkWinner()) {
            document.getElementById('tic-tac-toe-feedback').textContent = `${currentPlayer} wins!`;
            return;
        }
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        // Rows
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columns
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonals
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a[0]][a[1]] !== '' &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]]) {
            return true;
        }
    }
    return false;
}
function startMemoryGame() {
    const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'];
    cards.sort(() => 0.5 - Math.random()); // Shuffle cards

    let cardHTML = cards.map((card, index) => `
        <div class="card" onclick="flipCard(${index})" data-card="${card}">
            ?
        </div>
    `).join('');

    document.getElementById('game-area').innerHTML = `
        <h2>Memory Game</h2>
        <div class="memory-board">${cardHTML}</div>
        <p id="memory-feedback"></p>
    `;
    document.getElementById('game-area').style.display = 'block';
}

let firstCard = null;
let secondCard = null;
const cardElements = [];

function flipCard(index) {
    const cardElement = document.querySelectorAll('.card')[index];
    const cardValue = cardElement.getAttribute('data-card');

    if (firstCard === null) {
        firstCard = { element: cardElement, value: cardValue };
        cardElement.textContent = cardValue;
    } else if (secondCard === null) {
        secondCard = { element: cardElement, value: cardValue };
        cardElement.textContent = cardValue;

        if (firstCard.value === secondCard.value) {
            firstCard = null;
            secondCard = null;
        } else {
            setTimeout(() => {
                firstCard.element.textContent = '?';
                secondCard.element.textContent = '?';
                firstCard = null;
                secondCard = null;
            }, 1000);
        }
    }
}


