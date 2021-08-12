const TémoignageModel = require("./TémoignageModel");
const mongoose = require("mongoose");
const axios = require("axios");
 

module.exports = {
  //add_Témoignage

  addTémoignage: async (req, res) => {
    const userId = mongoose.Types.ObjectId(req.body.userId);
    const comment = req.body.comment;

    try {
      Témoignage = new TémoignageModel({
        userId,
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
      const Témoignage = await TémoignageModel.findById(req.params.id).then(
        (TémoignageModel) => {
          axios
            .get(`http://localhost:${PORT}/Nass_X/getUser/` + TémoignageModel.userId)
            .then((response) => {
              var TémoignageObject = {
                nom: response.data.nom,
                prenom: response.data.prenom,
                image: response.data.image,
                comment: TémoignageModel.comment,
              };
              res.json(TémoignageObject);
            });
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  },
};
