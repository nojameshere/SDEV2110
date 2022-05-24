const randomButton = document.querySelector('#randomBtn');
const userButton = document.querySelector('#userBtn');
const userInput = document.querySelector('#userInput')
const body = document.querySelector('body');
const hex = document.querySelector('.hex');
let hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let colors = []
//Gets a random number and pulls number or letter from array and adds it to a new array
//function returns the new array as a string
function randomHex (){
    let randomArray = []
    let hexCounter = 0
    while(hexCounter < 6){
        randomArray.push(hexNumbers[Math.floor(Math.random()*hexNumbers.length)]);
        hexCounter++;
        console.log(hexCounter);
        console.log(randomArray);
    }
    let hexColor = ('#' + randomArray.join(''));
    return hexColor;
}
function userColor () {
    let colors = userInput.value;
    console.log(colors);
    colors = colors.toUpperCase();
    console.log(colors);
    body.style.backgroundColor = colors;
    hex.innerHTML = '#' + colors;
}

randomButton.addEventListener('click', () => {
    colors = randomHex();
    body.style.backgroundColor = colors;
    console.log(colors);
    hex.innerHTML = '#' + colors;
})


userButton.addEventListener('click', e => {
    userColor();
})

userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        userColor();
    }
});