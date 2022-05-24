const scores = [5,9,10.1,12,7,8.6,1,4];
const scores2 = [1,2,3,4,5,6,7,8,9,2385]
const runScores = (numbers) => {
    console.log(numbers);
    let count = 0;
    let total = 0;
    numbers.forEach(num => {
        total = total + num;
        count ++
    })
    let avg = total / count;
    console.log(`There are ${count} numbers which total ${total}`);
    console.log(`The avg of those numbers is ${avg}`);
}
runScores(scores);
runScores(scores2);
const session1 = [
    'James Sales', 'Martha Stewart', 'Snoop Dogg', 'Buffalo Bill', 'Whisky Pete', 
    'Clint Betts', 'Josh Beitler', 'Tom Jerry', 'Anakin Skywalker', 'Alberto Einstein'
];
const session2 = [
    'Martha Stewart', 'Snoop Dogg', 'Jack Harkness', 'Hera Syndulla', 'Caleb Dume',
    'Minnie Mouse', 'Jack Sparrow'
];
console.log('Session Attendees');
console.log(`Number of attendees at session 1: ${session1.length}`);
console.log(`Number of attendees at session 2: ${session2.length}`);
console.log('Combine sessions');
let names = [...session1, ...session2];
console.log(names);
console.log(`Number of attendees at both sessions: ${names.length}`);
names.forEach(name => console.log(name));
console.log('Remove duplicate attendees');
const filteredNames = [...new Set(names)];
console.log(filteredNames);
console.log(`Number of individual attendees: ${filteredNames.length}`);
filteredNames.forEach(name => console.log(name));