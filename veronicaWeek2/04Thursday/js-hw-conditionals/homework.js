//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});


//* 1. Write a script that asks for a day of the week. If the day is a business day, print 'go to work!'. If the day is a weekend day, print 'sleep in!'. If whatever the user entered is not a day, print 'enter a valid day'.

// let day = Number(prompt("Please enter a number for a day. 1-Monday, 2-Tuesday, ...., 7-Sunday"))
// switch (day) {
//     case 1:
//         console.log("go to work!")
//         break;
//     case 2:
//         console.log("go to work!")
//         break;
//     case 3:
//         console.log("go to work!")
//         break;
//     case 4:
//         console.log("go to work!")
//         break;
//     case 5:
//         console.log("go to work!")
//         break;
//     case 6:
//         console.log("sleep in!")
//         break;
//     case 7:
//         console.log("sleep in!")
//         break;

//     default:
//         console.log("enter a valid day")
//         break;
// }



//* 2. Write a script that asks the user for their name. Ask them for the food they are bringing to the picnic. Check if two input strings start with the same letter. If it does, tell them they can come to the party. If it doesn't, tell them to try again.
// let name = prompt("enter your name: ")
// let food = prompt("What food are you bringing? ")

// while(name[0].toLowerCase() != food[0].toLowerCase()){
//     console.log("Let's try again!")
//     name = prompt("enter your name: ")
//     food = prompt("What food are you bringing? ")
// }

// console.log("Welcome to the party")



//* 3. Write a script that accepts a parameter username, and checks if the username is valid. A valid username must be longer than 3 characters and less than 18.

// let username = prompt("Please enter a valid username. The username must be longer than 3 characters and less than 18: ")
// if(username.length > 3 && username.length < 18){
//     console.log("Thanks for entering a valid username")
// }else{
//     console.log("Invalid username")
// }

//* 4. Write a program that prompts the user for a letter and checks if it is uppercase or lowercase.
// let letter = prompt("Please enter a letter: ")

// if(letter.length !== 1){
//     letter = prompt("Please enter ONE letter only: ")
// }else if(typeof(Number(letter))== "number"){
//     letter = prompt("Please enter a letter not a number: ")
// }
// if(letter == letter.toUpperCase()){
//     console.log(`${letter} is uppercase`)
// }else{
//     console.log(`${letter} is lowercase`)
// }


//* 5. Write a program that prompts the user for a temperature in Fahrenheit and converts it to Celsius.
// let temp = Number(prompt("Enter a temperature in Fahrenheit"))
// let newTemp = (temp - 32) * 5 / 9
// newTemp = Math.round(newTemp)
// console.log(newTemp)


//* 6. tip calculator 
let totalBill = Number(prompt("Enter your total bill amount: "))
let levelOfService = Number(prompt("Enter a number to indicate the level of service. 1-Good (20% tip), 2-Fair (15% tip), 3-Bad (10% tip)"))
let numberOfPeople = Number(prompt("How many people to be divided amongst: "))
let tipAmount
let newTipAmount
let totalAmount
let payPerParty

switch (levelOfService) {
    case 1:
        tipAmount = totalBill * 0.2
        newTipAmount = tipAmount.toFixed(2)
        totalAmount = Number(totalBill) + Number(newTipAmount)
        payPerParty = (totalAmount / numberOfPeople).toFixed(2)
        
        console.log(`The tip amount is ${newTipAmount}, and the total amount is ${totalAmount}. Each person will pay ${payPerParty}`)
        break;
    case 2:
        tipAmount = totalBill * 0.15
        newTipAmount = tipAmount.toFixed(2)
        totalAmount = Number(totalBill) + Number(newTipAmount)
        payPerParty = (totalAmount / numberOfPeople).toFixed(2)

        console.log(`The tip amount is ${newTipAmount}, and the total amount is ${totalAmount}. Each person will pay ${payPerParty}`)
        break;
    case 3:
        tipAmount = totalBill * 0.1
        newTipAmount = tipAmount.toFixed(2)
        totalAmount = Number(totalBill) + Number(newTipAmount)
        payPerParty = (totalAmount / numberOfPeople).toFixed(2)

        console.log(`The tip amount is ${newTipAmount}, and the total amount is ${totalAmount}. Each person will pay ${payPerParty}`)
        break;

    default:
        break;
}
