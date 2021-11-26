const number = require('prompt-sync')();

console.log("Enter 3 numbers to perform the arithmetic operations");
const num1 = number('Enter First Number: ');
const num2 = number('Enter Second Number: ');
const num3 = number('Enter Third Number: ');
console.log();

//calculating Arithmatic Operations
let exp1 = Number(num1) + Number(num2) * Number(num3);

let exp2 = Number(num1) % Number(num2) + Number(num3);

let exp3 = Number(num3) + Number(num1) / Number(num2);

let exp4 = Number(num1) * Number(num2) + Number(num3);

console.log("Result of expressions are: exp4: " +exp1 + ", exp2: " + exp2 + ", exp3: " + exp3 + ", exp4: " + exp4);


//check maximum value among solved solutions of arithmatic operations
if ( ( exp1 > exp2 ) && ( exp1 > exp3 ) && ( exp1 > exp4 ) ) {
    console.log(exp1 + " is the maximum");
}
else if ( ( exp2 > exp1 ) &&  (exp2 > exp3 ) && ( exp2 > exp4 ) ) {
    console.log(exp2 + " is the maximum");
}
else if ( ( exp3 > exp1 ) && ( exp3 > exp2 ) && ( exp3 > exp4 ) ) {
    console.log(exp3 + " is the maximum");
}
else {
    console.log(exp4 + " is the maximum");
}

//check minimum value among solved solutions of arithmatic operations
if ( ( exp1 < exp2 ) && ( exp1 < exp3 ) && ( exp1 < exp4 ) ) {
    console.log(exp1 +" is the minimum");
}
else if ( ( exp2 < exp1 ) && ( exp2 < exp3 ) && ( exp2 < exp4 ) ) {
    console.log(exp2 +" is the minimum");
}
else if ( ( exp3 < exp1 ) && ( exp3 < exp2 ) && ( exp3 < exp4 ) ) {
    console.log(exp3 +" is the minimum");
}
else {
    console.log(exp4 +" is the minimum");
}