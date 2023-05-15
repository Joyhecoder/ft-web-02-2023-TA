const express = require('express');
const app = express()
const helmet = require('helmet')
let PORT = 3000


//request ====> middleware ===> route
//middleware 

/**
 * [
 * public,
 * helmet
 * 
 * ['/', '/about']
 * ]
 * 
 */

// app.arguments(express.static('public'))

// app.use(helmet())

app.use((req, res, next)=>{
    console.log('first cb function')
    next()
})
app.use((req, res, next)=>{
    console.log('second cb function')
    next()
})
app.use((req, res, next)=>{
    console.log('third cb function')
    next()
})

const authLogin = (req, res, next) => {
    let passwordIsValid = false;
    if(passwordIsValid){
        next()
    }else{
        next(new Error('there was an error!!!'))
    }
}
//app.all can execute all the function on the '/' routes
app.all('/', (req, res, next) => {
    console.log('log some information')
    next()
})

app.get('/', (req, res, next) => {

    next(new Error('there was an error'))
    // res.send('home page')
})

app.get('/aboutus',authLogin, (req, res, next) => {
    res.send('about us')
})

app.use((err, req, res, next) => {
    console.log('an error has occured')
    res.send('there was an error')
})

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)

})