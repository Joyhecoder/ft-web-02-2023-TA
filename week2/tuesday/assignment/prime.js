let num = prompt('Enter a number: ')
let factors = []

for(let factor=1; factor <= num; factor++){
    if(num % factor == 0){
        factors.push(factor)
    }
}

console.log(factors);
if(factors.length<=2){
    console.log('This is a prime number');
}else{
    console.log(`${num} is NOT a prime number`);
}