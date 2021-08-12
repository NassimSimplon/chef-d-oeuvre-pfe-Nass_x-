const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "NosParcours",
  new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    position:{
      type:String,
      required:true
    },
    step:{
      type:String,
      required:true
    }
  })
);
