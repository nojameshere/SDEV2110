
let date = new Date();
const monthConversion = ['unused', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//Function to separate the date into integers in an array.
function separateDate (date){
    //Use built-in date fucntions to return the parts of the date as strings
    let MM = date.getMonth() + 1;
    let DD = date.getDate();
    let YY = date.getFullYear();
    return parsedDate = [MM, DD, YY];
}
function getStandardFormat (parsedDate){
    //Uses the MM integer to check the monthConversion array. 
    const standardDateDocument = document.querySelector('#standardDate');
    let month = monthConversion[parsedDate[0]];
    standardDateDocument.textContent = month + ' ' + parsedDate[1] + ', ' + parsedDate[2];
}

function getEuroFormat (parsedDate){
    const europeanDateDocument = document.querySelector('#europeanDate');
    europeanDateDocument.textContent = parsedDate[1] + '/' + parsedDate[0] + '/' + parsedDate[2];
}

function getMilitaryFormat (parsedDate){
    let month = monthConversion[parsedDate[0]];
    const militaryDateDocument = document.querySelector('#militaryDate')
    militaryDateDocument.textContent = parsedDate[1] + ' ' + month + ' ' + parsedDate[2];
}
//Call all functions passing the date and parsedDate variables into them.
separateDate (date)
getStandardFormat(parsedDate);
getEuroFormat(parsedDate);
getMilitaryFormat(parsedDate);
