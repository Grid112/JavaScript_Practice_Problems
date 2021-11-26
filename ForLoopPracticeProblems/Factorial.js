const num = require('prompt-sync')();

const number = num('Enter a number: ');
let factorial = 1;

//calculate factorial of number
for (i = 2; i <= number; i++) {
    factorial = factorial * i;
    console.log(factorial)
    
}
console.log("Factorial of the " + number + " is : " + factorial);