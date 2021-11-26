const num = require('prompt-sync')();

const number = num('Enter number: ');

for (i = 0; i <= number; i++) {
    let powerOfNumber = Math.pow(2, i)
    console.log(powerOfNumber);
}