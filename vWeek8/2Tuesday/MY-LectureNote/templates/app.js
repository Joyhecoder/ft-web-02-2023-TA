const PORT = 3000
const express = require('express');
const app = express()


app.use(express.static('public')) //hold all of our static resource in a folder called public
app.set('view engine', 'ejs')


//MVC 
//model viewer controller

//middleware to grab the index.js
app.use(require('./routes/index'))

app.use(require('./routes/faq'))

app.use(require('./routes/city'))

app.use(require('./routes/aboutUs'))

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
 })