
function sumTheElements(theArray){
    
	var total = 0;
	
	//your code here
    for(i=0; i<theArray.length; i++){
        total = theArray[0] + theArray[1] + theArray[2] + theArray[3] ;
        return total;
    }
}

console.log(sumTheElements([2,13,34,5]))