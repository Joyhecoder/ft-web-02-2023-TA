// let justin = {
//     firstName: "Justin",
//     city: "Phoenix",

// }

// let kelly = {
//     firstName: "Kelly",
//     city: "Houston"
// }

//create a class
 class Student {
    constructor(firstName, city){
        this.fName = firstName;  //"this" is the reference to the memory
        this.city = city;          // this.city is an instance variable

        //initialize data
        console.log("inside of my constructor")
    }

    greeting(){  //this is instance methods
        console.log("hello world")
    }
 }


 //* initiates an object
//  let jordan = new Student("Jordan", "Nashville") //jordan is object, jordan is an instance of the class Student
//  let kelly = new Student("Kelly", "Houston")
// jordan.greeting()

// console.log(jordan)
// console.log(kelly)




class Person{
    constructor(name, surname, birthdate, address, telephone, email){
        this.name = name
        this.surname = surname
        this.birthdate = birthdate
        this.address = address
        this.telephone = telephone
        this.email = email
    }

    age(){
        let today = new Date()
        let age = today.getFullYear() - this.birthdate.getFullYear()    //this.birthdate is an instance variable

        return age
    }
}




let person = new Person(
    "Jane",
    "Doe",
    new Date(1992, 3, 12), // year, month, day
    "No. 12 Short Street, Greenville",
    "555 456 0987",
    "jane.doe@example.com"
)

// console.log(person.age())



//?inheritance 

class Animal{
    constructor(){
        console.log("This is my parent class")
    }
}

class Dog extends Animal{
    woof(){
        console.log("woof")
    }
}

class Cat extends Animal{
    meow(){
        console.log("meow")
    }
}

// let fido = new Dog()
// let boba = new Cat()




class WillSmith{
    constructor(){
        console.log("this is will smith's constructor")
    }
    acting(){
        console.log("Will Smitch kinda knows how to act")
    }
 }

 class JaydenSmith extends WillSmith{
    constructor(){
        super()
        console.log("this is jayden constructor")
    }
    acting(){
        super.acting()
        console.log("Jayden Smitch kinda knows how to act")
    }
 }

 let dad = new WillSmith()
//  dad.acting()

 let son = new JaydenSmith()
 son.acting()