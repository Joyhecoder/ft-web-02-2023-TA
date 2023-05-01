//create a local module

const firstName = require('./string');  //common js


const log = require('./log')

log.warning("memory leak")


const Stack = require('./utilities/stack');


let stack = new Stack() 
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.peek())
