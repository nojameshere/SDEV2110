const form = document.querySelector('#guessForm');
let answer = Math.floor(Math.random() * 100 + 1);
const body = document.querySelector('body');
let guessAmount = 0;
let guesses = [];
let resetButton = null;
//pushes previous guesses to the document in the form of a string
function previousGuessPush() {
    previousGuess.textContent = 'Previous Guesses:  ' + guesses.join('  ');
}
//Creates a button as a child element of the body to act as a reset button to call resetGame.
function createReset() {
    resetButton = document.createElement('button');
    body.appendChild(resetButton);
    resetButton.setAttribute('class', 'resetButton');
    resetButton.textContent = 'Start a New Game';
    resetButton.addEventListener('click', () => {
        resetGame();
    });
}
//resets all values to default. removes all text added after guessing. removes button. 
function resetGame() {
    guessAmount = 0;
    guesses = [];
    answer = Math.floor(Math.random() * 100 + 1);
    result.textContent = null;
    previousGuess.textContent = null;
    result.setAttribute('class', 'null');
    resetButton.parentNode.removeChild(resetButton);
    guessField.removeAttribute('readonly');
    guessField.value = '';
}
//large conditional checks to see if entered guess is correct
function guessCheck(userGuess) {
    if (guessAmount === 10) {
        guessField.setAttribute('readonly', 'true');
        result.setAttribute('class', 'tooMany');
        result.textContent = '!!! Too many attempts, GAME OVER!!!';
        createReset();
        resetButton.focus();
    } else if (userGuess === answer) {
        result.setAttribute('class', 'justRight');
        result.textContent = 'Congratulations! You got it right!';
        guessField.setAttribute('readonly', 'true');
        createReset();
        resetButton.focus();
    } else {
        if (userGuess > answer) {
            result.setAttribute('class', 'tooBig');
            result.textContent = 'WRONG, that guess was too BIG';
            guesses.push(userGuess);
            guessAmount++;
            guessField.value = '';
            previousGuessPush();
        } else {
            result.setAttribute('class', 'tooSmall');
            result.textContent = 'WRONG, that guess was too small';
            guesses.push(userGuess);
            guessAmount++;
            guessField.value = '';
            previousGuessPush();
        }
    }
}
//listens to the user pressing all keys in the form element within the document.
form.addEventListener('keypress', e => {
    //will only activate if the 'Enter" key is the key pressed. ignores all other keys
    if (e.key === 'Enter') {
        guessCheck(parseInt(e.target.value));
    }
    //checks if the guessAmount is at 10 yet, if it is, it runs the guessCheck function again to 
    //update the document before a user can type again.
    if (guessAmount === 10) {
        guessCheck();
    };
});
//exists to have the form not refresh the page when pressing enter.
form.addEventListener('submit', e => {
    e.preventDefault();
});