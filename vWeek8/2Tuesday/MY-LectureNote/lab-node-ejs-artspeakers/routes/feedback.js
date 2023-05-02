const express = require('express')

//sub routing
const router = express.Router()

router.get('/feedback', (req, res) => { 

    // res.send('home pagE')

    res.render('feedback')
 })

module.exports = router;