# JavaScript Conditionals Homework Exercises

In this homework assignment, you are going to practice the basics of writing **conditional statements**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 

- if/else if/else statement syntax
- Condition expressions
- Comparison operators
- Combining conditions with logical operators


## Instructions 

- **Fork** this repo to your account by cliking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-lab-conditionals) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-hw-conditionals.git
```

- Navigate into the folder titled `js-hw-conditionals`
- Open the file called `homework.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node homework.js
```

## Problems 

## Work or Sleep In 
Write a script that asks for a day of the week. If the day is a business day, print 'go to work!'. If the day is a weekend day, print 'sleep in!'. If whatever the user entered is not a day, print 'enter a valid day'.

## Secret Password
Write a script that asks the user for a password. If the user enters the correct word (pick one yourself) then print 'Welcome!', otherwise print 'Try Again!'

## Day of Week
Write a script that asks the user for a number between 1-7. Print the corresponding day for the number, (i.e. 1 = 'Sunday', 2 = 'Monday' etc). If the input is invalid, print an error message.

## Letter Grade
Write a script that asks for a score number between 0-100. Print the corresponding grade for that number. (i.e. <60 = F, <70 = D, <80 = C, <90 = B, 90+ = A). If the input is invalid, print an error message.

## Picnic Game
Write a script that asks the user for their name. Ask them for the food they are bringing to the picnic. Check if two input strings start with the same letter.  If it does, tell them they can come to the party. If it doesn't, tell them to try again.

## Username length validator
Write a script that accepts a parameter username, and checks if the username is valid. A valid username must be longer than 3 characters and less than 18. 

## Odd and Divisible by 3
Write a script that asks the user for a number, then checks if the input number is odd and divisible by 3.

## Uppercase or Lowercase?
Write a program that prompts the user for a letter and checks if it is uppercase or lowercase.

## Convert Temperature
Write a program that prompts the user for a temperature in Fahrenheit and converts it to Celsius.


## Tip Calculator
Your task is to write a program that calculates how much of a tip to leave at a restaurant.

Prompt the user for two things:

The total bill amount
The level of service, which can be one of the following: good, fair, or bad
Calculate the tip amount and the total amount (bill amount + tip amount). The tip percentage based on the level of service is based on:

good -> 20%
fair -> 15%
bad -> 10%
Example session:

```bash
$ node homework.js
Total bill amount? 100
Level of service? good
Tip amount: $20.00
Total amount: $120.00
```

```bash 
$ node homework.js
Total bill amount? 48
Level of service? bad
Tip amount: $4.80
Total amount: $52.80
```

Hints:

Remember that you need to convert the input from the user input to a number. 

## Tip Calculator 2 

Allow the ability to divide the check into a equal parts amount a number of people. The user will enter the number of people to be divided amongst. Example session: 

```bash 
$ node homework.js
Total bill amount? 100
Level of service? good
Split how many ways? 5
Tip amount: $20.00
Total amount: $120.00
Amount per person: $24.00

```











