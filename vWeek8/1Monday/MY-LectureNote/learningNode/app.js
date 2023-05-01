//create a local module

const firstName = require('./string');  //common js


const log = require('./log')

log.warning("memory leak")


const Stack = require('./utilities/stack');


// let stack = new Stack() 
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.pop())
// console.log(stack.peek())


const math = require('./utilities/math');
console.log(math.sum([ 1, 2, 3, 4, 5]))
console.log(math.multi([ 1, 2, 3, 4, 5]))
