const names = ['Ellanor Rigby', 'Billie Jean', 'Millicent Melton', 'James Sales']
//Function to split the name into two strings returned in an array.
function nameBreak (name){
    let firstName = name.split(' ')[0];
    let lastName = name.split(' ')[1];
    return [firstName, lastName];
}
//Function to order the names.
function orderNames (brokenName){
    console.log('Name being processed: ' + brokenName[0] + ' ' + brokenName[1]);
    console.log('First name ' + brokenName[0] + ', last name ' + brokenName[1]);
    console.log('Reversed name: ' + brokenName[1] + ', ' + brokenName[0]);
}
//Function to grab the first character of the first name and log the greeting.
function greeting (brokenName){
    let singleletterGrab = brokenName[0];
    let firstCharacter = singleletterGrab.charAt(0);
    console.log('Greeting: Dear ' + firstCharacter + '. ' + brokenName[1]);
}
//Runs the three functions for each of the names in the original array.
names.forEach((name) => {
    const brokenName = nameBreak(name);

    orderNames(brokenName);
    greeting(brokenName)
});