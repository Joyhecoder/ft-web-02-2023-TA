//* 1. 
let nums = [ 0,1,2,3,4]
const onlyPositive = (arr) => { 
    let newArr = arr.filter(num => {
        // console.log(num)

        return num > 0
    })
    // console.log(newArr)
    return newArr
 }

//  console.log(onlyPositive(nums))


//* 2. 
const onlyEven = (arr) => {
    let newArr = arr.filter(num =>{
        return num % 2 ==0
    })
    return newArr
}
// console.log(onlyEven(nums))


//* 3. 
const squareTheNumbers = (arr) => { 
    let newArr = arr.map(num => {
        return num * num
    })
    return newArr
 }
//  console.log(squareTheNumbers(nums))


//* 4.
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];


const lowerThan70 = (arr) => { 
    let newCities = arr.filter(city =>{
        let cityObj = {...city}
        return cityObj.temperature < 70
    })
    return newCities
 }
//  console.log(lowerThan70(cities))
//  console.log("original", cities)


//* 5. 
const lowerThan70Names = (arr) => { 
    let citiesName = []
    let newCities = arr.filter(city =>{
        let cityObj = {...city}
        if(cityObj.temperature< 70){
            // console.log(cityObj.name)
            return citiesName.push(cityObj.name)
        }
    })
    return citiesName
 }
//  console.log("7", lowerThan70Names(cities))

//?correct version 
let copyOfCities = [...cities]
let answers = copyOfCities.map(city => city.name)
// console.log(answers)

 //* 6. 
 var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

 for(let person of people){
    // console.log(`Good Job, ${person}!`)
 }


 //* 7.
 let peoArr = [...people]
 let sortedPeople = peoArr.sort()
//  console.log(sortedPeople)
//  console.log(people)


//* 8. 
let peoArr2 = [...people]
let sortedByLength = peoArr2.sort((a, b)=>{
    return a.length - b.length
})
// console.log(sortedByLength)


//* 9. 
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

    //make a copy of the array
let copyOfArr = [...arr]
//sort method to sort the length from smallest to greatest
let afterSorted = copyOfArr.sort((a,b)=>{
    //reduce method to find the sum of each inner array, a and b are the inner array
    return a.reduce((x,y) => x+y, 0) - b.reduce((x,y) => x+y, 0)
})
// console.log(afterSorted)


//* 10. 
const funFun = () => { 
    console.log("Hello World! ")
 }

 //fun is the name of the function, fun() is to invoke the function
function call3Times(fun) { fun(); fun(); fun(); }
// call3Times(funFun)


//* 11. 
function callNTImes(num, fun){
    for(let i=0; i < num; i++){
        fun()
    }
}
// callNTImes(6, funFun)
 

//* 12. 
const findSum = (arr) => { 
    return arr.reduce((a,b) => a+b, 0)
 }

//  console.log(findSum([1,2,3,4]))

 //* 13. 

 const acronym = (array) => { 
   
    const initialLetter = ''
    const acronymFunc = array.reduce((total, curLetter) => total.concat(curLetter[0]), initialLetter)
    return acronymFunc.toUpperCase()
  }
  console.log(acronym(['very', 'important', 'person']))
  console.log(acronym(['national', 'aeronautics', 'space', 'administration']))