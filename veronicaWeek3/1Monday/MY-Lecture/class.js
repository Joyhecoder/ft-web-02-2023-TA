let myArr = [3,6,5,4,2]

//modify an element
myArr[1] = 99

//add item to the end of an array
myArr.push(100)


//add item to the beginning of an array
myArr.unshift(0)
// console.log(myArr)




//? pass by reference and pass by value
//example of passing by value (copy the value)
let a = 5
let b = a
a = 4
// console.log(a)  //4
// console.log(b)  //5

//example of pass by reference (copy the address)
let arrA = [1,2,3,4]
let arrB = arrA

arrA.push(99)
// console.log(arrA)   //[ 1, 2, 3, 4, 99 ]
// console.log(arrB)   //[ 1, 2, 3, 4, 99 ]



//?use spread operator 

let arrC = [1,2,3,4]
let arrD = [...arrC]
arrC.push(99)
console.log(arrC)
console.log(arrD)

