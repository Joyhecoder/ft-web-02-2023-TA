const isPalindrome = (str) => {
    if(str.length <=1){
        return true;
    }else{
        if(str[0] == str[str.length-1]){
            return isPalindrome(str.slice(1, str.length -1))
        }else{
            return false
        }
    }
}

console.log(isPalindrome('tacocat'))

//You have a line of quarters. Write a function that returns the minimum number of changes necessary to make each quarter in the line of quarters alternate between heads and tails. For instance if the line of quarters were represented by the array [1,1,0,1,1], your function should return 2 because you need only 2 changes: changing the first 1 and the last 1 to zero.
function minQuarterChanges(quarters) {
    let numChanges = 0;
    let currentQuarter = quarters[0];
    if(quarters.length % 2 == 0){
        console.log("check")
        for (let i = 1; i < quarters.length; i++) {
            if (quarters[i] === currentQuarter) {
              numChanges++;
              currentQuarter = 1 - currentQuarter; // toggle the current quarter
            }
        return numChanges;
    }
   
    }else{
        console.log("insdie else")
        let midIndex = (quarters.length -1)/2
        // console.log(midIndex)
        currentQuarter = quarters[midIndex]
        // console.log(currentQuarter)
        for(let count = 0; count <= midIndex; count++){
            
            if(quarters[midIndex-1] === currentQuarter){
                numChanges++
      
                if(quarters[midIndex+1] === currentQuarter){
                    numChanges++
               
                }
                currentQuarter = 1 - currentQuarter; // toggle the current quarter
                console.log('42', currentQuarter)
            }
        }
        return numChanges
    }
    
   
  }
  console.log(minQuarterChanges([1,1,0,1,1]))