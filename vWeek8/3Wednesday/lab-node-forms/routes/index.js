
const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index')
})

router.post('/', (req, res) => { 
    let {firstName, isValid, isStudent, password, days} = req.body
    res.send(`
        ${firstName}
        ${isValid}
        ${isStudent}
        ${password}
        ${days}
    `)
 })
    

module.exports = router;