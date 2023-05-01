const express = require('express');
const PORT = 3000
const app = express()

//* Make an express program that will display "Hello, world!" at the root URL: /
app.get('/', (req, res) => { 
    res.send(`<h1>Hello, world!</h1>`)
 })


//*Add to your program the following pages:

//* "Meow" at the URL /cats "Woof" at the URL /dogs "Living together" at the URL /cats_and_dogs

app.get('/cats', (req, res) => { 
    res.send(`<h1>Meow</h1>`)
 })
app.get('/dogs', (req, res) => { 
    res.send(`<h1>Woof</h1>`)
 })
app.get('/cats_and_dogs', (req, res) => { 
    res.send(`<h1>Living together</h1>`)
 })


//*Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
app.get('/greet/:person', (req, res) => { 
    let { person } = req.params
    res.send(`<h1>Hello, ${person}!</h1>`)
 })



//*tell the year your were born
app.get('/year', (req, res) => { 
    let age = req.query.age
    let intAge = parseInt(age)
    let year = 2023 - intAge
    res.send(`You were born in ${year}`)
 })

app.listen(PORT, () => { 
    console.log(`Listening on port: ${PORT}`)
 })