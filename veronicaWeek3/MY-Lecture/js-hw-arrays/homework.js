//* 1. Sum the Numbers
//* Find the sum of all elements in an array and print to the console.

let sum = [11, 23, 34, 54, 57];
let result = 0
for(let num of sum){
    result += num
}
// console.log(result)


//*2. Largest Number
//* Find the largest element in an array and print to the console.

const largest = [5, 7, 2, 4, 9];
let largeNum = largest[0]
for(let num of largest){
    if(num >= largeNum){
        largeNum = num
    }
}
// console.log(largeNum)



//* 3. Smallest Number
//* Find the smallest element in an array and print to the console.

const smallest = [5, 7, 2, 4, 9];
let smallNum = smallest[0]
for(let num of smallest){
    if(num <= smallNum){
        smallNum = num
    }
}
// console.log(smallNum)


//* 4. Even Numbers
//* For the given array of numbers, print each number in the array that is even.

const even = [34, 56, 43, 11, 87, 67, 55, 44, 12, 6, 4, 98, 83]
for(let num of even){
    if(num % 2 == 0){
        // console.log(num)
    }
}


//* 5. Positive Numbers
//* For the given array of numbers, print each number in the array that is greater than zero.

const positive = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]
for(let num of positive){
    if(num > 0){
        // console.log(num)
    }
}


//* 6. Positive Numbers II
//* For the given array of numbers, create a new array which contains every number in the given array which is positive.


const positive2 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]
let newArr = []
for(let num of positive2){
    if(num >0){
        newArr.push(num)
    }
}
// console.log(newArr)



//* 7. Given an array of strings, print the ones that start with the letter 'A'.

const strings = ['Apple', 'Banana', 'Apricot', 'Cherry', 'Avocado'];
for(let word of strings){
    if(word[0] == "A"){
        // console.log(word)
    }
}


//* 8. Given an array of strings, print the longest one.
const strings1 = ['short', 'longer', 'longest', 'medium'];
let longest = strings1[0]

for(let word of strings1){
    if(word.length >= longest.length){
        longest = word
    }
}
// console.log(longest)


//* 9. Multiply a array
//* For the given array of numbers, and a factor of 5, create a new array consisting of each of the numbers in the array multiplied by the factor. Print this array.

const positive3 = [34, -56, 16, 23, -4, -6, -8, 12, 11, 78, -3, -2, 5, -44 ]

let newArr2 = []
for(let num of positive3){
    newArr2.push(num * 5)
}
// console.log(newArr2)


//* 10. Reverse a String
//* Given a string, print the string reversed. For example, reverse the string "Hello World".

let string = "Hello World"
let reversedString = []
let stringArr = string.split("")
for(let letter of stringArr){
    reversedString.unshift(letter)
}
let result1 = reversedString.join("")
// console.log(result1)


//* 11. Multiply Vectors
//* Given two arrays of numbers of the same length, create a new array by multiplying the pairs of numbers in corresponding positions in the two arrays. Example:
const arr1 = [2, 4, 5]
const arr2 = [2, 3, 6]
let answerArr = []
for(let i=0; i < arr1 .length; i++){
    let product = arr1[i] * arr2[i]
    answerArr.push(product)
}
// console.log(answerArr)

//* 12. 13. Matrix Addition
//* Given two two-dimensional arrays of numbers of the size 2x2 two dimensional array is represented as an array of arrays:
let matrix1 = [[1,3],[2,4], [1,1,1]]
let matrix2 = [[5,2],[1,0], [1,1,1]]
let matrixAnswer = []
for(let i = 0; i < matrix1.length; i++){
    let answer = []
    for(let j = 0; j < matrix1[i].length; j++){
        answer.push(matrix1[i][j]+matrix2[i][j])
    }
    matrixAnswer.push(answer)
}
// console.log(matrixAnswer)


//* 14. De-dup
//* Given a array of numbers or strings, create a new array containing the same elements as the first array, except with any duplicate values removed. Print the array.
const numArr = [ 0, 0, 1, 2, 3, 3]
let dedupArr = []
for(let num of numArr){
    if(!dedupArr.includes(num)){
        dedupArr.push(num)
    }
}
// console.log(dedupArr)


