const express = require("express");
const router = express.Router();

router.get('/basic', (req, res)=>{

    res.render("basicForm")
})

router.post('/basic', (req, res) => { 
    let {firstName, lastName} = req.body

    res.send(`
    
        ${firstName}
        ${lastName}
    `)
 })

module.exports = router;