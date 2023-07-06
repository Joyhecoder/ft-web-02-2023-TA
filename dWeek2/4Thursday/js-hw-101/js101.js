
//1. Hello, You 
function hello(name) {
    // put your code here
    if(name){

        console.log(`Hello, ${name}`)
    }else{
        //2. Hello, you! Part2 
        console.log("hello, world!")
    }
  }
  hello('Mustache');
  hello()



//3. Madlib 
function madlib(name, subject){
    return `${name}'s favorite subject in school is ${subject}`
}
console.log(madlib('Joy', 'Math'))

//4. Tip Calculator 
function tipAmount(amount, service){
    if(service === 'good'){
        return amount *.2
    }else if(service === 'fair'){
        return amount * .15
    }else if(service === 'bad'){
        return amount * .1
    }else{
        return 'please enter a valid service level'
    }
}
console.log(tipAmount(100, 'good'));
console.log(tipAmount(40, 'fair'));

//5. Tip Calculator 2 
function totalAmount(amount, service){
    if(service === 'good'){
        return amount + amount *.2
    }else if(service === 'fair'){
        return amount + amount * .15
    }else if(service === 'bad'){
        return amount + amount * .1
    }else{
        return 'please enter a valid service level'
    }
}
console.log(totalAmount(100, 'good'))
console.log(totalAmount(40, 'fair'))
//6. Tip Calcuator 3 
function splitAmount(amount, service, ppl){
    if(service === 'good'){
        return (amount + amount *.2)/ppl
    }else if(service === 'fair'){
        return (amount + amount * .15) / ppl
    }else if(service === 'bad'){
        return (amount + amount * .1) / ppl
    }else{
        return 'please enter a valid service level'
    }
}
console.log(splitAmount(100, 'good', 5))
console.log(splitAmount(40, 'fair', 2))

