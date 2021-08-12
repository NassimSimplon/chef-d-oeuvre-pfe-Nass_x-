const NosParcourModel  = require("./NosParcoursModel");
const mongoose = require("mongoose");
module.exports = {
  //add_NosParcour 

  addNosParcour : async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    try {
      NosParcour  = new NosParcourModel({
        title,
        description,
      });
      await NosParcour .save();
      res.json(NosParcour );
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllNosParcour s

  getAllNosParcours: async (req, res) => {
    try {
      const NosParcour  = await NosParcourModel.find();
      res.json(NosParcour );
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteNosParcour 

  deleteNosParcour : async (req, res) => {
    try {
      const NosParcour  = await NosParcourModel.findByIdAndDelete(req.params.id);
      res.json(NosParcour );
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateNosParcour 

  updateNosParcour : async (req, res) => {
    try {
      const NosParcour  = await NosParcourModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(NosParcour );
    } catch (error) {
      console.error(error.message);
    }
  },

  //getNosParcour 
  
  getNosParcour : async (req, res) => {
    try {
      const NosParcour  = await NosParcourModel.findById(req.params.id);
      res.json(NosParcour );
    } catch (error) {
      console.error(error.message);
    }
  },
};
