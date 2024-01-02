// const str = "1"
// const obj = new String("1")
// console.log(obj=="1")
// console.log(obj === str)
// console.log(obj == str)

//?1
function checkPalindrome(str){
    //remove spaces between words in the str
    let newStr = str.split(" ").join("")
    newStr = newStr.toLowerCase()
    //check to see if the str only has 1 letter or less
    if(newStr.length <= 1){
        return true
    }else{
        //check if the initial letter is the same as the last letter
        if(newStr[0] === newStr[newStr.length-1]){
            //slice to get the a new str that is without the initial letter and the last letter
            return checkPalindrome(newStr.slice(1, newStr.length -1))
        }else{
            //the initial and last letters are not the same
            return false
        }
    }
}

// console.log(checkPalindrome("was it a rat I saw"))

//?2 three 3-digit and products are palindrome
const findHighest = () => {
    //find products
    let palindromeProducts = []
    for(let i = 100; i < 1000; i++){
        for(let j = 100; j < 1000; j++){
            for(let k = 100; k < 1000; k++){
                let product = i * j * k
                //cast int to str
                let productStr = product.toString()
                //check if the product is palindrome
                if(productStr === productStr.split(' ').reverse().join('')){
                    palindromeProducts.push(product)
                }
            }
        }
    }
    //sort the products from highest to lowest
    palindromeProducts.sort((a,b)=>b-a)
    
    //find the highest five
    let result = palindromeProducts.slice(0, 5)
    return result
    
}

//?3 return the even numbers, under 1 million, in the Fibonacci sequence, in reverse order.
const reverseEvenFib = () => {
    const limit = 1000000;
    let fib = [0, 1]
    let evenNums = []

    //get all the fibonacci nums
    while(fib[fib.length - 1] + fib[fib.length - 2] < limit){
        let nextFibNum = fib[fib.length - 1] + fib[fib.length - 2]
        fib.push(nextFibNum)
    }

    //for each to see if a num is even
    fib.forEach(num => {
        if(num % 2 === 0){
            evenNums.push(num)
        } 
    })

    //reverse
    evenNums.reverse()
    console.log(evenNums)
}
// reverseEvenFib()

//?4. class Person {
//   name: string;
//   t: number;
// }

// class Town {
//   t: string;
//   name: string;
// }

// Given a list of Person and a list of Town, return the names of all the people in the first list along with the name of the town that has a matching value of t.
class Person {
    constructor(name, t){
        this.name = name;
        this.t = t;
    }
}

class Town {
    constructor(t, name){
        this.t = t;
        this.name = name
    }
}

function matchPeopleWithTowns(people, towns){
    const result = []
    for(let person of people){
        for(let town of towns){
            if(person.t === parseInt(town.t)){
                let personWithTwon = {
                    personName: person.name,
                    townName: town.name
                }
                result.push(personWithTwon)
            }
        }
    }
    console.log(result)
}

//?5. Given two lists of integers, return a data set containing integers in the first list that cannot be found in the second list and integers in the second list that cannot be found in the first list.
const uniqueNumSet = (list1, list2) => {
    let newSet = []
    //filter to return the num that is not included in the other set
    let uniqueList1 = list1.filter(num => !list2.includes(num))
    let uniqueList2 = list2.filter(num => !list1.includes(num))
    let result = newSet.concat(uniqueList1, uniqueList2)
    console.log(uniqueList1, uniqueList2)
    console.log(result)
}
// uniqueNumSet([1,2,3,4,5], [4,5,6,7,8])

//?6 given integer x and y, write a method that will swap the values of x and y
const swap = (x , y) => {
    let temp = x
    x = y
    y = temp
    console.log({x, y})
}
// swap(2, 4)

//?7. given a string containing a list of integers separated by commas, return a conna-seperated string containing only the unique integers. 
const uniqueIntStr = (str) => {
    //split the str into array
    let strArr = str.split(',')

    //define a new arr to store no duplicates
    let newArr = []
    //map to see if each element is in the newArr or not, if not push it
    strArr.map(el =>{
        if(!newArr.includes(el)){
            newArr.push(el)
        }
    })

    //convert arr back to str by adding the '
    let result = newArr.join(',')
    console.log(result)
}

// uniqueIntStr("1,2,3,1,2,5,4,5,4")

//?8. Given a string containing a list of integers separated by commas, return one line containing each number and the number of instances it appears in the list, separated by a space, only where the number of instances is even.

const evenInstance = (str) => {
    let result = []
    //convert the str to array and parse each el into integer
    let numArr = str.split(",").map(str => parseInt(str))

    //use reducer to create an obj called totalObj, check the instance of curVal 
    let countObj = numArr.reduce((totalObj, curVal)=>{
         //if the num exists in the obj, value + 1
        if(totalObj[curVal]){
            totalObj[curVal]++
        }else{
            //initialize the key and give a value of 1
            totalObj[curVal] = 1
        }
        return totalObj
    }, {})
    console.log(countObj)

    //check if the instances is even
    for(let val in countObj){
        if(countObj[val] % 2 === 0){
            //is even
            result.push(val, countObj[val])

        }
    }

    //join by space
    let answer = result.join(' ')
  
    console.log(answer)
    
    
}
// evenInstance("1,2,3,1,2,5,4,5,4")

//?9. Given a string containing a valid expression made up of positive integers, the + symbol, and the - symbol, evaluate the expression mathematically, without using eval(). For example, "1 + 2 - 3"  should return 0.

const evaluateExpress = (str) => {
    //convert str to arr
    let arr = str.split(' ')
    //parse str to int
    let result = Number(arr[0])

    //check each element after the first element
    for(let i = 1; i< arr.length; i++){
        //if the current el is a number
        if(arr[i] !== "+" && arr[i] !== "-"){
            //check the last el for symbol
            if(arr[i-1] == "+"){
                //parse str to int
                result += Number(arr[i])
  
            }else if(arr[i-1] == "-"){
                result -= Number(arr[i])
            }
        }
    }
    return result
}

// evaluateExpress("1 + 2 - 3")

//? christmas tree
const printTree = (x) => {
    let totalSpaces = x -1
    for(let i = 1; i <= x; i++){
        let row = ''
        //add spaces before the stars to center the pyramid
        let spaces = " ".repeat(totalSpaces)
        row += spaces
        //add the starts
        const starts = '*' .repeat(i)
        row += starts
        totalSpaces--

        console.log(row)
    }
    
}
// printTree(8)

// console.log("This is a log message to stdout");
// console.error("This is a log message to stderr");



// const x = 2
// let y = 4
// function update(arg){
//     return Math.random() + y * arg
// }
// y =2
// Math.random = () => 2.5
// const result = update(x)
// console.log(`result: ${result}`)