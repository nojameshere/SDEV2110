const coders = [
    {coder: 'James', score: 8.3, speed: 29},
    {coder: 'Millie', score: 9.6, speed: 35},
    {coder: 'Tyson', score: 4.5, speed: 93},
    {coder: 'Ellanor', score: 2.1, speed: 47},
    {coder: 'Cory', score: 6.3, speed: 39},
    {coder: 'Josh', score: 9.5, speed: 71},
    {coder: 'Heather', score: 4.1, speed: 52},
    {coder: 'Sasha', score: 3.3, speed: 32},
    {coder: 'Edgar', score: 7.1, speed: 66},
    {coder: 'Mavis', score: 3.9, speed: 43},
];
//First part of console log.
console.log('Programming Contest Participants');
coders.forEach(coder => {
    console.log(`${coder.coder} scored a ${coder.score} in ${coder.speed} minutes`);
});
console.log('')//This is a line break for formatting

//<-----------------------------filter time----------------------------->
const bestFilter = coders.filter((coder) => {
    if(coder.score > 5 && coder.speed < 60){
        return coder;
    }
    //YAY IT WORKED: https://c.tenor.com/fJQ_h8L3ox0AAAAC/drake-lets-go.gif
});
const goodFilter = coders.filter((coder) => {
    if(coder.score > 5 || coder.speed < 60){
        return coder;
    }
});
//log the BEST coders
console.log('After Filtering for BEST, array is ' + bestFilter.length);
bestFilter.forEach(coder => {
    console.log(`${coder.coder} scored a ${coder.score} in ${coder.speed} minutes`);
});
console.log('')//This is a line break for formatting

//log the GOOD coders
console.log('After Filtering for GOOD, array is ' + goodFilter.length);
goodFilter.forEach(coder => {
    console.log(`${coder.coder} scored a ${coder.score} in ${coder.speed} minutes`);
});
console.log('')//This is a line break for formatting

//<-----------------------------sort time----------------------------->
//best by score
console.log('Programming Contest, BEST, sorted by score');
bestFilter.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if(b.score > a.score){
        return 1;
    } else {
        return 0;
    }
});
console.log(`Style Gold goes to ${bestFilter[0].coder}, score of ${bestFilter[0].score}`);
console.log(`Style Silver goes to ${bestFilter[1].coder}, score of ${bestFilter[1].score}`);
console.log(`Style Bronze goes to ${bestFilter[2].coder}, score of ${bestFilter[2].score}`);

//best by speed
console.log('Programming Contest, BEST, sorted by speed');
bestFilter.sort((a,b) => {
    if(a.speed > b.speed){
        return -1;
    } else if(b.speed > a.speed){
        return 1;
    } else {
        return 0;
    }
});
bestFilter.reverse()
console.log(`Speed Gold goes to ${bestFilter[0].coder}, speed of ${bestFilter[0].speed}`);
console.log(`Speed Silver goes to ${bestFilter[1].coder}, speed of ${bestFilter[1].speed}`);
console.log(`Speed Bronze goes to ${bestFilter[2].coder}, speed of ${bestFilter[2].speed}`);

console.log('')//This is a line break for formatting

//good by score
console.log('Programming Contest, GOOD, sorted by score');
goodFilter.sort((a,b) => {
    if(a.score > b.score){
        return -1;
    } else if(b.score > a.score){
        return 1;
    } else {
        return 0;
    }
});
console.log(`Style Gold goes to ${goodFilter[0].coder}, score of ${goodFilter[0].score}`);
console.log(`Style Silver goes to ${goodFilter[1].coder}, score of ${goodFilter[1].score}`);
console.log(`Style Bronze goes to ${goodFilter[2].coder}, score of ${goodFilter[2].score}`);

//good by speed
console.log('Programming Contest, GOOD, sorted by speed');
goodFilter.sort((a,b) => {
    if(a.speed > b.speed){
        return -1;
    } else if(b.speed > a.speed){
        return 1;
    } else {
        return 0;
    }
});
goodFilter.reverse();
console.log(`Speed Gold goes to ${goodFilter[0].coder}, speed of ${goodFilter[0].speed}`);
console.log(`Speed Silver goes to ${goodFilter[1].coder}, speed of ${goodFilter[1].speed}`);
console.log(`Speed Bronze goes to ${goodFilter[2].coder}, speed of ${goodFilter[2].speed}`);