// variables
//data types
let age = 10  //interger (numbers)
let name = 'John'  //string
let pi = 3.142 //Double
let inPublished = true //Boolean
let address = '2300 Richmond Ave Houton, Texas'

console.log(age, name);

//strings are immutable, and cannot be changed

let studentname = "John Doe"
let studentCohort = "DigitalCrafts"
let year = '2023'
// let welcomeMessage = studentname + " " + studentCohort
// let welcomeMessage = studentname.concat(" ", studentCohort)

let welcomeMessage = 'Hello ' +  studentname + ", " + 'welcome to ' + studentCohort + ' cohort ' + year
console.log(welcomeMessage);

//template literals

let anotherWelcomeMessage = `Hello ${studentname}, welcome to ${studentCohort} cohort ${year}`
console.log(anotherWelcomeMessage);


//prompts => prompts function always return a string
// let firstName = prompt('Enter first name: ')
// let lastName = prompt('Enter last name: ')
// let myAge = prompt("Enter age: ")
// console.log(firstName, lastName);
// console.log(myAge);
// console.log(parseInt(myAge) + 10);

//conditions
let userAge = 18
let resident = "TX"

if(userAge > 18 && resident == 'TX') {
    console.log('user is greater than 18.');
    console.log('You are from TEXAS');
}else if(userAge == 18 || resident == 'TX'){
    console.log('or');
}

// let letter = prompt("enter a letter: ")
// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//     console.log(`${letter} is vowel`);
// }else{
//     console.log(`${letter} is not vowel`);
// }

//functions 

function displayAnnualReport(name){
    console.log(`
    -----------------------
    ----Annual Report------
    -Employee name: ${name}-
    12 12 12. 45 455 5565
    -----------------------`);
}
displayAnnualReport()

//a function passing arguments
function displayWeeklyReport(name, state){
    //local variable
    let employeeStatus = "manager"
    console.log(name, state);
}
displayWeeklyReport("joy", "texas")



//a function that returns a value
function add(a,b){
    let sum = a + b
    return sum
}

let result = add(2,3)
console.log(result);


//a function to find out if a number is even or odd
function evenOrOdd(num) {
    if(num % 2 == 0){
        return "even"
    }else{
        return "odd"
    }
}
console.log(evenOrOdd(3));

//tip calculator 

// let totalAmount = prompt("enter your total amount: ")

// let tip = prompt("Enter your percentage, 0.1, 0.20 .15")

// function calculateTotalAmountWithTip(totalAmount, tip){
//     let newTip = 1 + parseInt(tip)
//     console.log(newTip, parseInt(tip));
//     let result = parseInt(totalAmount) * parseInt(tip) + parseInt(totalAmount)
//     return result
// }

// console.log(calculateTotalAmountWithTip(totalAmount, tip))



