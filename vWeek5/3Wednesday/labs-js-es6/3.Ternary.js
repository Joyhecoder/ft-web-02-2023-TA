// ***Ternary Operator 

//* 1. Check if a number is even or odd using ternary operator 

let num = 10; 
let result = ""

if(num % 2 === 0){
    result = "even"
}
else{
    result = "odd"
}

console.log(result);


//* 2.Check if a person is eligible to vote based on their age using ternary operator 

let age = 20; 
let ageResult = "" 

if(age >= 18){
    ageResult = "Eligible to vote"
}
else{
    ageResult = "Not eligible to vote"
}

console.log(ageResult);

//* 3. Check if a string is empty or not using ternary operator

const str = ""; 

const strResult = "" 

if( str){
    strResult = "String is not empty"
}
else{
    strResult = "String is empty"
}

console.log(strResult);


//* 4. Check if a person is eligible to drive based on their age and possession of a driving license using ternary operator
const drivingAge = 20;
const hasLicense = true;

let driveResult = ""; 

if(drivingAge >= 18 && hasLicense){
    driveResult = "Eligible to drive"
}
else{
    driveResult = "Not eligible to drive"
}

//* 5. Change the contents of the isNumber function using ternary operator

function isNumber(a) {
    if (typeof a === "number") {
        return "that's a number";
    }
    else {
        return "That's not a number";

    }
}



console.log(isNumber(10));
console.log(isNumber('hey there'));
console.log(isNumber(true));


//* 6. The following function checks if a number is positive, negative or zero. 
// rewrite the function to use a ternary statement  

const posOrNeg = (num) => {
    let result = ""
    if(num > 0){
        result = "postive";
    }
    else if (num < 0){
        result = "negative";
    }
    else {
        resul = "zero";
    }

    return `The number is ${result}.`
}



console.log(posOrNeg(-8)); 





