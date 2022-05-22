let password = [];
//Include any combination of uppercase, lowercase, numbers, and certain special symbols.
//Symbols to include: ! @ # $ -
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbols = ['!', '@', '#', '$', '-'];
//Random number generator 
function getRandomInt(min, max) {
    minCeil = Math.ceil(min);
    maxCeil = Math.floor(max);
    return Math.floor(Math.random() * (maxCeil - minCeil) + minCeil);
}
//This function gets a random character from the above arrays when passed the name of the array
function pullCharacter(array){
    max = array.length;
    return array[getRandomInt(0, max)];
}
//loop iterates for however many times the passwordLength is on line 22
for (let passwordLength = 18; passwordLength > 0; passwordLength --){
    let arrayNumber = getRandomInt(0,4);
    switch (arrayNumber){
        case 0:
            char = pullCharacter(numbers);
            password.push(char);
        break;
        case 1:
            char = pullCharacter(lowercase);
            password.push(char);
        break;
        case 2:
            char = pullCharacter(uppercase);
            password.push(char);
        break;
        case 3:
            char = pullCharacter(symbols);
            password.push(char);
        break;    
    }
}
console.log('New password = ' + password.join(''));