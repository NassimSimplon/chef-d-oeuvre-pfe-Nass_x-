const NEWS = require("./newsModel");
const mongoose = require("mongoose");
module.exports = {
  //add_News

  addNews: async (req, res) => {
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;

    try {
      News = new NEWS({
        title,
        image,
        description,
      });
      await News.save();
      res.json(News);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllNewss

  getAllNewss: async (req, res) => {
    try {
      const News = await NEWS.find();
      res.json(News);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteNews

  deleteNews: async (req, res) => {
    try {
      const News = await NEWS.findByIdAndDelete(req.params.id);
      res.json(News);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateNews

  updateNews: async (req, res) => {
    try {
      const News = await NEWS.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(News);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getNews
  
  getNews: async (req, res) => {
    try {
      const News = await NEWS.findById(req.params.id);
      res.json(News);
    } catch (error) {
      console.error(error.message);
    }
  },
};
