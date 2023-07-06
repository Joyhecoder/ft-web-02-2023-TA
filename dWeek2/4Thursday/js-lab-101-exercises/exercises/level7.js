// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number. If the input is anything other than a positive
// integer return an empty array
//
// Name the function "finalFunction"

function finalFunction(num){
//    console.log(num)
    let arr = []
    let str = "idk is a string"
    if(num > 0 && Number.isInteger(num)){
        for(let i = 0; i <num; i++){
            arr.push(str)
        }
        // console.log(arr)
        return arr
    }else{
        // console.log(arr)
        return arr
    }
}
