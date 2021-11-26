const num = require('prompt-sync')();

const number = num('Enter number: ');
let sum = 0;

//calculate sum of series
for (i = 1; i <= number; i++) {
    sum += 1 / i;
}
console.log("Harmonic Value for the series is: " + sum);