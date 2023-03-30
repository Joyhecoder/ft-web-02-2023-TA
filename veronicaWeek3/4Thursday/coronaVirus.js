let covidData = require('./data');
// console.log(covidData)

//  * Print the follwoing for each state and territory
//  * 

//  * 1. State Name 
for(let state of covidData){
    // console.log(state.state)
   }

//  * 2. State Population 
//  * 3. Number of Cases 
//  * 4. Number of Deaths
//  * 
//  * 
//  * Find the following 
//  * 1. Total (sum) of all the cases for each state and territory
let sum = 0
for(let state of covidData){
    sum += state.cases
}
// console.log(sum)


//  * 2. Which state or territory had the highest number of cases 
let highest = 0
let highState
for(let state of covidData){
    if(state.cases > highest){
        highState = state.state
        highest = state.cases
    }
}
console.log(`${highState} has the highest number of cases, the cases are ${highest}`)


//  * 3. Which state or territory had the higheest number of deaths
let highestDeath = 0
let highDeathState 
for(let state of covidData){
    if(state.deaths > highestDeath){
        highestDeath = state.deaths
        highDeathState = state.state
    }
}
console.log(`${highDeathState} has the highest number of cases with ${highestDeath} deaths`)

