const express = require('express')
const router = express.Router()
 const Partner = require('./partnerController');

 // add Partner 
 router.post('/addPartner',Partner.addPartner)
 // get all Partners
 router.get('/getAllPartners',Partner.getAllPartners)
 //delete Partner
 router.delete('/deletePartner/:id',Partner.deletePartner)
 //update Partner 
 router.put('/updatePartner/:id',Partner.updatePartner)
 // get one Partner
 router.get('/getPartner/:id',Partner.getPartner)


 module.exports = router