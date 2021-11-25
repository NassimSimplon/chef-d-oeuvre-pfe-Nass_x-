const PartenaireModel = require("./PartenaireModel");
const mongoose = require("mongoose");
const fs = require('fs')
module.exports = {
  //add_Partenaire 

  addPartenaire : async (req, res) => {
    const name = req.body.name;
     const image = '/' + req.file.fieldname +'/'+ req.file.filename;
    const description = req.body.description;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const linkedin = req.body.linkedin;
    const twitter = req.body.twitter;

    try {
      Partenaire  = new PartenaireModel({
        name,
        image,
        description,
        facebook,
        instagram,
        twitter,
        linkedin
        
      });
      await Partenaire .save();
      res.json(Partenaire );
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllPartenaires

  getAllPartenaires: async (req, res) => {
    try {
      const Partenaire  = await PartenaireModel.find();
      res.json(Partenaire);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deletePartenaire 

  deletePartenaire : async (req, res) => {
    try {
      const Partenaire  = await PartenaireModel.findByIdAndDelete(req.params.id);
      res.json(Partenaire );
    } catch (error) {
      console.error(error.message);
    }
  },

  //updatePartenaire 

  updatePartenaire : async (req, res) => {
    try {
      const Partenaire  = await PartenaireModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Partenaire );
    } catch (error) {
      console.error(error.message);
    }
  },

  //getPartenaire 
  
  getPartenaire : async (req, res) => {
    try {
      const Partenaire  = await PartenaireModel.findById(req.params.id);
      res.json(Partenaire );
    } catch (error) {
      console.error(error.message);
    }
  } 
};
