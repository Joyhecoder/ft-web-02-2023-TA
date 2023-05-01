const express = require('express');  //function block
const app = express()  // invoked function returns an object into your variable


let PORT = 3000

app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About Us</h1>")
})

app.get('/faq', (req, res) => {
    res.send("<h1>Frequently Asked Questions</h1>")
})

app.get('/menu', (req, res) => {
    res.send("<h1>Menu</h1>")
})

//cat, cats
app.get('/cats?', (req, res) => {
    res.send('cats')
})

//batwowowowman batwoman batwowoman
app.get('/bat(wo)*man', (req, res) => {
    res.send('batman')
})

// thecat thecats thefancycat thefancycats
app.get('/the(fancy)?cats?', (req,res) => {
    res.send('fancy cats')
})


//*localhost:3000/name?fname=Katie&lname=Toney&city=Atlanta
app.get('/name', (req, res) => { 
    let firstName = req.query.fname
    let lastName = req.query.lname
    let city = req.query.city
    res.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
 })


//todo localhost:3000/name/fname/lname/city   friendly URLs
// localhost:3000/name/Joy/He/Houston
app.get('/name/:fname/:lname/:city', (req, res) => { 
    // let firstName = req.params.fname
    // let lastName = req.params.lname
    // let city = req.params.city
    let {fname, lname, city} = req.params

    res.send(`<h1>${fname} ${lname} lives in ${city}</h1>`)
 })




 let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}


//dog
app.get('/dogs', (req, res) => { 
    let htmlFragment = ""
    let dogsArr = data.data
    dogsArr.forEach((obj) =>{
        htmlFragment += ` 
        <a href="/dogs/${obj.id}"> <h1>${obj.name}</h1> </a>
        <a href="/dogs/${obj.id}"> <img src="${obj.img}" width="400px"> </a>
        
        `
    })
    res.send(htmlFragment)
 })
//localhost:3000/dogs?/id
app.get('/dogs/:id', (req, res) => { 
    let {id} = req.params
    let name = data.data[id].name
    let img = data.data[id].img

    res.send(`
    <h1>${name}</h1>
    <ul>
        <li> <a href="/dogs/0">Golden Retriever</a></li>
        <li> <a href="/dogs/1">Lab</a></li>
        <li> <a href="/dogs/2">Pug</a></li>
        <li> <a href="/dogs/3">Poodle</a></li>
        <li> <a href="/dogs"> Back to home</a></li>
    </ul>

    <img src='${img}' width='400px'>
    `)
 })



 //localhost:3000/calculator/6/34/add
 app.get("/calculator/:num1/:num2/:operator", (req, res) => { 
    let {num1, num2, operator} = req.params
    int1 = Number(num1)
    int2 = Number(num2)
    let answer
    switch (operator) {
        case "add":
            answer = int1 + int2
            break;
    
        case "subtract":
            answer = int1 - int2
            break;
    
        case "multiply":
            answer = int1 * int2
            console.log("anser", answer)
            break;
    
        case "divide":
            answer = int1 / int2
            break;
    
        default:
            break;
    }
    res.send(answer.toString())
  })

// app.listen(port, cb)
app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})