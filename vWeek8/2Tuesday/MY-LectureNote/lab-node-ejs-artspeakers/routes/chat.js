const express = require('express')

//sub routing
const router = express.Router()

router.get('/chat', (req, res) => { 

    // res.send('home pagE')

    res.render('chat')
 })

module.exports = router;