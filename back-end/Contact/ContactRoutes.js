const express = require('express')
const router = express.Router()
 const Contact  = require('./ContactController');

 // add Contact  
 router.post('/Contact/add',Contact.addContact)
 // get all Contacts
 router.get('/Contacts/get',Contact.getAllContacts)
 //delete Contact 
 router.delete('/Contact/delete/:id',Contact.deleteContact )
  // get one Contact 
 router.get('/Contact/get/:id',Contact.getContact )


 module.exports = router