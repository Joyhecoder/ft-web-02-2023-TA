//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//* 1. Repeat the following phrase 5 times to your terminal by using a for loop.
//* "Repetition is a good thing"

// for(let i = 0; i < 5; i++){
//   console.log("repetition is a good thing")
// }


//* 2. Solve the problem above again using a while loop.
// let counter = 0
// while(counter < 5){
//   console.log("repetition is a good thing")
//   counter++
// }


//* 3. Write a for loop that prints the numbers from 1 to 10 to the console.

// for(let i = 1; i <= 10; i++){
//   console.log(i)
// }

//* 4. Write a while loop that prints the numbers from 1 to 10 to the console.

// let counter = 1
// while(counter <= 10){
//   console.log(counter)
//   counter++
// }

//* 5. Write a for loop that prints the even numbers from 1 to 20 to the console.
// for(let i = 1; i <= 20; i++){
//   if(i % 2 == 0){
//     console.log(i)
//   }
// }

//* 6. Write a while loop that prints the even numbers from 1 to 20 to the console.
// let num = 1
// while(num <= 20){
//   if(num % 2 == 0){
//     console.log(num)
//   }
//   num++
// }

//* 7. Write a for loop to print the numbers 0 - 20
// for(let num = 0; num <= 20; num++){
//   console.log(num)
// }


//* 8. Write a while loop to print the numbers 0 - 20
// let num = 0;
// while(num <= 20){
//   console.log(num)
//   num++
// }

//* 9. Write a for loop that prints the numbers from 10 to 1 to the console.
// for(let num = 10; num >0; num--){
//   console.log(num)
// }

//* 10. Write a while loop that prints the numbers from 10 to 1 to the console.
// let num = 10
// while(num > 0){
//   console.log(num)
//   num--
// }

//* 11. Write a while loop that keeps asking a user to enter in a word. The program loop should stop when the user enters the word exit
// let word = prompt("enter a word: ").toLowerCase()
// while(word != "exit"){
//   word = prompt("enter a new word: ").toLowerCase()
// }


//* 12. Print only the ODD values from 3 - 29, one number per line
// let num = 3
// while(num < 30){
//   if(num % 2 !== 0){
//     console.log(num)
    
//   }
//   num++
// }

//* 13. Print the EVEN numbers 12 down to -14 in descending order, one number per line
// let num = 12
// while(num >= -14){
//   if(num % 2 ==0){
//     console.log(num)
//   }
//   num--
// }

//* 14. Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3
// let num = 50
// while(num>=20){
//   if(num % 3 == 0){
//     console.log(num)
//   }
//   num--
// }

//* 15. Write a loop that calculates the sum of the numbers from 1 to 100 and prints the result to the console.
// let num = 1
// let sum = 0
// while(num <= 100){
//   sum += num
//   num++
// }
// console.log(sum)




//* 16. employee starts with an annual salary of 58 thousand dollars. Print out the employees salary each year for five years if the employee receives a 2.5% raise each year

// let initalSalary = 58000

// for(let year =1; year <= 5; year++){
//   initalSalary = initalSalary * 1.025
//   initalSalary = initalSalary.toFixed(2)
// }
// console.log(initalSalary)


//* 17. RPG
let choice = Number(prompt("What do you want to do? 1. Fight goblin. 2. Do nothing. 3. Exit. Type in a number: "))
while(choice !== 3){
  if(choice == 1){
    console.log("Fight goblin")
  }else if(choice == 2){
    console.log("You chose to do nothing")
  }else{
    console.log("Please enter a valid number")
  }
  choice = Number(prompt("What do you want to do? 1. Fight goblin. 2. Do nothing. 3. Exit. Type in a number: "))

}
console.log("Exit the game. See you later")
