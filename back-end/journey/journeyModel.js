const mongoose = require('mongoose')
const Schema = mongoose.Schema


module.exports = mongoose.model('journey',new Schema({
   
    title :{
        type:String,
        required: true
    },
    description :{
        type:String,
        required: true
    }
    
    }))