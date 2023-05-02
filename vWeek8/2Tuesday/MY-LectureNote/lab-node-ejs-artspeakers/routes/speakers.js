const express = require('express')

//sub routing
const router = express.Router()

let dataFile = require('../data/data.json') //node convert json to js object

let pageSpeaker = dataFile.speakers

router.get('/speakers', (req, res) => { 

    let artwork = []
    pageSpeaker.forEach(speaker => {
        artwork = artwork.concat(speaker.artwork)
    })

    res.render('speakers', {
        artwork: artwork,
        pageTitle: "Roux Meetups -- Speakers",
        speakers: pageSpeaker
    })
 })

//localhost:3000/speakers/lorenzo_garcia
router.get('/speakers/:speakerID', (req, res) => { 
    let shortName = req.params.speakerID
    let speakerArr = []
    let photos = []
  

    pageSpeaker.forEach(speaker => {
        if(speaker.shortname == shortName){
            speakerArr.push(speaker)
            photos = speaker.artwork
        }
    })
    res.render('speakers', {
        artwork: photos,
        speakers: speakerArr,
        pageTitle: `Roux Meetups -- ${speakerArr[0].name}`
    })
 })

module.exports = router;