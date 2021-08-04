const PARTNER = require("./patnerModel");
const mongoose = require('mongoose')
 module.exports = {
  //add_Partner

  addPartner: async (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const linkedin = req.body.linkedin;
    const twitter = req.body.twitter;




 
    try {
      Partner = new PARTNER({
name,image,description ,facebook,instagram,twitter,linkedin   });
      await Partner.save();
      res.json(Partner);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllPartners
  getAllPartners: async (req, res) => {
    try {
      const Partner = await PARTNER.find();
      res.json(Partner);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deletePartner
  deletePartner: async (req, res) => {
    try {
      const Partner = await PARTNER.findByIdAndDelete(req.params.id);
      res.json(Partner);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updatePartner
  updatePartner: async (req, res) => {
    try {
      const Partner = await PARTNER.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(Partner);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getPartner
  getPartner: async (req, res) => { try {
    const Partner = await PARTNER.findById(req.params.id);
    res.json(Partner);
  } catch (error) {
    console.error(error.message);
  }
  }
};