 const router = require('express').Router()
const  user = require('./authController')
 
router.post('/user/register',user.register)
router.post('/user/signin',user.signIn)
 

   
module.exports = router