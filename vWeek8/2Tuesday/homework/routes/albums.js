const express = require('express')

//sub routing
const router = express.Router()

router.get('/albums', (req, res) => { 
    res.render('albums')
 })


 module.exports = router;