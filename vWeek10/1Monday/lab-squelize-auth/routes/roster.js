const express = require('express');
const router = express.Router();
const auth = require('../auth') //aauth/index.js
router.get('/roster', auth, (req,res) => {

   
    res.render('roster')
})



module.exports = router;