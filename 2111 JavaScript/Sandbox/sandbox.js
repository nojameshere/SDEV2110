//store data in local storage
// key, value;
localStorage.setItem('name', 'value');
localStorage.setItem('age', '50');


//get data from local storage
// getItem('name of the key')
let name = localStorage.getItem('name');
//this returns 'value'

//updating data
localStorage.setItem('name', 'value2');
//just replaces the value based on the name of the key.

/*
when js loads, it needs to check if localStorage.lenth > 0, 
it should pull the data and set it in a template.
*/

