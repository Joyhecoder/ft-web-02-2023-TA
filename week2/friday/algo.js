function reverseWordInString(string) {

 
    let resultArr = []
    let word
    let spaceIndex = 0

    for(let i=spaceIndex; i <string.length; i++){
        console.log("index i ", i)
        if(string[i] !== " "){
            //if it is a letter, find the index of the first space and slice the word, unshift it to the array
            // console.log("this is a letter")
            for(let j=i; j < string.length; j++){
                if(string[j]==" "){
                    console.log(j, "space index")
                    word = string.slice(i,j)
                    spaceIndex=j
                    resultArr.unshift(word)
                    console.log("spaceIndex", spaceIndex, resultArr)
                    break;

                   
                }else{
                    console.log("letter",string[j])
                }
            }
            // console.log(word, "word")
        }else{
             //if it is a space, unshift it to the array
             resultArr.unshift(string[i])
        }

      
    }

    console.log(resultArr)

   

    //convert array to a string

}

reverseWordInString("hello world")

//"tim is great!" => "great! is tim"
//"whitespaces     4" => "4 .   whitespaces"
