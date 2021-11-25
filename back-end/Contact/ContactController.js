const ContactModel  = require("./ContactModel");
const mongoose = require("mongoose");
module.exports = {
  //add_Contact 

  addContact : async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    try {
      Contact  =   new ContactModel({
        name,
        email,
        subject,
        message
      });
      await Contact .save();
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllContacts

  getAllContacts: async (req, res) => {
    try {
      const Contact  = await ContactModel.find();
      res.json(Contact );
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteContact 

  deleteContact : async (req, res) => {
    try {
      const Contact  = await ContactModel.findByIdAndDelete(req.params.id);
      res.json(Contact );
    } catch (error) {
      console.error(error.message);
    }
  },

 

  //getContact 
  
  getContact : async (req, res) => {
    try {
      const Contact  = await ContactModel.findById(req.params.id);
      res.json(Contact );
    } catch (error) {
      console.error(error.message);
    }
  },
};
