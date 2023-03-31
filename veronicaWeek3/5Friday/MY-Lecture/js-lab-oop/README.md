# JavaScript Object Oriented Programming Lab Exercises

In this lab, you are going to practice the basics of creating **Object Oriented Programming**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core principles. 

## Objectives 
- Create classes.
- Instantiate objects with constructors.
- Customize classes with properties and methods.
- Extend base classes and overrides method in subclasses.

## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-lab-oop) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialogue box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-lab-oop.git
```

- Navigate into the folder titled `js-lab-oop`
- Open the file called `oop.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```


## Problems 

#### 1. Create a class
- Create an empty class called `Student`

#### 2. Create Objects
- Create 5 students objects (instances of the class `Student`) of `Student` type.

#### 3. Create a method
- Create a `greeting` method inside of the class `Student` class with a `name` parameter. The return of the method should be the string:

```js
`Good morning ${name}`
``` 

#### 4. Call the greet method
- Call the greet method on each of the students in #2 passing in a different
name argument each time. 
- Since the method is returning a string, how would you output the result to your terminal?

#### 5. Constructor 
- Create a constructor for the `Student` class. 
- Create a print statement inside of the constructor with the string **"Hello World"**.
- Run your `oop.js` again and you should see a print statement for each student object that you created. Why did this happen? 

#### 6. Adding instance variables to constructor
- Pass in `name` as a parameter to your `Student` constructor. 
- Create an instance variable for `name`.
- The instance variables now require that you pass in a `name` when created.  Refactor your object instances in #2 by passing in a `name` to each instance. 
- Refactor the print statement in your constructor like and run your program.
```js
`Good morning ${this.name}`
``` 
You should see a print statement for each name you passed into your object instances. How did this happen?

- Refactor your greeting method by updating the returned string 

```js 
`Good morning ${this.name}`
```

- Call the greet method on one of your instance objects and print the results to the screen.  What gets printed?
- Call the greet method on a different instance object and print the results to the screen.  What gets printed?


## Inheritance 

#### Car Class
Create a new class called `Car` with the following method :

`CarDetails` which prints "Here are details of this car"

#### Hybrid Class
Create a new class called `Hybrid` that inherits from the `Car` class with the following method: 
 
`CarType` which prints "I am a hybrid car" 


#### Electric Class
Create a new class called `Electric` that inherits from the `Car` class with the following  method: 

`CarType` which prints "I am a hybrid car" 

#### Using Inheritance
- Create a Hybrid instance and an Electric instance
- Call the method CarType on the Hybrid Instance and Electric Instance 
- Call the method Car Details on each instance


Add the following instance variables to the Car class :
- make 
- model 
- color
