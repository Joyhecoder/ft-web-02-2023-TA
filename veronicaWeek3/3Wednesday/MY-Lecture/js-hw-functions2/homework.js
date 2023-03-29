//* 1. Write a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2){
    return num1+num2
}
// console.log(sum(2,3))


//* 2. Write a function that takes a string as an argument and returns the length of the string.
function stringLen(str){
    return str.length
}
// console.log(stringLen("Do homework"))


//* 3. Write a function that takes an array of numbers as an argument and returns the average of those numbers.
function aveNum(arr){
    let sum = 0
    for(let num of arr){
        sum += num
    }
    return sum/(arr.length)
}
// console.log(aveNum([1,2,3,4,5,6]))


//* 4. Write a function that takes a number as an argument and returns true if the number is even, and false if it's odd.
function isEven(num){
    if(num % 2 == 0){
        return "true"
    }else{
        return "false"
    }
}

// console.log(isEven(5))


//* 5. Write a function that takes an array of strings as an argument and returns a new array with all the strings capitalized.
function capitalizedStr(arr){
    let newArr = []
    for(let word of arr){
        let singleWord = ""
        for(let letter of word){
            singleWord += letter.toUpperCase()
            
        }
        newArr.push(singleWord)
    }
    return newArr
}

// console.log(capitalizedStr(["joy", "kevin"]))


//* 6. Write a function that takes an array of numbers as an argument and returns a new array with all the numbers doubled.
function doubleNum(arr){
    let doubleNumArr = []
    for(let num of arr){
        doubleNumArr.push(num*2)
    }
    return doubleNumArr
}
// console.log(doubleNum([1,2,3]))



//* 7. Write a function that takes a string as an argument and returns true if the string is a palindrome (reads the same backwards and forwards), and false if it's not.
//!method 1 with reverse()
// function isPalindrome(str){
//     let strArr = str.split("")
//     let reversedArr = strArr.reverse()
//     let revStr = reversedArr.join("")
//     if(revStr == str){
//         return "true"
//     }else{
//         return "false"
//     }
// }

//! method 2 without reverse()
function isPalindrome(str){
    let strArr = str.split("")
    let reversedArr = []
    for(let letter of strArr){
        reversedArr.unshift(letter)
    }
    let revStr = reversedArr.join("")
    if(revStr == str){
        return "true"
    }else{
        return "false"
    }
}

// console.log(isPalindrome("caatac"))


//* 8. Write a function that takes an array of strings as an argument and returns the longest string in the array.
function longestStr(arr){
    let longestStr = arr[0]
    let longest = arr[0].length
    for(let str of arr){
        if(str.length >= longest){
            longest = str.length
            longestStr = str
        }
    }
    return longestStr
}

// console.log(longestStr(["joy", "kevin"]))


//* 9. Write a function that takes an array of numbers as an argument and returns the largest number in the array.
function largestNum(arr){
    let largeNum = arr[0]
    for(let num of arr){
        if(num >= largeNum){
            largeNum = num
        }
    }
    return largeNum
}
// console.log(largestNum([0, 2, 5, 4]))


//* 10. Write a function that takes an array of objects (where each object has a "name" and "age" property) as an argument and returns a new array of only the names of people who are older than 18.

function olderThan18(arr){
    let newArr = []
    for(let obj of arr){
        if(obj.age > 18){
            newArr.push(obj.name)
        }
    }
    return newArr
}

let list = [
    {
        name: "Joy",
        age: 18
    },
    {
        name: "Pacey",
        age: 1
    },
    {
        name: "Kevin",
        age: 32
    }

]
console.log(olderThan18(list))