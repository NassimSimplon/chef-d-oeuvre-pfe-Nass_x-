const  RéalisationModel = require("./RéalisationModel");
const mongoose = require("mongoose");
module.exports = {
  //add_Réalisation

  addRéalisation: async (req, res) => {
    const title = req.body.title;
    const valeur = req.body.valeur;
 
    try {
      Réalisation = new RéalisationModel({
        title,
        valeur
       });
      await Réalisation.save();
      res.json(Réalisation);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllRéalisations

  getAllRéalisations: async (req, res) => {
    try {
      const Réalisation = await RéalisationModel.find();
      res.json(Réalisation);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteRéalisation

  deleteRéalisation: async (req, res) => {
    try {
      const Réalisation = await RéalisationModel.findByIdAndDelete(req.params.id);
      res.json(Réalisation);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateRéalisation

  updateRéalisation: async (req, res) => {
    try {
      const Réalisation = await RéalisationModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(Réalisation);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getRéalisation
  
  getRéalisation: async (req, res) => {
    try {
      const Réalisation = await RéalisationModel.findById(req.params.id);
      res.json(Réalisation);
    } catch (error) {
      console.error(error.message);
    }
  },
};
