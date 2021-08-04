const express = require('express')
const router = express.Router()
 const Journey = require('./journeyController');

 // add Journey 
 router.post('/addJourney',Journey.addJourney)
 // get all Journeys
 router.get('/getAllJourneys',Journey.getAllJourneys)
 //delete Journey
 router.delete('/deleteJourney/:id',Journey.deleteJourney)
 //update Journey 
 router.put('/updateJourney/:id',Journey.updateJourney)
 // get one Journey
 router.get('/getJourney/:id',Journey.getJourney)


 module.exports = router