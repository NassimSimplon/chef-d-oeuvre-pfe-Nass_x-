const TESTIMONY = require("./testimonyModel");
const mongoose = require('mongoose')
const axios = require('axios')
  

module.exports = {
  //add_Testimony

  addTestimony: async (req, res) => {
    const userID = mongoose.Types.ObjectId(req.body.userID);
    const comment = req.body.comment;
 
    try {
      Testimonys = new TESTIMONY({
       userID,comment
      });
      await Testimonys.save();
      res.json(Testimonys);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllTestimonys
  getAllTestimonys: async (req, res) => {
    try {
      const Testimonys = await TESTIMONY.find();
      res.json(Testimonys);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteTestimony
  deleteTestimony: async (req, res) => {
    try {
      const Testimonys = await TESTIMONY.findByIdAndDelete(req.params.id);
      res.json(Testimonys);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateTestimonys
  updateTestimonys: async (req, res) => {
    try {
      const Testimonys = await TESTIMONY.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(Testimonys);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getTestimony
  getTestimony: async (req, res) => {
    try {
      const Testimonys = await TESTIMONY.findById(req.params.id).then(
          (TESTIMONY)=>{
           axios.get(`http://localhost:8000/Nass_X/getUser/` + TESTIMONY.userID
  ).then((response)=>{
      var TestimonyObject= {nom: response.data.nom, prenom: response.data.prenom}
      res.json(Testimonys)
      })
 

          }
      )

     } catch (error) {
      console.error(error.message);
    }
  }
};