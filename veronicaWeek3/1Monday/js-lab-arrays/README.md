# JavaScript Array Lab Exercises

When you need to keep track of many values of the same kind (e.g, book titles, favorite movies, groceries to buy), it makes more sense to create a single variable that can hold multiple values.  In this homework, you are going to practice the basics of creating **arrays**, using JavaScript as a programming language, by completing problems that will challenge your knowledge of core princples. 

## Objectives 

- Practice writing arrays
- Use indexing to access individual locations in an array
- Update an array
- Delete an element from an array
- Iterate through arrays using for-loops
- Iterate through arrays using while-loops


## Instructions 

- **Fork** this repo to your account by clicking on the **fork** Button at the top of this page. 

![](https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png)

*A **fork** is a copy of this repository. This forked repository will appear on your github account.*

- Find the repository on *YOUR* account (ie yourUserName/js-lab-arrays) and click on the green `Code` button at the top of the page.

![](./images/githubCodeButton.png)

- Copy the path in the dialoge box
- Navigate to a location on **your local computer in VSCode** where you keep your homework 
- Clone this repsository by typing the following command in your terminal

```
clone [`path that you just copied`]
```

For example: 

```bash 
clone https://github.com/DigitalCraftsStudents/js-lab-arrays.git
```

- Navigate into the folder titled `js-lab-arrays`
- Open the file called `arrays.js` and solve the lab problems 
- To run a file javascript file using node, you can run it from your terminal like this:

```bash
$ node loops.js
```


## Problems

1. Create a new array called `planets` that holds all of the names of the planets
in our solar system. Print the list of planets on the command line.

```js 
let planet1 = "Earth"
let planet2 = "Jupiter"
let planet3 = "Neptune"
let planet4 = "Mars"
let planet5 = "Saturn"
let planet6 = "Mercury"
let planet7 = "Uranus"
let planet8 = "Venus"

```

2. What is the index of **Mars**?

3. Print **Mars** to the command line from the `planet` array.

4. Print **Saturn** to the command line from the `planet` array.

5. Print **Venus** to the command line from the `planet` array.

6. Print out how many elements are in the `planet` array.

7. Loop through the `planet` array using a for loop and print the name of each planet.

8. Create a while loop that iterates through each of the items in the `planet` array
and changes each element to lowercase.

9. Add **Pluto** to the `planet` array.

10. Loop through each planet in the `planet` array and print them on the command line.

11. Since **Pluto** isn't really a planet, delete it from the `planet` array.

12. Loop through the `planet` array and print the updated values (Pluto removed).

13. Create a new array called `nums` with the following values

```text
6, 8, 10, 12, 14, 16
```

14. Loop through `nums`  and print each number to the command line. 

15. Add 99 to the end of the `nums` array.

16. Add 23 to the beginning of the `nums` array. 

17. Loop through `nums` and multiply each number by 5. 

18. Sum all of the elements of the `nums` array.




