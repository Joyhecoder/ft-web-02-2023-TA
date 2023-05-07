const PORT = 3000
const express = require('express');
const app = express()
const io = require('socket.io')();

app.use(express.static('public')) //hold all of our static resource in a folder called public

//install ejs templates
app.set('view engine', 'ejs')


//MVC 
//model viewer controller

//middleware to grab the index.js
app.use(require('./routes/index'))

app.use(require('./routes/chat'))

app.use(require('./routes/feedback'))

app.use(require('./routes/speakers'))

const server = app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
 })

 io.attach(server);
 io.on('connection', (socket) => { 
    socket.emit('chatMessage', {msg: "Hello from our backend"})

    socket.on('postMessage', (data) => { //this is waht our client sends to the server
        io.emit('updateMessages', data) //broadcasting our to all listening clients 

     })

     socket.on('disconnect', (user) => { 
        io.emit("user has left the room")
      })
  })