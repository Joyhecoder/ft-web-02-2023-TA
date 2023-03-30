//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/
let phoneBook = [
  {
    name: "Joy",
    number: "222-222-2222"
  },
  {
    name: "Jo",
    number: "222-222-2223"
  }
]

let choice = 0

function menu(){
  choice = Number(prompt(`
  Electronic Phone Book
  =====================
  1. Look up an entry
  2. Set an entry
  3. Delete an entry
  4. List all entries
  5. Quit
  
  What do you want to do (1-5)?
  `))
}

function lookUp(){
  let personName = prompt("Who are you looking up? Enter the person's name: ")
  for(let person of phoneBook){
    if(person.name == personName){
      console.log(`
      ${personName}'s phone number is ${person.number}
      ************************************************`)
    }else{
      console.log(`
      There is no information for ${personName}
      *****************************************`)
    }
  }
}

function setAnEntry(){
  let personName = prompt("What's the name of the person you want to set an entry for:  ")
  let number = prompt(`What's ${personName}'s phone number: `)
  let setOfContact = {}
  setOfContact.name = personName
  setOfContact.number = number
  phoneBook.push(setOfContact)
  console.log(phoneBook)
}



while(choice !== 5){
 menu()

if(choice == 1){
  lookUp()
}else if(choice == 2){
  setAnEntry()
}

menu()

}

