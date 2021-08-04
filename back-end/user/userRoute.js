const express = require('express')
const router = express.Router()
 const User = require('./userController');

 // add User 
 router.post('/addUser',User.addUser)
 // get all Users
 router.get('/getAllUsers',User.getAllUsers)
 //delete User
 router.delete('/deleteUser/:id',User.deleteUser)
 //update User 
 router.put('/updateUser/:id',User.updateUser)
 // get one User
 router.get('/getUser/:id',User.getUser)


 module.exports = router