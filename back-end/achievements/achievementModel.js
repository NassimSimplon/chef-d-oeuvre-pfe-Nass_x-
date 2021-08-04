const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('achievements',new Schema({
   
    client :{
        type:String,
        required: true
    },
    formation :{
        type:String,
        required: true
    },
    partner :{
        type:String,
        required: true
     }
    
    }))