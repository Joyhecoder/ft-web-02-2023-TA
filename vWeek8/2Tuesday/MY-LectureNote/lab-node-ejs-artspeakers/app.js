const PORT = 3000
const express = require('express');
const app = express()

app.use(express.static('public')) //hold all of our static resource in a folder called public

//install ejs templates
app.set('view engine', 'ejs')


//MVC 
//model viewer controller

//middleware to grab the index.js
app.use(require('./routes/index'))

// app.use(require('./routes/chat'))

// app.use(require('./routes/feedback'))

app.use(require('./routes/speakers'))

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
 })