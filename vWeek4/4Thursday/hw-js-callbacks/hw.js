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



 //* 6. 
 var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

 for(let person of people){
    console.log(`Good Job, ${person}!`)
 }


 //* 7.
 