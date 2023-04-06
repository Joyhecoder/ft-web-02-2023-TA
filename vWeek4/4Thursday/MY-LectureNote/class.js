const createNodeWClass = (node, classRule) => {
    let newNode = document.createElement(node)
    newNode.setAttribute('class', classRule)
}

//hoisting
// greetWorld()


//!function declaration 
function greetWorld(){
    console.log("hello world")
}


function area1(width,height){
    console.log(width * height)
}

// area1(4,3)

//!function expression
let area = function(width, height){
    return width * height
}
// console.log(area(4,5))

let  add1 = function(num1, num2){
    return num1 + num2
}
let add = (num1, num2) =>num1 + num2
let subtract = (num1, num2) => num1 - num2


let calc = function(num1, num2, operationFunction){
    return operationFunction(num1, num2)
}

let result = calc(5,6, add)
let result2 = calc(5,6, subtract)
// console.log("39", result, result2)




