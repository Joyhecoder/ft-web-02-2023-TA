let cars = []
let chevy = {make: 'chevy', model: 'cobalt'}
let honda = {make: 'Honda', model: 'Accord'}

// cars.push(chevy, honda)
// console.log(cars)

// for(let car of cars){
//     console.log(car)
//     console.log(car.make)
// }

//!CLASSES

//class represents a blue print
// Car(Class = Blueprint)
// -make 
// -model
// -vin

//when you use a blue print to create an actual concrete car that is known as an object

class Car {
    constructor(make, model){
        this.make = make
        this.model = model
    }
}

let myCar = new Car("Honda", "Accord")  //creating an object of Car class //? "new" is telling you that you are creasting object
// console.log(myCar.make, myCar.model)

let car2 = new Car("Toyota", "Camry")
// console.log(car2)

class Table {
    constructor(width, height, material){
        this.width = width
        this.height = height
        this.material = material
    }
}

//creating an object/instance of a Table
let cherryWoodTable = new Table(10, 20, "wood")
// console.log(cherryWoodTable.width, cherryWoodTable.material)
//change a value to a property
cherryWoodTable.width = 8
// console.log(cherryWoodTable.width)



//A company can have many employees 
class Company {
    constructor(name){
        //this means that the property will be available to the objects of type Company
        this.name = name
        this.employees = []
    }
}

class Employee {
    constructor(fName, lName){
        this.fName = fName
        this.lName = lName
        this.hoursWorked = 0
        this.eligibleForBonus = false
    }

    work() {
        //increment hours worked by 8 hours
        this.hoursWorked += 8

        if(this.hoursWorked > 40){
            this.eligibleForBonus = true
        }
    }

}

let company = new Company('HEB')
console.log(company.name)

let employee = new Employee("John", "Doe")
console.log(employee.hoursWorked)
employee.work()
employee.work()
employee.work()
employee.work()
employee.work()
employee.work()
console.log(employee.hoursWorked)
console.log(employee.eligibleForBonus)

let employee2 = new Employee("Joy", "Doe")

company.employees.push(employee, employee2)
console.log(company.employees[0].fName)


//activity2 User and Address

class User {
    constructor(fName, lName){
        this.fName = fName
        this.lName = lName
        this.address = []
    }
}
class Address {
    constructor(street, city, state, zipCode){
        this.street = street
        this.city = city
        this.state = state
        this.zipCode = zipCode
    }
}

let gamer = new User("joy", "doe")
let address1 = new Address('123 street', 'houston', 'tx', '77098')
let address2 = new Address('456 street', 'denver', 'co', '33209')
gamer.address.push(address1, address2)
console.log(gamer)
let addressArr = gamer.address
console.log(addressArr)
for(let eachAddress of addressArr){
    console.log(eachAddress)
    console.log(eachAddress.street)
}


