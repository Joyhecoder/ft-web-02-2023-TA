
const express = require('express');
const app = express();
let port = 3000;

//socket.io
const socket = require('socket.io')

app.set('view engine','ejs')


app.get('/', (req, res) => {

    res.render('index')
})



let server = app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

let io = socket(server) //creating a socket server, connecting on tcp layer

//io.on() is an event listener
//sockets represents and individual connection
//io is our socket server
//emit sending a message
io.on('connection', (socket) => { 
    socket.emit("msgFromServer", "Welcome to DC chat")

    //socket.on attaches an event listener to every client connection 
    socket.on('msgFromClient', (clientMsg) => { 
        //braodcast the message from our client to all of the clients that are connected
        io.emit('msgFromServer', clientMsg)
     })


     socket.on('disconnect', (reason) => { 
        io.emit("msgFromServer", "user has left room")
      })
 })


