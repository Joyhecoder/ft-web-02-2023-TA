const express = require('express')

//sub routing
const router = express.Router()

const fs = require('fs') //read and write to a file systen

const feedback = require('../data/feedback.json')  //node converts json to js object


//!converts header payload string to js object
router.use(express.json())
//!places the payload data on req.body.firstName
router.use(express.urlencoded({extended: true}))

router.get('/feedback', (req, res) => { 

    // res.send('home pagE')

    res.render('feedback')
 })

 // /api = get all message from feedback.json

 router.get('/api', (req, res) => { 
    res.json(feedback)
  })

 // a route to submit a new message
router.post('/api', (req, res) => { 
    //get data from the header
    //get from data

    let {name, title, message} = req.body

    
    //use fs module to write a new message object to that file
    feedback.unshift(req.body)

    fs.writeFile('data/feedback.json', JSON.stringify(feedback), 'utf8', err=>{
        if(err){
            res.status(423).send(err)
        }
    })

    //send back all messages the messages with the new message attached
    res.json(feedback)
 })


 router.delete('/api/:id', (req, res) => { 
    
    let { id } = req.params
    console.log("routes 54", id)

    //use fs module to delete a message object to that file
    feedback.splice(id, 1)

    fs.writeFile('data/feedback.json', JSON.stringify(feedback), 'utf8', err=>{
        if(err){
            res.status(423).send(err)
        }
    })

    res.json(feedback)
  })
module.exports = router;