//promise .then

// let promise = new Promise((resolve, reject) => { 
//     let isValid = true
//     //async code

//     setTimeout(()=> {
//         if(isValid){
//             resolve('success')
//         }
//         else{
//             reject('You have an error in your code')
//         }
//     }, 1000)

//  })

// promise.then(result => {
//     console.log(result)
// })
// promise.catch((error)=>{
//     console.log(error)
// })

// console.log("hello there, waiting to process data")


//* Create a Promise that resolves after 2 seconds with the message “Hello, world!” and logs the result to the console.
// let prom = new Promise((res, rej) => { 
//     let isValid = true

//     setTimeout(() => { 
//         if(isValid){
//             res('Hello, world!')
//         }else{
//             rej("You have an error in your code")
//         }
//      }, 2000)
//  })

//  prom.then(result => {
//     console.log(result)
//  })
//  prom.catch(err => {
//     console.log(err)
//  })


//* Create a Promise that generates a random number between 1 and 10 and resolves with that number. If the generated number is less than 5, reject the Promise with the message “Number too low!“.
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("randomNum:", randomNum)

let promise = new Promise((res, rej) => { 
    if(randomNum >= 5){
        res(randomNum)
    }else{
        rej(randomNum)
    }
 })

 promise.then(result => {
    console.log(`${result} is fine.`)
 })
 promise.catch(err => {
    console.log(`${err} is too low`)
 })