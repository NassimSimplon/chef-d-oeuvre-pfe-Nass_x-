  const router = require('express').Router()
const  user = require('./authController')
 
router.post('/user/register',user.register)
router.post('/user/signin',user.signIn)
router.post('/user/logIn',user.logIn)


   
module.exports = router