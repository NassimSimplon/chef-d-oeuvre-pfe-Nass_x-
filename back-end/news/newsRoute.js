const express = require('express')
const router = express.Router()
 const News = require('./newsController');

 // add News 
 router.post('/addNews',News.addNews)
 // get all Newss
 router.get('/getAllNewss',News.getAllNewss)
 //delete News
 router.delete('/deleteNews/:id',News.deleteNews)
 //update News 
 router.put('/updateNews/:id',News.updateNews)
 // get one News
 router.get('/getNews/:id',News.getNews)


 module.exports = router