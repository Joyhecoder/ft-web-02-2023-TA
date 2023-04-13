//swaping
let a = 1;
let b = 2

//? method 1:
let temp = a
b = temp

//? method 2:
[a, b] = [b, a]


//truty falsy
//string results in true
//empty array results in true
//empty string results in falsy
//0 results in false

//!ternary operator
//! condition ? ifTrue : ifFalse

let age = 26

let beverage = age >= 21 ? "Beer" : "Juice"
// console.log(beverage)


let arr = [1, 2, 3, 4, 5]
let arr2 = [23, 34, 25]

const logArguments = (...args) => {
    console.log(args)
    args[0].forEach(val => {
        console.log(val)
    })
    args[1].forEach(val => {
        console.log(val)
    })
    
}

logArguments(arr, arr2)


const names = (...args) => {
    for(name of args){
        console.log(name)
    }
}

names("Joy", "Katie", "Kelly")