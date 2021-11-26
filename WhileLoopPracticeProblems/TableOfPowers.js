const num = require('prompt-sync')();

const number = num('Enter number: ');

let i = 0
while (i <= number) {
    let powerOfTwo = Math.pow(2, i);
    if (powerOfTwo <= 256) {
        console.log(powerOfTwo);
        i++;
    }
    else {
        break;
    }
}