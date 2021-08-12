// middleware
const store = require('../middleware/multer')
const express = require('express')
const router = express.Router()

// Controller
 const Partenaire  = require('./PartenaireController');
 // add Partenaire  
 router.post('/Partenaire/add',store.single('image'),Partenaire.addPartenaire )
 // get all Partenaires
 router.get('/Partenaires/get',Partenaire.getAllPartenaires)
 //delete Partenaire 
 router.delete('/Partenaire/delete/:id',Partenaire.deletePartenaire )
 //update Partenaire  
 router.put('/Partenaire/update/:id',Partenaire.updatePartenaire )
 // get one Partenaire 
 router.get('/Partenaire/get/:id',Partenaire.getPartenaire )


 module.exports = router