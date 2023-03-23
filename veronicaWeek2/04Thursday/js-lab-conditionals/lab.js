//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//* 1. Write a program that prompts the user for a number and determines if it is positive, negative, or zero.

// let num = prompt("Please enter a number ")
// num = parseInt(num)
// if(num < 0){
//   console.log(`${num} is negative`)
// }else if(num == 0){
//   console.log(`${num} is zero`)
// }else{
//   console.log(`${num} is positive`)
// }


//* 2. Write a program that prompts the user for a number and determines if it is even or odd.

// let num = prompt("Please enter a number: ")
// num = parseInt(num)
// console.log(typeof(num))
// if(num % 2 == 0){
//   console.log(`${num} is even`)
// }else{
//   console.log(`${num} is odd`)
// }


//* 3. Write a program that prompts the user for a letter and determines if it is a vowel or a consonant.
// let letter = prompt("Please enter a letter: ")
// if(letter.toLowerCase() == 'a' || letter.toLowerCase() == 'e' || letter.toLowerCase() == 'i' || letter.toLowerCase() == 'o' || letter.toLowerCase() == 'u'){
//   console.log(`${letter} is a vowel`)
// }else{
//   console.log(`${letter} is a consonant`)
// }


//* 4. Write a program that prompts the user for a number and checks if it is between 1 and 10 (inclusive).
// let num = prompt("Please enter a number: ")
// num = parseInt(num)
// if(num > 0 && num <=10){
//   console.log(`${num} is between 1 and 10`)
// }else{
//   console.log(`${num} is not between 1 and 10`)
// }


//* 5. Write a program that prompts the user for a number and checks if it is between 50 and 100 (inclusive).


//* 6. Write a program that prompts the user for a password and checks if it is correct (password should be "password123").

let password = prompt("Please enter a password: ")
while(password != 'password123'){
  password = prompt("Please enter your password again: ")
}
console.log("correct password")


// if(password === "password123"){
//   console.log("Your password is correct")
// }else{
//   console.log("Wrong password")
// }

// let password = prompt('Enter a password: ')

//     while(password!='password123'){
//       console.log("Incorrect Password -- Try again")
//       password = prompt('Enter a password: ')
//     }

//     console.log("Welcome to the matrix!");




//* 7. Write a program that prompts the user for a number and checks if it is a multiple of 3.
// let num = Number(prompt('Please enter a number: '))
// if( num % 3 === 0){
//   console.log(`${num} is a multiple of 3`)
// }else{
//   console.log(`${num} is not a multiple of 3`)
// }


//* 8. Write a program that prompts the user for their age and checks if they are eligible for a senior discount (age 65 and up).
// let age = prompt("What is yor age? ")

// if(typeof(age) != "number"){
//   age = prompt("Please enter a number. Try again, what is yor age? ")
// }

// age = parseInt(age)
//   if(age >= 65){
//     console.log("You are eligible for a senior discount")
//   }else{
//     console.log("Sorry, no discount for ya")
//   }


//* 9. Write a program that prompts the user for their birth year and determines if they are a millennial (born between 1981 and 1996).
// let year = Number(prompt("What is your birth year: "))

// if(year >= 1981 && year <= 1996){
//   console.log("You are a millennial")
// }else{
//   console.log("You are not a millennial")
// }


