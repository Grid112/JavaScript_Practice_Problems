const numberArray=[]; 

//Store  element in number array
for ( let i = 0; i < 5; i++ ) {
    numberArray[i] = Math.floor(( Math.random() * 899 ) + 100);
}

console.log("Random numbers are: " +numberArray);

let maximumNumber = numberArray[0];
let minimumNumber = numberArray[0];

//finding maximum and minimum number from list
for ( i = 0; i < numberArray.length; i++) {
    if ( numberArray[i] > maximumNumber ) {
        maximumNumber = numberArray[i];
    }
    if ( numberArray[i] < minimumNumber ) {
        minimumNum = numberArray[i];
    }
}

console.log("Maximum number is : " +maximumNumber);
console.log("Minimum number is : " +minimumNumber); 