var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let total = 0;
let ave = myArray.length;
let prom = 0;

for (var index in myArray){

    total = total + myArray[index];

	// console.log(myArray[index]);
	
}

prom = total / ave;
console.log(prom);
