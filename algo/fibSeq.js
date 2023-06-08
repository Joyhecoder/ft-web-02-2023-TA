//[0, 1, 1, 2, 3, 5, 8]

// const fib = (n) => {
//     if(n == 0){
//         return [0]
//     }
//     if(n == 1) return [0, 1]
//     if(n < 0) return undefined


//     let arr = [0 , 1]
//     for(let i = 2; i <= n; i++){
//         let temp = arr[i-2] + arr[i-1]
//         arr.push(temp)
//     }

//     return arr
// }

// console.log(fib(5))

const fibRecurr = (n) => {
    if(n < 2){
        return n
    }
    return fibRecurr(n-1) + fibRecurr(n-2)

}

console.log(fibRecurr(4))

//memorization
const fib = (n, memo=[]) => {
    if(memo[n] !== undefined){
        return memo[n]
    }

    if(n <= 2) return 1
    let res = fib(n-1, memo) + fib(n-2, memo)

    memo[n] = res
    console.log(memo)
    return res
}

console.log(fib(50))