const express = require('express')
const router = express.Router()
 const Témoignage = require('./TémoignageController');

 // add Témoignage 
 router.post('/Temoignage/add',Témoignage.addTémoignage)
 // get all Témoignages
 router.get('/Temoignages/get',Témoignage.getAllTémoignages)
 //delete Témoignage
 router.delete('/Temoignage/delete/:id',Témoignage.deleteTémoignage)
 //update Témoignage 
 router.put('/Temoignage/update/:id',Témoignage.updateTémoignage)
 // get one Témoignage
 router.get('/Temoignage/get/:id',Témoignage.getTémoignage)


 module.exports = router