
//sum all the nums

//sum with reduce method
const sum = (arr) => {
    return arr.reduce((a,b) => a+b, 0)
}


//sum with for loop
const sumLoop = (arr) => {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}


//sum for of method
const sumForOf = (arr) => {
    let sum = 0
    for(let num of arr){
        sum += num
    }
    return sum
}


//multiply reduce
const multi = (arr) => {
    return arr.reduce((a, b) => a * b, 1)

}

