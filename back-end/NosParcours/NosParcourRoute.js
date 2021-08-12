const express = require('express')
const router = express.Router()
 const NosParcour  = require('./NosParcoursController');

 // add NosParcour  
 router.post('/NosParcour/add',NosParcour.addNosParcour )
 // get all NosParcours
 router.get('/NosParcours/get',NosParcour.getAllNosParcours)
 //delete NosParcour 
 router.delete('/NosParcour/delete/:id',NosParcour.deleteNosParcour )
 //update NosParcour  
 router.put('/NosParcour/update/:id',NosParcour.updateNosParcour )
 // get one NosParcour 
 router.get('/NosParcour/get/:id',NosParcour.getNosParcour )


 module.exports = router