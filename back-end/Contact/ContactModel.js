const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Contacts",
  new Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    }
  })
);
