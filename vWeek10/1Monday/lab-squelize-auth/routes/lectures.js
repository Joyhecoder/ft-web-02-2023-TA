
const express = require('express');
const router = express.Router();
const auth = require('../auth') //aauth/index.js

router.get('/lectures', auth, async (req,res) => {
   
   
   console.log(req.session.passport)   //!to get the user id from the auth, coming from serializeUSer in passport-config.js
   console.log(req.user)  //!to get the entire user info from the auth, coming from deserializeUer in passport-config.js
    res.render('lectures')
})


module.exports = router;
