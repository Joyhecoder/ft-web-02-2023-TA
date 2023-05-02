const express = require('express')

//sub routing
const router = express.Router()

router.get('/aboutus', (req, res) => { 
    // res.send('About us')

    res.render('aboutUs')
 })

module.exports = router;