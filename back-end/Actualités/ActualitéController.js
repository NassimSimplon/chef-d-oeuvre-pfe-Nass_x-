const ActualitéModel = require("./ActualitésModel");
const mongoose = require("mongoose");
module.exports = {
  //add_Actualité

  addActualité: async (req, res) => {
    const title = req.body.title;
    const image = '/' + req.file.fieldname +'/'+ req.file.filename;
    const description = req.body.description;
    const date = req.body.date;

    try {
      Actualité = new ActualitéModel({
        title,
        image,
        description,
        date
      });
      await Actualité.save();
      res.json(Actualité);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllActualités

  getAllActualités: async (req, res) => {
    try {
      const Actualité = await ActualitéModel.find();
      res.json(Actualité);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteActualité

  deleteActualité: async (req, res) => {
    try {
      const Actualité = await ActualitéModel.findByIdAndDelete(req.params.id);
      res.json(Actualité);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateActualité

  updateActualité: async (req, res) => {
    try {
      const Actualité = await ActualitéModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Actualité);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getActualité
  
  getActualité: async (req, res) => {
    try {
      const Actualité = await ActualitéModel.findById(req.params.id);
      res.json(Actualité);
    } catch (error) {
      console.error(error.message);
    }
  }
};
