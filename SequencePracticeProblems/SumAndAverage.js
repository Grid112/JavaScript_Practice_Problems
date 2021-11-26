let sum = 0;

//find sum of 5 Two digit Random numbers
for(let i = 0; i < 5; i++){
    let twoDigitNum = Math.floor((Math.random() * 90 ) + 10);
    console.log(i)
    sum += twoDigitNum;
}

console.log("Sum of 5 digits is: " +sum);

let avg = sum / 5;
console.log("Average is: " +avg);