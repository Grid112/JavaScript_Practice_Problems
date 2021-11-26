const num = require('prompt-sync')();

let minimum = num("Enter minimum number in range : ");
let maxiumum = num("Enter maximum number in range : ");

for (i = minimum; i <= maxiumum; i++) {
	flag = 1;

	for (j = 2; j <= (i / 2); j++) {
		if ((i % j) == 0)
			flag = 0;
	}
	if (flag == 1)
		console.log("prime numbers are: " + i);
}