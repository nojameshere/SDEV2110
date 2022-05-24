console.log('For Loop');
let number = 10;
for (let iteration = 1; iteration < 6; iteration++){
    number = number + iteration;
    console.log(number);
}

console.log('While Loop');
number = 10;
iteration = 1;
//lines 9 and 10 reset variables for the while loop.
while (iteration<6){
    number = number + iteration;
    console.log(number);
    iteration++;
}