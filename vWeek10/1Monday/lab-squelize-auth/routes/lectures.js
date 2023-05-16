
const express = require('express');
const router = express.Router();
const auth = require('../auth') //aauth/index.js

router.get('/lectures', auth, async (req,res) => {
   

   
    res.render('lectures')
})


module.exports = router;
