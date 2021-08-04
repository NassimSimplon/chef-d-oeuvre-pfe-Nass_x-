const express = require('express')
const router = express.Router()
 const achievement = require('./achievementController');

 // add Achievement 
 router.post('/addAchievement',achievement.addAchievement)
 // get all achievements
 router.get('/getAllAchievements',achievement.getAllAchievements)
 //delete achievement
 router.delete('/deleteAchievement/:id',achievement.deleteAchievement)
 //update achievement 
 router.put('/updateAchievement/:id',achievement.updateAchievement)
 // get one achievement
 router.get('/getAchievement/:id',achievement.getAchievement)


 module.exports = router