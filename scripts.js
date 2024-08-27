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

