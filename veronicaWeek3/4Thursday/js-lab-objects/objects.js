//* 1. Create an object representing a book, with properties for its title, author, and number of pages.
//* The title of the book is To Kill a Mockingbird written by Harper Lee and has 281 pages.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
}



//* 2. Given the following person object
let person = {
    name: 'Jane',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    }
  };

//* Write code to do the following:

//* Print the person's name name
// console.log(person.name)

//* Print the person's city
// console.log(person.address.city)

//* Print the person's state
// console.log(person.address.state)

//* Add a lastName key of Doe to the person object.
person.lastName = "Doe"
// console.log(person)


//* Change the name in the person object it John.
person.name = "John"
// console.log(person)

//* Update the street key in the person object to : 456 Main St.
person.address.street = "456 Main St."
// console.log(person)


//* Remove the zip key from the person object
delete person.address.zip
// console.log(person)



//* 3. Phonebook object

let phonebook_obj = {
    Alice: '703-493-1834',
    Bob: '857-384-1234',
    Elizabeth: '484-584-2923'
  }

//* Write code to do the following:

//* Print Elizabeth's phone number.
// console.log(phonebook_obj.Elizabeth)


//* Add an entry to the dictionary: Kareem's number is 938-489-1234.
phonebook_obj.Kareem = "938-489-1234"
// console.log(phonebook_obj)


//* Delete Alice's phone entry.
delete phonebook_obj.Alice
// console.log(phonebook_obj)


//* Change Bob's phone number to '968-345-2345'.
phonebook_obj.Bob = "968-345-2345"
// console.log(phonebook_obj)


//* Print all the phone entries.
for(person in phonebook_obj){
    
    // console.log(`${person}'s number is ${phonebook_obj[person]}`)

}


//* 4. Nested objects
let ramit = {
    name: 'Ramit',
    email: 'ramit@gmail.com',
    interests: ['movies', 'tennis'],
    friends: [
      {
        name: 'Jasmine',
        email: 'jasmine@yahoo.com',
        interests: ['photography', 'tennis']
      },
      {
        name: 'Jan',
        email: 'jan@hotmail.com',
        interests: ['movies', 'tv']
      }
    ]
  }

//* Write a js expression that gets the email address of Ramit.
// console.log(ramit.email)

//* Write a js expression that gets the first of Ramit's interests.
// console.log(ramit.interests[0])

//* Write a js expression that gets the email address of Jasmine.
// console.log(ramit.friends[0].email)


//* Write a js expression that gets the second of Jan's two interests.
// console.log(ramit.friends[1].interests[1])


//* 5. Given an array of objects representing people, extract an array of just their ages.
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  for(let obj of people){
    // console.log(obj.age)
  }



  //* 6. Given an array of objects representing books, extract an array of just their titles.


const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' }
  ];

  for(let book of books){
    // console.log(book.title)
  }

  //* 7. Given an array of objects representing cars, extract an array of just their colors.

  const cars = [
    { make: 'Toyota', model: 'Corolla', color: 'red' },
    { make: 'Honda', model: 'Civic', color: 'blue' },
    { make: 'Ford', model: 'F-150', color: 'black' }
  ];

  for(let car of cars){
    // console.log(car.color)
  }
