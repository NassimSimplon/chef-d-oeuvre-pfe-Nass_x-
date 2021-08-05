const ACHIEVEMENT = require("./achievementModel");
const mongoose = require("mongoose");
module.exports = {
  //add_achievement

  addAchievement: async (req, res) => {
    const client = req.body.client;
    const formation = req.body.formation;
    const partner = req.body.partner;

    try {
      achievement = new ACHIEVEMENT({
        client,
        formation,
        partner,
      });
      await achievement.save();
      res.json(achievement);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllAchievement

  getAllAchievements: async (req, res) => {
    try {
      const achievement = await ACHIEVEMENT.find();
      res.json(achievement);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteAchievement

  deleteAchievement: async (req, res) => {
    try {
      const achievement = await ACHIEVEMENT.findByIdAndDelete(req.params.id);
      res.json(achievement);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateAchievement

  updateAchievement: async (req, res) => {
    try {
      const achievement = await ACHIEVEMENT.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(achievement);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAchievement
  
  getAchievement: async (req, res) => {
    try {
      const achievement = await ACHIEVEMENT.findById(req.params.id);
      res.json(achievement);
    } catch (error) {
      console.error(error.message);
    }
  },
};
