const nestedArray = [[1, 2],[3, 4,[5, 6]], 7, [8, [9, 10]]]

const flatten = (arr) => {
    let flat = arr.reduce((prevVal, curVal) => { 
        if(Array.isArray(curVal)){
            return prevVal.concat(flatten(curVal))
        }else{
            prevVal.push(curVal)
            return prevVal
        }
     }, [])

     return flat
}

console.log(flatten(nestedArray))

