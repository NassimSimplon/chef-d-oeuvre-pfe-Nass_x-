const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('services',new Schema({
   
    title :{
        type:String,
        required: true
    },
    image :{
        type:String,
        required: true
    },
    description :{
        type:String,
        required: true
     }
    
    }))