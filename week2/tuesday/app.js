//array

// let names = ['John', 'Alex', 'Mary', 'Steven']
// console.log(names);

// let numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers);


//access items of the array

// console.log(numbers[2]);
// console.log(numbers[6]);   //return undefined as there is no index of 6 in array numbers

//iterate through the array

//!for(start of the loop; condition; how the loop increments)
// for(let num of numbers){
//     console.log(num);
// }

// let animals = ['cat', 'dog', 'rabbit']
// for(let i=0; i < animals.length; i++){
//     console.log(animals[i]);
// }

// for(let creature of animals){
//     console.log(creature);
// }

//add items into array
//!add item to the end
// numbers.push(1024)
// console.log(numbers);

//!add item to the beginning
// numbers.unshift(0)
// console.log(numbers);

//!delete item from the last
//let deletedItem = numbers.pop()

//!insert item at a particular position
let friendArr = ['John', 'mary', 'Joe']
//splice(index, how many to delete, item to add)
friendArr.splice(1,0,'Hank')
console.log(friendArr);

//!delete item from friendArr array
// delete friendArr[0]
// console.log(friendArr);


//!while loop

let counter = 1
while(counter < 10){
    console.log(counter);
    counter++
}

//!taking input and addint it to an array
// let toDos = []
// while(true){
//     let todoItem = prompt('Enter todo items:')
//     toDos.push(todoItem)
//     let choice = prompt('enter q to quit or any key to continue')
//     if(choice == 'q'){
//         break
//     }
// }

// console.log(toDos);

// let friends =[]
// while(true){
//     let friendName = prompt('Enter a friend name: ')
//     friends.push(friendName)
//     let choice = prompt('enter q to quite or any key to continue')
//     if(choice == 'q'){
//         break
//     }
// }

// console.log(friends);

