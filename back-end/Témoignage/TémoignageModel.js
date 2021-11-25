const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Témoignages",
  new Schema({
    userNom: {
      type:String,
      required:true
    },
    userPrenom: {
      type:String,
      required:true
    },
    userImage:{
type:String 
    },
    comment: {
      type: String,
      required:true
    },
  })
);
