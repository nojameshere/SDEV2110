const users = ['John Salamander 34967', 'Nicky LongestLastNameEver 22377', 'Emily Small 00127', 'Thomas Lang 56920', 'James Sales 17957'];

function splitString(user){
    let firstName = user.split(' ')[0];
    let lastName = user.split(' ')[1];
    let userID = user.split(' ')[2];
    console.log('Get data: First name: ' + firstName + ', Last name: ' + lastName + ', ID: ' + userID);
    return [firstName, lastName, userID];
}

function pullParts(passedArray){
    let emailParts = [];
    //Gets the first seven letters of the last name.
    let lastSeven = passedArray[1];
    if (lastSeven.length >7){
        lastSeven = lastSeven.slice(0, 7);
    }
    lastSeven = lastSeven.toLowerCase();
    emailParts.push(lastSeven);
    //Gets the first initial of the first name and sets it to lower case for formatting
    let firstInitial = passedArray[0];
    firstInitial = firstInitial.slice(0, 1);
    firstInitial = firstInitial.toLowerCase();
    emailParts.push(firstInitial);
    //Gets the first 2 numbers after converting the int to a string.
    let ID = passedArray[2];
    ID = ID.toString();
    ID = ID.slice(0, 2);
    emailParts.push(ID);
    console.log('Chop it: first name letter: ' + emailParts[1] + ', last name group: ' + emailParts[0] + ', id digits: ' + emailParts[2]);
    return emailParts;
}

function assembleEmail(currentUser){
    console.log('Data to process: ' + currentUser);
    let emailParts = pullParts(splitString(currentUser));
    console.log('email: ' + emailParts.join('') + '@company.com')
}
//Function call and console log 
console.log('Generating email addresses.')
users.forEach(assembleEmail);