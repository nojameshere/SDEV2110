
let date = '11/8/1934'
const monthConversion = ['unused', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Function to separate the date into integers in an array.
function separateDate (date){
    //Separate strings based on the / in the date.
    let MM = date.split('/')[0];
    let DD = date.split('/')[1];
    let YY = date.split('/')[2];
    //Next change the strings into integers.
    MM = parseInt(MM);
    DD = parseInt(DD);
    YY = parseInt(YY);
    return parsedDate = [MM, DD, YY];
}
function getStandardFormat (parsedDate){
    //Uses the MM integer to check the monthConversion array. 
    let month = monthConversion[parsedDate[0]];
    return standard = month + ' ' + parsedDate[1] + ', ' + parsedDate[2];
}

function getEuroFormat (parsedDate){
    return euro = parsedDate[1] + '/' + parsedDate[0] + '/' + parsedDate[2];
}

function getMilitaryFormat (parsedDate){
    let month = monthConversion[parsedDate[0]];
    return military = parsedDate[1] + ' ' + month + ' ' + parsedDate[2];
}
//Call all functions passing the date and parsedDate variables into them.
separateDate (date)
getStandardFormat(parsedDate);
getEuroFormat(parsedDate);
getMilitaryFormat(parsedDate);
//Logging everything with the correct formats.
console.log('Original date: ' + date);
console.log('MM = ' + parsedDate[0] + ', DD = ' + parsedDate[1] + ', YYYY = ' + parsedDate[2]);
console.log('Standard format: ' + standard);
console.log('Euro format: ' + euro);
console.log('Military format: ' + military);