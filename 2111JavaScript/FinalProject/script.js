//tab controller
const tabs = document.querySelectorAll('li');
const container = document.querySelector('.tabs');
function toggleTabs(e){
    tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
}

function toggleContent(e){
    container.querySelectorAll('.content').forEach(item => {
        item.classList.remove('active');
    });
    const selector = e.target.getAttribute('data-target');
    const content = document.querySelector(selector);
    content.classList.add('active');
    if(selector === '#coinToss'){
        coinTossInitialize();
    }else if(selector === '#guessingGame'){
        resetGame();
    }else if(selector === '#codeCracker'){
        crackerInit();
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        toggleTabs(e);
        toggleContent(e);
    })
})

function rng(from, to){
    minCeil = Math.ceil(from);
    maxCeil = Math.floor(to);
    let number = Math.floor(Math.random() * (maxCeil - minCeil) + minCeil);
    return number
}
function capFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//coinToss Code Start
const predictionButton = document.querySelector('.coinPrediction');
const tossResults = document.querySelector('.tossResults');
const coinIMG = document.querySelector('.coinToss img');

let coinWin = 0;
let coinLoss = 0;

//call when coinToss tab is selected
function coinTossInitialize(){
    coinWin = 0;
    coinLoss = 0;
    tossResults.innerHTML = '';
    coinIMG.setAttribute('src', 'CoinTossImages/both.jpg')
}
//event listener for button press
predictionButton.addEventListener('click', e => {
    let prediction = e.target.classList.value;
    let coinSrc = `CoinTossImages/${prediction}.jpg`
    coinIMG.setAttribute('src', coinSrc)
    let toss = rng(0,2);
    if(toss === 0){
        toss = 'heads';
    }else{
        toss = 'tails'};
    if(toss === prediction){
        coinWin++;
        //change innerHTML of div selected for tossResults
        tossResults.innerHTML = `
            <p>You chose ${capFirst(prediction)}</p>
            <p>The toss is ${capFirst(toss)}</p>
            <p>You chose wisely!</p>
            <br>
            <p>Wins = ${coinWin}   Losses = ${coinLoss}</p>
        `
    }else{
        coinLoss++
        tossResults.innerHTML = `
        <p>You chose ${capFirst(prediction)}</p>
        <p>The toss is ${capFirst(toss)}</p>
        <p>Your choice was incorrect</p>
        <br>
        <p>Wins = ${coinWin}   Losses = ${coinLoss}</p>
    `
    }
})
//coinToss Code End

//Guessing Game Code Start

const guessForm = document.querySelector('#guessForm');
let answer = rng(1,100);
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
guessForm.addEventListener('keypress', e => {
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
guessForm.addEventListener('submit', e => {
    e.preventDefault();
});

//Guessing Game Code End

//Code Cracker Code Start
const crackGame = document.getElementById('guessCheck');
const gameArea = document.querySelector('.crackBox')
const guessReport = document.querySelector('.guess')
let guessCount = 0
let initalized = false
function crackerInit(){
    crackGame.innerHTML = 'Start';
    initalized = false;
    while(gameArea.firstChild){
        gameArea.removeChild(gameArea.firstChild);
    }
}
function codeInitializer(){
    while(gameArea.firstChild){
        gameArea.removeChild(gameArea.firstChild);
    }
    maker();
    guessAmount = 0
    guessReport.innerHTML = 'Crack the combination';
    crackGame.innerHTML = 'Check your guess';
    gameComplete = false;
    //change html to what it is at load
    // toggle game complete to false
    //change button to check guess
}
function maker() {
    for (let x = 0; x < 6; x++) {
        let el = document.createElement('input');
        el.setAttribute('type', 'number');
        el.max = 9;
        el.min = 0;
        el.size = 1;
        el.value = 0;
        el.style.width = '60px';
        
        el.correct = Math.floor(Math.random()*10);
        gameArea.appendChild(el)
    }
}

let gameComplete = false;

crackGame.addEventListener('click', e => {
    if(initalized === false){
        codeInitializer()
        initalized = true
    }else{
        let answerCheck = 0
        const inputs = gameArea.querySelectorAll('.crackbox input')
        if(gameArea.innerHTML === 'Start'){
            codeInitializer();
        }
        if(gameComplete === true){
            codeInitializer();
        }else{
        
            inputs.forEach(guess => {
                let key = guess.correct;
                let cGuess = guess.value;
                guess.removeAttribute('class');
                if(cGuess == key){
                    guess.classList.add('correct');
                    answerCheck++;
                }else if(cGuess > key){
                    guess.classList.add('high');
                }else{
                    guess.classList.add('low');
                }
            });
            guessAmount++
            guessReport.innerHTML = `Guesses ${guessAmount}`;

            if(answerCheck === 6){
                guessReport.innerHTML = `You cracked the code in ${guessAmount} guesses!`;
                crackGame.innerHTML = 'Restart Game';
                gameComplete = true;
            }
        }
    }
})

//Code Cracker Code End