//method 2:

let dupNums = [9, 8, 6, 9, 8, 6, 1, 2, 3, 1, 1, 4, 5, 6]

let sortedNums = dupNums.sort()

let noDupNums = [sortedNums[0]] // [1, 2, 3, 4, 5, 6]


// [ 1, 1,  2, 3, 4, 5, 6, 6, 6, 8, 8, 9, 9] 

//                         c 

//      n

// console.log(noDupNums);


for(let c = 0; c <  sortedNums.length - 1; c++){  

    // let n = c + 1 //next pointer

    if(noDupNums[noDupNums.length -1] !=  sortedNums[c]) {  // 6 != 6
        noDupNums.push(sortedNums[c])
    }
}

// console.log(noDupNums)

//* 15. Leetspeak
let str = "I am a leet programmer"
let strToArr = str.split("")
let resultArr = []

for(let letter of strToArr){
   
    if(letter.toUpperCase() == "A"){
        letter = 4
        resultArr.push(letter)
    }else if(letter.toUpperCase() == "E"){
        letter = 3
        resultArr.push(letter)
    }else if(letter.toUpperCase() == "G"){
        letter = 6
        resultArr.push(letter)
    }else if( letter.toUpperCase() == "I"){
        letter = 1
        resultArr.push(letter)
    }else if(letter.toUpperCase() == "O"){
        letter = 0
        resultArr.push(letter)
    }else if(letter.toUpperCase() == "S"){
        letter = 5
        resultArr.push(letter)
    }else if(letter.toUpperCase() == "T"){
        letter = 7
        resultArr.push(letter)
    }else{
        resultArr.push(letter)
    }
}
let result2 = resultArr.join("")
// console.log(result2)



//* 16. Long-long Vowels
//* Given a word as a string, print the result of extending any long vowels to the length of 5.

let long_vowels = ['oo', 'ee']
let word = "Spoon"
let longVowelArr = []
let wordArr = word.split("")

for(let i = 0; i <wordArr.length; i++){
    if(wordArr[i] == "o" || wordArr[i] == "e"){
        if(wordArr[i+1] == "o" || wordArr[i+1] == "e"){
            if(wordArr[i+2] != "o" || wordArr[i+2] != "e"){
                 longVowelArr.push(wordArr[i].repeat(5))
            }
           
        }
    }else{
        longVowelArr.push(wordArr[i])
    }
}
// console.log(longVowelArr.join(""))


//* 17
const str1 = "lbh zhfg hayrnea jung lbh unir yrnearq"
const alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

const alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
const str1Arr = str1.split("")
let resultArr17 = []
for(let i=0; i < str1Arr.length; i++){
    for(let j =0; j < alphabets.length; j++){
        if(str1[i].toLocaleUpperCase() === alphabets[j]){
            resultArr17.push(alphabets13[j])
         
        }
    }
}
const decodingAnswer = resultArr17.join("")
// console.log(decodingAnswer)



//* 18 reverse numbers 
//* -100453 => -354001

function reverseNum(num){
    let answerArr = []
    let numArr = num.split("")
    if(numArr[0] == "-"){
        answerArr.push("-")
        for(let i = numArr.length -1 ; i >0; i--){
            answerArr.push(numArr[i])
        }
    }else{
        for(let int of numArr){
            answerArr.unshift(int)
        }
    }
    let answer = answerArr.join("")
    console.log(answer)
}
reverseNum("123")
reverseNum("-5123")

//method 2
let num = -100453
let sign = 1
if(num < 0){
    sign = -1
}
let numAbs = Math.abs(num)
let numsAbsStr = numAbs.toString()
let revNumAbsStr = ""

for(let i = 0; i < numsAbsStr.length; i++){
    revNumAbsStr = numsAbsStr[i] + revNumAbsStr
}

let revNum = Number(revNumAbsStr) * sign
console.log(revNum)
