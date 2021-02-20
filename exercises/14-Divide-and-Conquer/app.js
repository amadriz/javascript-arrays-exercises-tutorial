let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
let even = [];
let odd = [];
function mergeTwoList(){
    for(let i = 0; i < list_of_numbers.length; i++){
        
        if(list_of_numbers[i] %2 == 0){
            even.push(list_of_numbers[i]);
        } else {
            odd.push(list_of_numbers[i]);
        }

        console.log(even);
    }
}


console.log(mergeTwoList(1,2))

