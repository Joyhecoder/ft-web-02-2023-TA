//* Given an array and chunk size, divide the array into many subarrays where each subarray
// is of length size
// 1:22
// chunk([1, 2, 3, 4], 2)
// [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)
// [[1, 2, 3], [4, 5, 6], [7, 8]]


const chunk = (arr, num) => {
    let result = []

    //function to push the element 
    let recur = (arr) =>{
      
        let el = arr.slice(0, num)
        // console.log(el)
        result.push(el)
        // console.log(result)
        arr.splice(0, num)
        // console.log(arr)
 
    }
   //when the arr has more elements than the num, call the function
    while(arr.length >= num){
        recur(arr)
    }
    //when the arr is less than the num, check to see if there is nothing left, if so push it to the final result
    if(arr.length !== 0){
        result.push(arr)
    }
 

    console.log(result)
   
    //check to see if the remaining elements are less than num

    // push this array to the final array
}

// chunk([1, 2, 3, 4], 2)
// chunk([1, 2, 3, 4, 5], 2)
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)




//*Given a string, Write a function that returns the character that is most commonly used in the string.
// yourFunctionName('abccccddde') ---> c
// yourFunctionName('1111112345') ---->1

const yourFunctionName = (str) => {
    let obj = {}
    let strArr = str.split("")
    strArr.forEach(el => {
        if(!obj[el]){
            obj[el] = 1
        }else{
            obj[el] += 1
        }
    })

    // console.log(obj)
    let mostFrequent = 0
    let result 
    for(let key in obj){
        // console.log(obj[key])
        if(mostFrequent < obj[key]){
            result = key
            mostFrequent = obj[key]
        }
    }
    console.log(result)
}
// yourFunctionName('abccccddde')
// yourFunctionName('1111112345')



//* Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters in the same quantity.
// Only consider characters, not spaces or punctuation. Consider capital letters to be the same lower case
// word.replace(/[^\w]/g, “”)
// functions(“two”, “three”) => false
// functions(‘rail safety’, ‘fairy tales’) => true

const functions = (str1, str2) =>{
    let str1Arr = str1.replaceAll(' ', '').split("")
    let str2Arr = str2.replaceAll(' ', '').split("")
    // console.log(str1Arr)
    // console.log(str2Arr)
    let obj1 = {}
    let obj2 = {}
    if(str1Arr.length === str2Arr.length){
        str1Arr.forEach(el => {
            if(obj1[el]){
                obj1[el] += 1
            }else{
                obj1[el] = 1
            }
        })
        str2Arr.forEach(el => {
            if(obj2[el]){
                obj2[el] += 1
            }else{
                obj2[el] = 1
            }
        })
        // console.log(obj1, obj2)
        const sortedObj1 = Object.keys(obj1).sort().reduce((obj, key) => {
            obj[key] = obj1[key]
            return obj
        }, {})
        const sortedObj2 = Object.keys(obj2).sort().reduce((obj, key) => {
            obj[key] = obj2[key]
            return obj
        }, {})
       
        //check if two objects are the same
        const keys1 = Object.keys(sortedObj1)
        const keys2 = Object.keys(sortedObj2)
        if(keys1.length !== keys2.length){
            console.log("false")
        }

        for( let key of keys1){
            if(sortedObj1[key] !== sortedObj2[key]){
                console.log("false")
            }
        }
        console.log("true")
    }else{
        console.log("false")
    }
    
    

}

functions("rail safety", "fairy tales")
functions("two", "three")