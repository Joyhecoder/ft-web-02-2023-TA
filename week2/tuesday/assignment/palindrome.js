let word = prompt('Enter a word: ')

//convert word string to array
let wordArray = word.split("")
console.log(wordArray);

//reverse word array
let reversedWordArray = []

for(let i= wordArray.length-1; i>= 0; i--){
    reversedWordArray.push(wordArray[i])
}

console.log(reversedWordArray);

//convert reversedWordArray to string

let reversedWord = reversedWordArray.join('')
console.log(reversedWord);

if(word == reversedWord){
    console.log(`${word} is Palindrome`);
}else{
    console.log(`${word} is NOT Palindrome`);
}

