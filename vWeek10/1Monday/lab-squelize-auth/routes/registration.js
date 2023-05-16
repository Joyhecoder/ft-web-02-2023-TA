
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); //hash and salt our password bcrypt

const db = require('../models')  //models/index.js

router.use(express.urlencoded({extended: false}))
router.use(express.json())

//collect info username, password from registration form
//encrypt password
//insert record into db
//redirect user to login
router.get('/registration', (req,res) => {

    res.render('registration', {
        error: ""
    })
})

router.post('/registration', async (req, res) => {
    try {
        //collect data from form and store it in our db
        let {username, email, password} = req.body

        password = bcrypt.hashSync(password, 8)  //a salted hash

        //create a new record in our db
        let insertRecord = await db.users.create({
            //* username: username,
            username,
            //* email: email,
            email,
            //* password: password,
            password,
            roleID: 1
        })

        res.redirect('/login')


    } catch (error) {
        res.render('registration', {
            error: "error: can't register this username"
        })
    }
    
})



module.exports = router;
