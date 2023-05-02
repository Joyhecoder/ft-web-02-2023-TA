const express = require('express')

//sub routing
const router = express.Router()

router.get('/faq', (req, res) => { 
    // res.send('faq page')

    res.render('faq')
 })

module.exports = router;