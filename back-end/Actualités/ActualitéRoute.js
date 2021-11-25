// middleware
const store = require('../middleware/multer')

const express = require('express')
const router = express.Router()
const Actualité = require('./ActualitéController');

 // add Actualité 
 router.post('/Actualite/add',store.single('image'),Actualité.addActualité)
 // get all Actualités
 router.get('/Actualites/get',Actualité.getAllActualités)
 //delete Actualité
 router.delete('/Actualite/delete/:id',Actualité.deleteActualité)
 //update Actualité 
 router.put('/Actualite/update/:id',Actualité.updateActualité)
 // get one Actualité
 router.get('/Actualite/get/:id',Actualité.getActualité)


 module.exports = router