const express = require('express')
const app = express()
// env file
const dotenv = require('dotenv')
dotenv.config()
//run data_base
const db = require('./config/db')
db();
const body = require('body-parser')
app.use(express.json())
//run cors
const cors = require('cors')
app.use(cors())
//run service 
const service = require('./service/serviceRoute')
app.use('/Nass_X',service)
//run Achievement
const achievement = require('./achievements/achievementRoute')
app.use('/Nass_X',achievement)
//run journey
const journey = require('./journey/JourneyRoute')
app.use('/Nass_X',journey)
//run patner
const partner = require('./partners/partnerRoute')
app.use('/Nass_X',partner)
//run user
const user = require('./user/userRoute');
 app.use('/Nass_X',user)
//run testimony
const testimony = require('./testimony/testimonyRoute');
 app.use('/Nass_X',testimony)



 //run server
const PORT = process.env.PORT

 app.listen(PORT,()=>{
    try{
        console.log(`server run ${PORT}`)
    }catch(err){
        console.log("error server")
    }
})