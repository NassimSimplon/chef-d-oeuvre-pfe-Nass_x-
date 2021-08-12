const express = require('express')
const router = express.Router()
 const User = require('./userController');

 // add User 
 router.post('/user/add',User.addUser)
 // get all Users
 router.get('/users/get',User.getAllUsers)
 //delete User
 router.delete('/user/delete/:id',User.deleteUser)
 //update User 
 router.put('/user/update/:id',User.updateUser)
 // get one User
 router.get('/user/get/:id',User.getUser)


 module.exports = router