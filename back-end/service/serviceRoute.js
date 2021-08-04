const express = require('express')
const router = express.Router()
 const service = require('./serviceController');

 // add service 
 router.post('/addService',service.addService)
 // get all services
 router.get('/getAllServices',service.getAllServices)
 //delete service
 router.delete('/deleteService/:id',service.deleteService)
 //update service 
 router.put('/updateService/:id',service.updateService)
 // get one service
 router.get('/getService/:id',service.getService)


 module.exports = router