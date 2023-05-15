const express = require('express');
let app = express()
const cookieSession = require('cookie-session')
let PORT = 3000

app.use(cookieSession({
    name: 'session',
    keys: ['kdsljfklsdds'],
    maxAge: 14 * 24 * 60 *60 * 1000
}))

//routes
app.get('/', (req, res) => {
    let password = 'Joy'

    req.session.fName = "Veronica"
    req.session.lName = "Lino"

    req.session.password = password

    res.send('home page')
})

app.get('/aboutus', (req, res) => {
    console.log(`my password is: ${req.session.password}`)
    res.send(`about us page: ${req.session.fName} ${req.session.lName}`)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})