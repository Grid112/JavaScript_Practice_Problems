const value = require('prompt-sync')();

const year = value('Enter year (YYYY): ');

//checking whether year is leap year or not
if ( ( ( year % 4 == 0 ) && ( year % 100 != 0 ) ) || ( year % 400 == 0 ) ) {
    console.log(year +" is a Leap year");
}
else {
    console.log(year +" is a not Leap Year");
}