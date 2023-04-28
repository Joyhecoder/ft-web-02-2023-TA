// Given an array and chunk size, divide the array into many subarrays where each subarray
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

chunk([1, 2, 3, 4], 2)
chunk([1, 2, 3, 4, 5], 2)
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)






