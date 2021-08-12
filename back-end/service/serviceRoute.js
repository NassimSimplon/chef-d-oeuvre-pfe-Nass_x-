const express = require('express')
const router = express.Router()
 const service = require('./serviceController');

 // add service 
 router.post('/Service/add',service.addService)
 // get all services
 router.get('/Services/get',service.getAllServices)
 //delete service
 router.delete('/Service/delete/:id',service.deleteService)
 //update service 
 router.put('/Service/update/:id',service.updateService)
 // get one service
 router.get('/Service/get/:id',service.getService)


 module.exports = router