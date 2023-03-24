//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

//* 3. n to m : Same as the previous problem, except you will prompt the user for the number to start on and the number to end on. Example session
// let n = Number(prompt("enter a starting number: "))
// let m = Number(prompt("ener an ending number: "))
// if(n <= m){
//   for(let i=n; i <= m; i++){
//     console.log(i)
//   }
// }else{
//   for(let i=n; i >= m; i--){
//     console.log(i)
//   }
// }


//* 5. Write a loop that calculates the factorial of a number.
// let num = Number(prompt("enter a number: "))
// let result = 1
// for(let i = num; i > 0; i--){
//   result *= i
// }
// console.log(result)


//* 6. Write a loop that prints out the Fibonacci sequence up to a certain number of terms.
// let terms = Number(prompt("enter a number of terms: "))
// let num1 = 0
// let num2 = 1
// let nextNum

// for(let i = 1; i <= terms; i++){
//   console.log(num1)
//   nextNum = num1 + num2
//   num1 = num2
//   num2 = nextNum
// }



//* 7. Print a 5x5 square of * characters. Example output:
// for(let i = 1; i <= 5; i++){
//   console.log("*****")
// }



//* 8. Print a NxN square of * characters. Prompt the user for N. Example output:
// let n = Number(prompt("enter a number: "))
// let star = "*".repeat(n)
// for(let i = 1; i <= n; i++){
//   console.log(star)
// }



//* 9. How many coins? Write a program that will prompt you for how many coins you want. Initially you have no coins. It will ask you if you want a coin? If you type "yes", it will give you one coin, and print out the current tally. If you type no, it will stop the program.

// let coins = 0
// console.log(`You have ${coins} coins`)
// let question = prompt("Do you want a coin? Yes/No").toLowerCase()

// while(question == "yes"){
//   coins++
//   console.log(`You have ${coins} coins`)
//   question = prompt("Do you want a coin? Yes/No").toLowerCase()
// }
// console.log(`You have ${coins} coins, bye!`)



//* 10 Print a Box Given a height and width, input by the user, print a box consisting of * characters as its border.
// let width = Number(prompt("enter a width: "))
// let height = Number(prompt("enter a height: "))

// let topAndBottomSide = "*".repeat(width)
// let middle = "*" + " ".repeat(width-2) + "*"

// for(let i = 1; i <= height; i++){
//   if(i == 1 || i == height){
//     console.log(topAndBottomSide)
//   }else{
//     console.log(middle)
//   }
// }


//*11. Print a Triangle Print a triangle consisting of * characters like this:
// let height = Number(prompt("enter a height for the tree: "))
// let numOfStar = 1
// for(let i = height -1; i >=0; i--){
//   let layer = " ".repeat(i) + "*".repeat(numOfStar) + " ".repeat(i)
//   console.log(layer)
//   numOfStar+= 2
// }


//* 12. Multiplication Table Print the multiplication table for numbers from 1 up to 10. Example output:
// for(let i = 1; i <= 10; i++){
//   for(let j = 1; j <= 10; j++){
//     let result = i * j
//     console.log(`${i} x ${j} = ${result} `)
//   }
// }

