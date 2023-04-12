// ***Object Destructuring

// Extract values from an object and storing them in variables
const user = { name: "John", age: 30, email: "john@example.com" };

// const {name, age, email} = user
// console.log(name, age, email)


/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
var obj = {
    x: 5,
    y: 20,
    z: 3
}


function mult(obj){
    const {x, y ,z} = obj
    return x*y*z
}
// console.log(mult(obj));


// Destructuring nested objects
// destructure the Name, city and state for the following user

const user2 = {
    name: "John",
    age: 30,
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"
    }
  };

  //? method 1:
//   const {name, age, email, address} = user2
//   const {street, city, state, zip} = address
//   console.log("45", name, city, state)

//? method 2:
// let {name, address: {city, state}} = user2
// console.log(name, city, state)

// Using default values in destructuring
// extract the name, age and email (not provided) for the following user 

const user3 = { name: "John", age: 30, email: "john@me.com" };
// let {name, age, email="No email provided"} = user3
// console.log(name, age, email)
// Renaming variables during destructuring 
// rename the variable name to fullName and email to userEmail

const user4 = { name: "John", age: 30, email: "john@example.com" };
// let {name: fullName, age, email:userEmail} = user4
// console.log(fullName, age, userEmail)
/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantitiy: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}

const person = (obj) => { 
    let {name: n, info:{country: c, age: a}, postsQuantitiy:p = 0} = obj
    console.log(n, c, a, p)
 }
// const person = obj => {
//     let {name:n, info:{country:c, age:a}, postsQuantitiy:p=0} = obj

//     console.log(n, c, a, p);
// }

// person(person1)
// person(person2)


/**
 * This function uses destructuring for argument parsing. But it has a problem: it crashes when the caller passes an option object without an enable property. Since all options have defaults, we'd like to not crash in this case. Can you think of a clean way to fix this problem?
 */

 function go(options) {
    let {speed = 4,
         enable:  {hyperdrive = false,
                  frobnifier = true} = {}} = options


                  
    console.log("speed=", speed,
                "hyperdrive:", hyperdrive,
                "frobnifier:", frobnifier)
  }
  
  go({speed: 5})
  go({enable: {hyperdrive: true, frobnifier: true}})

