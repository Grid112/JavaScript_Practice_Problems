const value = require('prompt-sync')();

let Date = value('Enter  Date: ');
let Month= value('Enter Month: ');

let result = "false";

if ((Month <= 6) && (Month >= 3)) {
    let monthDay = 30 + (Month % 2);

    if((Date >= 1) && (Date <= monthDay)){
        let days = (Month*100) + Date;

		if ((days >= 320) && (days <= 620)){
            result="true";
        }
	}
}
console.log(result);