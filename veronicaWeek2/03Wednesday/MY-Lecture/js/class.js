const widthOfSquare = 10; //camel case 
let pi = 3.14;  //let is a block scoped variable
// console.log(pi)

pi = 3.0  //reasigning the value of pi
// console.log(pi)



//?escape characters
// console.log("\t Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, amet. Suscipit natus itaque maxime \n \n sapiente optio quia? Neque magni, repellendus voluptatem deleniti, dignissimos, non incidunt sit magnam corporis repellat perspiciatis. ")

// console.log(`
//     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, amet. Suscipit natus itaque maxime 
    
//     sapiente optio quia? Neque magni, repellendus voluptatem deleniti, dignissimos, non incidunt sit magnam corporis repellat perspiciatis.


// `)

//? string concatentation 
let fName = "Joy "
let lName = "He"

let myName = fName + lName
// console.log(myName)

//? casting string to int
//* string => number => string  boolean

let a = 3
let b = "3"
let c = parseInt(b)
// console.log(a+c)

typeof(c)
// console.log(typeof(c))


let b_number = Number(b)
// console.log(typeof(b_number))



//? casting from integer to string
let b_num = Number(b)
// console.log(b_num)

let some_int = 5
let some_int_string = some_int.toString()
// console.log(typeof(some_int_string))



//? Math with JS
// let x = 3
// let y = 4
// console.log(x + y)
// console.log(x - y)
// console.log(x * y)
// console.log(x / y)

let x = -89
let result = Math.abs(x)
// console.log(result)


let e = 2.72
let result2 = Math.round(e)
// console.log(result2)

//Math.pow(base, power)
let result3 = Math.pow(2,5)
// console.log(result3)


//true 1
//false 0
result = true + true
console.log(result)



let ifValid = true
console.log(typeof(ifValid))