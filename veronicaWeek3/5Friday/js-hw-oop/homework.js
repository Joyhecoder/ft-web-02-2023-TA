



//*Create a class called User which consists of (firstName, lastName) properties.
class User{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
        this.addressArr = []

      
    }
    addAddress(address){
        this.addressArr.push(address)
        // console.log(this.addresses)
    }
    displayAddresses(){
        console.log(this.addressArr)
    }
}


//* Create a class name Address which consists of (street, city, state, zip_code) properties.
class Address{
    constructor(street, city, state, zip_code){
     
        this.street = street
        this.city = city
        this.state = state 
        this.zipCode = zip_code
    }
}
let joy = new User("Joy", "he")
// console.log("joy", joy)
let add1 = new Address( "123 street", "Houston", "TX", 77449)
let add2 = new Address("223 street", "Houston", "TX", 77449)
// console.log("add1", add1)
joy.addAddress(add1)
joy.addAddress(add2)
joy.displayAddresses()
console.log(joy)


//* Create a relationship between User and Address in a way a single user can have multiple addresses.









class Person{   
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }       
    greet(other_person){
        console.log(`Hello ${other_person.name}, I am ${this.name}`)
    }
    printContactInfo(){
        console.log(`${this.name}'s email: ${this.email}, ${this.name}'s phone number: ${this.phone}`)
    }
}


//* Instantiate an instance object of Person with

//* name of 'Sonny',
//* email of 'sonny@hotmail.com', and
//* phone of '483-485-4948', store the information in the variable sonny.
let sonny = new Person("Sonny", 'sonny@hotmail.com', '483-485-4948' )


//* Instantiate another person with the

//* name of 'Jordan',
//* email of 'jordan@aol.com', and
//* phone of '495-586-3456', store it in the variable jordan.

let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456')

//* Have sonny greet jordan using the greet method.
sonny.greet(jordan)


//* Write a print statement to print the contact info (email and phone) of Sonny.
// console.log(sonny.email, sonny.phone)

//*Add a printContactInfo method to the Person class that will print out the contact info for a object instance of Person. You will use it thus:
sonny.printContactInfo()