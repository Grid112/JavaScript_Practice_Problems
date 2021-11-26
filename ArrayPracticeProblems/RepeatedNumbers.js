const arrayNum=[];
let index = 0;


for (let i=1; i<100; i++){
    
	if ((i%11) == 0){
		arrayNum[index] = i;
        index++;
	}
}

console.log("array is: " +arrayNum);