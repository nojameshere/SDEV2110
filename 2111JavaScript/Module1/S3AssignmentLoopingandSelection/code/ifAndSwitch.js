console.log('If Structure');

const colors = ['blue', 'red', 'yellow'];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let color1 = colors[getRandomInt(0, 3)];
let color2 = colors[getRandomInt(0, 3)];

console.log('First color is ' + color1 + ', second color is ' + color2);

if (color1 == 'red' && color2 == 'blue' || color1 == 'blue' && color2 == 'red'){
    console.log('New color is purple');
} else if (color1 == 'blue' && color2 == 'yellow' || color1 == 'yellow' && color2 == 'blue'){
    console.log('New color is green');
} else if (color1 == 'yellow' && color2 == 'red'  || color1 == 'red' && color2 == 'yellow'){
    console.log('New color is orange');
} else {
    console.log('The color is sadly just ' + color1);
}

console.log('Switch Structure');

const conditions = ['ice', 'snow', 'rain', 'sun'];

let currentWeather = conditions[getRandomInt(0, 4)];
console.log('Weather is ' + currentWeather);

switch(currentWeather){
    case 'ice':
        console.log('Use studded tires and chains');
        break;
    case 'snow':
        console.log('Brush all snow off the care before driving');
        break;
    case 'rain':
        console.log('Turn on headlights and use wipers');
        break;
    case 'sun':
        console.log('Wear sunglasses');
        break;
}