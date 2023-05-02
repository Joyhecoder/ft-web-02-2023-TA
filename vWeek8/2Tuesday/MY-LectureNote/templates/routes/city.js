const express = require('express')

//sub routing
const router = express.Router()

router.get('/city', (req, res) => { 
    // res.send('city')

    res.render('city')
 })

module.exports = router;