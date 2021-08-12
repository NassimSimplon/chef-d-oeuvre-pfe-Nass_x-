const express = require('express')
const router = express.Router()
 const Réalisation  = require('./RéalisationsController');

 // add Réalisation  
 router.post('/Realisation/add',Réalisation.addRéalisation)
 // get all Réalisations
 router.get('/Realisations/get',Réalisation.getAllRéalisations)
 //delete Réalisation 
 router.delete('/Realisation/delete/:id',Réalisation.deleteRéalisation )
 //update Réalisation  
 router.put('/Realisation/update/:id',Réalisation.updateRéalisation)
 // get one Réalisation 
 router.get('/Realisation/get/:id',Réalisation.getRéalisation)


 module.exports = router