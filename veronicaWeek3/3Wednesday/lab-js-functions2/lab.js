//* 1. Write a function called "greeting" that prints "hello world" to the console
function greeting(){
    console.log("Hello world")
}


//* 2. Execute (call/ run) the "greeting function"
// greeting()

//* 3. reduce this code using functions
function classInfo(day, lecture){
    console.log(`${day}: Students in SRE class`)
    console.log(`lecture: ${lecture}`)
    console.log("Shu")
    console.log("Thomas")
    console.log("Gustavo")
    console.log("Alim")
}

// classInfo("Day 1", "git 101")
// classInfo("Day 2", "git 102")
// classInfo("Day 3", "python 101")



//* 5. Nested Functions
function difference(num1, num2){
    return num1 - num2
}
let test1 = difference(2,2)
let test2 = difference(0,2)
// console.log(test1, test2)


//* 6. Write a function called product that takes in two parameters and returns the product between of the two.

function product(num1, num2){
    return num1 * num2
}
let test3 = product(2,2)
let test4 = product(0,2)
// console.log(test3, test4)


//* 7. Write a function called print_day that takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return None

function print_day(num){
    switch (num) {
        case 1:
            return "Monday"
            break;
    
        case 2:
            return "Tuesday"
            break;
    
        case 3:
            return "Wednesday"
            break;
    
        case 4:
            return "Thursday"
            break;
    
        case 5:
            return "Friday"
            break;
    
        case 6:
            return "Saturday"
            break;
    
        case 7:
            return "Sunday"
            break;
    
        default:
            return "None"
            break;
    }
}

let test5 = print_day(4) 
let test6 = print_day(41)
// console.log(test5, test6)


//* 8. Write a function called lastElement that takes in one parameter (an array) and returns the last value in the array. It should return Undefined if the list is empty.
function lastElement(arr){
    if(arr.length === 0){
        return "None"
    }else{
        return arr[arr.length-1]
    }
}

let test7 = lastElement([1,2,3,4]) // 4
let test8 = lastElement([]) // None

// console.log(test7, test8)


//* recommendation letter
function letter(fName, lName){
    return `
Karen Jones 1234 Park St Anytown, Pennsylvania 12345

April 14, 2019

ABC College Admission’s Board 1234 Butler Ave Everywhere, CA 12345

Dear ABC College Admission’s Board:

My name is Karen Jones. I have served as a science teacher at Parktown High School for the past fifteen years and have had the privilege to serve as ${fName} ${lName}’s teacher for the past three. I have also been ${fName}’s advisor on the science academic team here at school. Due to his qualifications, I feel that ${fName} would be an excellent addition to your school.

While he has been a student here, ${fName} has always challenged himself academically, taking all of the AP courses that our school has to offer. He has been captain of the academic team for the past two years, showing strong leadership qualities and organizational skills. His superior written and verbal skills have far surpassed any student of his age.

${fName} would bring much to your school, both in and out of the classroom. If you have any questions regarding Ryan’s qualifications, please contact me at (123) 555-5555 or at Karen.Jones@email.com.

Sincerely,

Karen Jones Science Department Head Park Town High School
    `
}

let person = letter("Joy", "Nguyen")
// console.log(person)