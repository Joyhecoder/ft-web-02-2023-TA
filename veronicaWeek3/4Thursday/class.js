// var let const

var index = 0
for (index = 0; index <= 10; index++) {
    console.log(index)
    
}
// console.log("outside", index)



//recursion
function power(base, exponent){

    //base case
    if(exponent === 0){
        return 1
    }

    //recursive case 
    return base * power(base, exponent -1)
}




//write a function factorial which accepts a number and returns the factorial of that number
function factorial(num){
    //base case
    if(num == 0) return 1


    //recursive case
    return num * factorial(n-1)
}

//factorial(4) => 4 * factorial(3) = 4 * 6 = 24
//factorial(3) => 3 * factorial(2) = 3 * 2 = 6
//factorial(2) => 2 * factorial(1) = 2 * 1 = 2
//factorial(1) => 1 * factorial(0) = 1 * 1
//factorial(0) => 1




//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
function recursiveRange(num){
    if(num === 0) return 0
    return num + recursiveRange(num-1)
}

//recursiveRange(4) => 4 + recursiveRange(3) = 4 + 6 = 10
//recursiveRange(3) => 3 + recursiveRange(2) = 3 + 3 = 6
//recursiveRange(2) => 2 + recursiveRange(1) = 2 + 1 = 3
//recursiveRange(1) => 1 + recursiveRange(0) = 1 + 0 = 1
//recursiveRange(0) => 0 
