const express = require('express')

//sub routing
const router = express.Router()

router.get('/', (req, res) => { 

    // res.send('home pagE')

    res.render('index', {
        greeting: "Hello wolrd",
        firstName: "Joy",
        lastName: "He",
        year: 2023,
        nums: [1, 2, 3, 4],
        contacts: {
            cell: "222-222-2222",
            work: "333-333-3333"
        }
    })
 })

module.exports = router;