//* 1. Create a class
//* Create an empty class called Student

class Student {
    constructor(name){
        this.name = name
        console.log(`Good morning ${this.name}`)
    }
    greeting(name){
        return`Good morning ${name}` 
    }
}

//* 2. Create Objects
//* Create 5 students objects (instances of the class Student) of Student type.
let s1 = new Student("Kelly")
let s2 = new Student("Mo")
let s3 = new Student("Justin")
let s4 = new Student("Katie")
let s5 = new Student("Hunter")


//* 3. Create a method
//* Create a greeting method inside of the class Student class with a name parameter. The return of the method should be the string:

//*4. Call the greet method
//* Call the greet method on each of the students in #2 passing in a different name argument each time.
//* Since the method is returning a string, how would you output the result to your terminal?

// console.log(s1.greeting("Veronica"))
// console.log(s2.greeting("Veronica"))
// console.log(s3.greeting("Veronica"))
// console.log(s4.greeting("Veronica"))
// console.log(s5.greeting("Veronica"))




//* 5. Constructor
//* Create a constructor for the Student class.
//* Create a print statement inside of the constructor with the string "Hello World".
//* Run your oop.js again and you should see a print statement for each student object that you created. Why did this happen?



//* 6. Adding instance variables to constructor
// *Pass in name as a parameter to your Student constructor.
//* Create an instance variable for name.
//* The instance variables now require that you pass in a name when created. Refactor your object instances in #2 by passing in a name to each instance.
//* Refactor the print statement in your constructor like and run your program.





//!Inheritance 
//* Car Class
//* Create a new class called Car with the following method :
class Car{
    constructor(make, model, color){
        this.make = make
        this.model = model
        this.color = color
    }
    carDetails(){
        console.log(`
        Here are details of this car:
        Make: ${this.make},
        Model: ${this.model},
        color: ${this.color}`)
    }
}

class Hybrid extends Car {
    constructor(make, model, color, mpg){
        super(make, model, color)
        this.mpg = mpg
    }
    carDetails(){
        super.carDetails()
        console.log(`Mile per gallon: ${this.mpg}`)
    }
    carType(){
        console.log("I am a hybrid car")
    }
}

class Electric extends Car {
    constructor(make, model, color){
        super(make, model, color)
      
    }
    carType(){
        console.log("I am an electric car")
    }
}


//* Using Inheritance
//* Create a Hybrid instance and an Electric instance

let prius = new Hybrid("Toyota", "S", "Red", "55mpg")
let tesla = new Electric("Tesla", "model S", "Teal")



//* Call the method CarType on the Hybrid Instance and Electric Instance
prius.carType()
tesla.carType()


//* Call the method Car Details on each instance
prius.carDetails()
tesla.carDetails()



//*Add the following instance variables to the Car class :

// make
// model
// color

