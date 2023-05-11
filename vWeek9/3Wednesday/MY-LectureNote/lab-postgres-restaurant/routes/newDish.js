
const express = require('express');
const router = express.Router();
const db = require('../models/database');



//shows our form
router.get('/newdish', async (req, res) => {
    try {
        let records = await db.query('SELECT * FROM categories')
        
        res.render('newdish', {
            categories: records
        })
    } catch (error) {
        console.log(error)
        res.render('newdish', {
            categories: []
        })
    }
  
})

//post routes
router.post('/newdish', async (req, res) => {
    try {
        let {category, name, description, price, course, imageURL} = req.body //string

        category = parseInt(category) //convert string to integer
        price = parseFloat(price) //convert string to integer

        //store our information in our db
        let result = db.result(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, category, description, price, course, imageURL])

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;