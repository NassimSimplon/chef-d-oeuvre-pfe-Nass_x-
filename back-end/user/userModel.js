const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')


 const UserSchema = new Schema({
    nom: {
      type: String,
      required: true,
      
      trim:true,
      min:3,
      max:20 ,
       lowercase:true
    },
    prenom: {
      type: String,
      required: true ,
      trim:true,
      min:3,
      max:20 ,
       lowercase:true
    },
    sexe: {
      type: String,
      required: true 
    },
    telephone: {
      type: String,
      required: true,
      trim:true,
      min:3,
      max:20 ,
      },
    email: {
      type: String,
      required: true,
      trim:true,
      min:3,
      max:20 ,
       lowercase:true,
      unique:true
    },
    password: {
      type: String,
      required: true,

        min:5,
      max:20 
    },
    image: {
      type: String 
    },
    role:{
        type:String,
        enum:['user','admin'],
        default: 'user'
    }
  })
 
  module.exports = users = mongoose.model(
    "users",UserSchema);
