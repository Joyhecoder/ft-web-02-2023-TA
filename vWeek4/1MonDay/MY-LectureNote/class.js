//! campus student

class Student {
    constructor(firstName, city){

        //?instance variables
        this.firstName = firstName
        this.city = city
    }

    printStudent(){
        console.log(`${this.firstName} lives in ${this.city}`)
    }
}

class Campus {
    constructor(){

        //?instance variables
        this.students = [] //hold all of our student instances
        //[{firstName, city}, {}, {}]
    }

    addStudent(name, cityVal){

        //create an instance of student
        let studentObj = new Student(name, cityVal)

        //add student instance to array this.students
        this.students.push(studentObj)
    }

    printStudentName(){
        //loop through my array and print each name
        for(let studentObj of this.students){
            console.log(studentObj.firstName)
        }
    }

    numOfStudents(){
        return this.students.length
    }
}

let dc = new Campus();

dc.addStudent('Katie', "Altanta")
dc.addStudent('Ethan', "Miami")
dc.addStudent('Jordan', "Nashville")
dc.addStudent('Mohammond', "Houston")
dc.addStudent('Justin', "Phonix")

// dc.printStudentName()



class BankAccount{
    constructor(name, balance){
        this.name = name
        this.balance = balance
    }
}

class Bank{
    constructor(name, address){
        this.name = name
        this.address = address
        this.accountHolders = []
    }

    addAccountHolder(name, balance){
        let account_obj = new BankAccount(name, balance)
        this.accountHolders.push(account_obj)

    }

    searchByName(name){
        this.accountHolders.forEach(obj =>{
            if(obj.name == name){
                console.log(obj)
            }
        })
    }

    totalBankBalance(){
        let sum = 0
        for(let account of this.accountHolders){
            sum += account.balance
        }
        console.log(`Total Bank Balance is ${sum}`)
    }

    allMembers(){
        for(let account of this.accountHolders){
            console.log(account.name)
        }
    }

    highestAccount(){
        let high = 0
        let highAccount
        for(let account of this.accountHolders){
            if(account.balance > high){
                high = account.balance
                highAccount = account
            }
        }
        console.log(`Highest Account holder is ${highAccount.name}, with a balance of $${highAccount.balance}`)
    }


}



//!bank account practice 

let wellsFargo = new Bank("Wells Fargo", "123 Houston St")

//*add an account holder
wellsFargo.addAccountHolder('Joy', 123)
wellsFargo.addAccountHolder('Veronica', 1230)


//*search by name
// wellsFargo.searchByName('Joy')
// console.log(wellsFargo)


//*total bank balance
// wellsFargo.totalBankBalance()


//*see all of our members
// wellsFargo.allMembers()


//*highest account holder 
// wellsFargo.highestAccount()


//! find two numbers that add up equal to the target
function twoSum(arr, targetSum){
    let cache = {}
    let results = []

    for(let val of arr){
        cache[val] = val
    }
    // console.log(cache)

    for(let i = 0; i < arr.length -1; i++){
        //x = targetSum - y
        let y = arr[i]
        let x = targetSum - y

        if(cache[x] === x && x != arr[i]){
            results.push(arr[i])
        }
    }
    return results
}

let example = twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
console.log(example)


//! arrow function
const add = (num1, num2) => { 
    return num1 + num2

 }