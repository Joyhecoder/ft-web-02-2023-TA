// build a server
let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]

//shortcut: req
const http = require('http');
const port = 3000

//set up server
const server = http.createServer((request, response) => { 
    response.setHeader('Content-Type', "text/html") //letting the client know we're sending back html

    switch(request.url){
        case '/': //localhost:3000
            // response.setHeader('Content-Type', "text/html") //letting the client know we're sending back html
            response.end(`<h1>Hello World</h1>`)
            break;

        case '/aboutus':
            // response.setHeader('Content-Type', "text/html") //letting the client know we're sending back html
            response.end(`<h1>About us</h1>`)
            break;

        case '/api':
             response.setHeader('Content-Type', "application/json") //send back json data
             let studentsJson = JSON.stringify(students)
             response.end(studentsJson)


        default:
            break;

        


    }
 })

 //turn on our server
 server.listen(port ,() => { 
    console.log(`Server is running on port ${port}`)
  })