let number = prompt('Enter a number: ')
let factors = []

for(let factor=1; factor <= number; factor++){
    if(number % factor == 0){
        factors.push(factor)
    }
}

console.log(factors);