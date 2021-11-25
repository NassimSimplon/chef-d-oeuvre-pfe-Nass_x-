const TémoignageModel = require("./TémoignageModel");
const mongoose = require("mongoose");
const fs = require('fs')
  
module.exports = {
  //add_Témoignage

  addTémoignage: async (req, res) => {
    const userNom =  req.body.userNom
    const userPrenom =  req.body.userPrenom

    const userImage = req.body.userImage

    const comment = req.body.comment;

    try {
      Témoignage = await new TémoignageModel({
        userNom,
        userPrenom,
        userImage,
        comment
      });
      await Témoignage.save();
      res.json(Témoignage);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllTémoignages

  getAllTémoignages: async (req, res) => {
    try {
      const Témoignage = await TémoignageModel.find();
      res.json(Témoignage);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteTémoignage

  deleteTémoignage: async (req, res) => {
    try {
      const Témoignage = await TémoignageModel.findByIdAndDelete(req.params.id);
      res.json(Témoignage);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateTémoignage

  updateTémoignage: async (req, res) => {
    try {
      const Témoignage = await TémoignageModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(Témoignage);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getTémoignage
  
  getTémoignage: async (req, res) => {
    try {
      const Témoignage = await TémoignageModel.findById(req.params.id)
      res.json(Témoignage)
      } catch (error) {
      console.error(error.message);
    }
  }, 
};
