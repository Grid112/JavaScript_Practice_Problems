const num = require('prompt-sync')();

const number = num('Enter number: ');

for (i = 2; i <= number; i++) {
    if ((number % i) == 0) {
        let flag = 1;

        for (j = 2; j <= i / 2; j++) {
            if ((i % j) == 0) {
                flag = 0;
            }
        }

        if (flag == 1) {
            console.log(i);
        }
    }
}