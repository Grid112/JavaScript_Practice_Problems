const dice = {};
const dieRoll = 10;

//initializing Total 6 dices 
let dieOne=1;
let dieTwo=1;
let diethree=1;
let dieFour=1;
let dieFive=1;
let dieSix=1;

let key=0;

//assigning key and values to the dice object
while ((dieOne < dieRoll) && (dieTwo < dieRoll) && (diethree < dieRoll) && (dieFour < dieRoll) && (dieFive < dieRoll) && (dieSix < dieRoll)){
	let value = Math.floor((Math.random() * 6) + 1);
	dice[key] = value;

    switch(value){
        case 1:
			console.log(value +" "+ dieOne);
			dieOne++;
            break;
        case 2:
			console.log(value +" "+ dieTwo);
			dieTwo++;
            break;
		case 3:
			console.log(value +" "+ diethree);
			diethree++;
            break;
		case 4:
			console.log(value +" "+ dieFour);
			dieFour++;
            break;
		case 5:
			console.log(value +" "+ dieFive);
			dieFive++;
            break;
		case 6:
			console.log(value +" "+ dieSix);
			dieSix++;
            break;
    }
	key++;
}

console.log(dieOne,dieTwo,diethree,dieFour,dieFive,dieSix);

//check for maximum
if ( dieOne == dieRoll ) {
    console.log ("1 has maximum count.");
}
else if( dieTwo == dieRoll ) {
    console.log ("2 has maximum count.");
}
else if( diethree == dieRoll ) {
    console.log ("3 has maximum count.");
}
else if( dieFour == dieRoll ) {
    console.log ("4 has maximum count.");
}
else if( dieFive == dieRoll ) {
    console.log ("5 has maximum count.");
}
else if( dieSix == dieRoll ) {
    console.log ("6 has maximum count.");
}

//check for minimum
if ( (dieOne < dieTwo) && (dieOne < diethree) && (dieOne < dieFour) && (dieOne < dieFive) && (dieOne < dieSix) ) {
    console.log ("1 has minimum count.");
}
else if( (dieTwo < dieOne) && (dieTwo < diethree) && (dieTwo < dieFour) && (dieTwo < dieFive) && (dieTwo < dieSix) ) {
    console.log ("2 has minimum count.");
}
else if( (diethree < dieOne) && (diethree < dieTwo) && (diethree < dieFour) && (diethree < dieFive) && (diethree < dieSix) ) {
    console.log ("3 has minimum count.");
}
else if( (dieFour < dieOne) && (dieFour < dieTwo) && (dieFour < diethree) && (dieFour < dieFive) && (dieFour < dieSix) ) {
    console.log ("4 has minimum count.");
}
else if( (dieFive < dieOne) && (dieFive < dieTwo) && (dieFive < diethree) && (dieFive < dieFour) && (dieFive < dieSix) ) {
    console.log ("5 has minimum count.");
}
else if( (dieSix < dieOne) && (dieSix < diethree) && (dieSix < dieFour) && (dieSix < dieFive) && (dieSix < dieTwo) ) {
    console.log ("6 has minimum count.");
}