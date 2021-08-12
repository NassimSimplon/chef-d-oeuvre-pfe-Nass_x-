const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "réalisations",
  new Schema({
    title: {
      type: String,
      required: true
    },
    valeur: {
      type: String,
      required: true
    } 
  })
);
