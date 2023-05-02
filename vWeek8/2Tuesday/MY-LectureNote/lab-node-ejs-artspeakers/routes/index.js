const express = require('express')

//import data from data.json
const dataFile = require('../data/data.json');  //node converts json to js object when importing 

let pageSpeakers = dataFile.speakers; //[{}, {}, {}]



//sub routing
const router = express.Router()

router.get('/', (req, res) => { 
    //this array will hold all the artwork
    let artworkArr = []
    pageSpeakers.forEach(speaker => {
        artworkArr = artworkArr.concat(speaker.artwork)
    })

    res.render('index', {
        artwork: artworkArr
    })
 })

module.exports = router;