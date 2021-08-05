const JOURNEY = require("./journeyModel");
const mongoose = require("mongoose");
module.exports = {
  //add_Journey

  addJourney: async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    try {
      Journey = new JOURNEY({
        title,
        description,
      });
      await Journey.save();
      res.json(Journey);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllJourneys

  getAllJourneys: async (req, res) => {
    try {
      const Journey = await JOURNEY.find();
      res.json(Journey);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteJourney

  deleteJourney: async (req, res) => {
    try {
      const Journey = await JOURNEY.findByIdAndDelete(req.params.id);
      res.json(Journey);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateJourney

  updateJourney: async (req, res) => {
    try {
      const Journey = await JOURNEY.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Journey);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getJourney
  
  getJourney: async (req, res) => {
    try {
      const Journey = await JOURNEY.findById(req.params.id);
      res.json(Journey);
    } catch (error) {
      console.error(error.message);
    }
  },
};
