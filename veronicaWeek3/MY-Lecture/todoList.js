const prompt = require('prompt-sync')({sigint: true});

let todos = [] //how to store our information from our user
let choice

//* functions    
const choiceFunction = () => { 
    choice = Number(prompt("What do you want to do: 1. Add a todo list item; 2. Display my todo list; 3. Update a todo item; 4. Remove an item; 5. Bye"))
 }

 const addItem = () => { 
    let item = prompt("Please add an item: ")
    todos.push(item)
  }

 const displayTodo = () => { 
   console.log(todos)
  }

  const updateItem = () => { 
    let index = Number(prompt("enter the number of the item that you want to update: "))
    let updatedItem = prompt("what do you update it to? ")
    todos[index - 1] = updatedItem


   }

   const removeItem = () => { 
    let index = Number(prompt("enter the number of the item that you want to delete: "))
    todos.splice(index-1, 1)
 
    }

    

//* steps: 
    choiceFunction()
    while(choice !=5){
        if(choice ==1){
            addItem()
        }else if(choice ==2){
            displayTodo()
        }else if(choice ==3){
            updateItem()
        }else if(choice == 4){
            removeItem()
        }else{
            console.log("Please enter a valid number")
            
        }
        choiceFunction()
    }
    if(choice == 5){
        console.log("bye")
    }
 



//1. prompt our user to make a choice

  //?1. add a todo list item

       //prompt them for the item that they want to add
        //take the item(string) and push it to our list
        //want to display our list
  

      //?2. update a todo list item
        //print out a list of items by numbers for them to choose
        //cast chosen number to an integer
        //inter -1 to access array value
        //prompt the user for the updated input
        //: todos[index-1] = new value

     //?3. remove a todo list item

     

 

     //?4. end program