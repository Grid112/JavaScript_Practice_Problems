const num = require('prompt-sync')();

const number = num('Enter number: ');
let flag = 0;

for (i = 2; i <= (number / 2); i++) {
    if ((number % i) == 0) {
        flag = 1;
    }
}

//check number is prime or not
if (flag == 0) {
    console.log(number + " is a prime number");
}
else {
    console.log(number + " is not a prime number");
}