const num = require('prompt-sync')();

const number = num('Enter a number: ');
 
if ( number >= 0 && number <= 9 ) {
    console.log("Single");
}
else if ( number >= 10 && number <=99 ) {
    console.log("Tens");
}
else if ( number >= 100 && number <= 999 ) {
    console.log("Hundreds");
}
else if ( number >= 1000 && number <= 9999 ) {
    console.log("Thousands");
}
else if ( number >= 10000 && number <= 99999) {
    console.log("Ten thousands");
}
else if ( number >= 100000 && number <= 999999 ) {
    console.log("Lakhs");
}
else {
    console.log("Number Out Of Range!");
}