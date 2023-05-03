const express = require('express')

//sub routing
const router = express.Router()

router.get('/', (req, res) => { 
    res.render('index')
 })


 module.exports = router;