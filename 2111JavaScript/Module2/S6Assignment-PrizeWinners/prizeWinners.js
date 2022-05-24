const winners = ['James Sales', 'Millie Melton', 'Billie Piper', 'Josh Beitler', 'Macho Man', 
                 'Clint Betts', 'Some Alien', 'A dude from California', 'Spider Man', 'Arnold Palmer'];
const prizes = ['50 Gallons of Crude Oil', '8 Hours of Good Sleep', 'a Used Computer Mouse', 
                'an All Expenses Paid Vacation to the CostCo in Brentwood CA', '"The Fish"™'];
const peopleList = document.querySelector('#peopleList');
const prizeList = document.querySelector('#prizeList');

function insertName(string){
    const LI = document.createElement('li');
    LI.textContent = string;
    peopleList.append(LI);
}

function insertPrizes(string){
    const LI = document.createElement('li');
    LI.textContent = string;
    prizeList.append(LI);
}

winners.forEach(insertName);
prizes.forEach(insertPrizes);

function getRand(array){
    rndMax = array;
    return Math.floor(Math.random() * rndMax);
}

winnings = () => {
    const peopleWinner = document.querySelector('#peopleWinner');
    peopleWinner.textContent = winners[getRand(winners.length)];
    const prizeWon = document.querySelector('#prizeWinner');
    prizeWon.textContent = peopleWinner.textContent + ' has won ' + prizes[getRand(prizes.length)];
}

winnings();
