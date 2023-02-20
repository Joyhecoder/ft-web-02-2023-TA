function reverseWordInString(string) {
    let resultArr = []
    let word = ''
    for (let letter in string) {
        if(string[letter] !== " "){
    
            word += string[letter]
            // console.log(word)
            if(letter == string.length -1){
                resultArr.unshift(word)
            }
            
      
        }
           
        else{
            resultArr.unshift(word)
            word = ''
            resultArr.unshift(" ")
          
        }
    }
    let resultString = resultArr.join('')
    console.log(resultString)
   
 
}

reverseWordInString("hello world!")