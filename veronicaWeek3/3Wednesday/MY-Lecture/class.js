function makeFormalGreetng(name, title){
    console.log(`This is ${name}, ${title}`)
}
// makeFormalGreetng("Calvin", "Doctor")

function noReturn(fName, city){
    // console.log(`${fName} lives in ${city}`)
    return `${fName} lives in ${city}`
}

let result = noReturn("Hunter", "Alabama")
console.log(result)