const SERVICE = require("./serviceModel");
const mongoose = require("mongoose");
module.exports = {
  //add_service

  addService: async (req, res) => {
    const title = req.body.title;
    const icon = req.body.icon;
    const description = req.body.description;

    try {
      service = await new SERVICE({
        title,
        icon,
        description
      });
      await service.save();
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllServices

  getAllServices: async (req, res) => {
    try {
      const service = await SERVICE.find();
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteService

  deleteService: async (req, res) => {
    try {
      const service = await SERVICE.findByIdAndDelete(req.params.id);
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateService

  updateService: async (req, res) => {
    try {
      const service = await SERVICE.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getService
  
  getService: async (req, res) => {
    try {
      const service = await SERVICE.findById(req.params.id);
      res.json(service);
    } catch (error) {
      console.error(error.message);
    }
  },
};
