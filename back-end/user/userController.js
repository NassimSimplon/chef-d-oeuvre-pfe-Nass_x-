const USER = require("./userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
 
module.exports = {
  //add_User

  addUser: async (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const sexe = req.body.sexe
    const telephone = req.body.telephone;
    const email = req.body.email;

 
    //encryption password
    const salt = await new bcrypt.genSalt(10);
    const hashedPasswor = await new bcrypt.hash(req.body.password, salt);
    const password = hashedPasswor;
      const image = '/' + req.file.fieldname +'/'+ req.file.filename;

    try {
     const User = new USER({
        nom,
        prenom,
        telephone,
        sexe,
        email,
        password,
        image
      });
      await User.save();
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllUsers

  getAllUsers: async (req, res) => {
    try {
      const User = await USER.find();
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteUser

  deleteUser: async (req, res) => {
    try {
      const User = await USER.findByIdAndDelete(req.params.id);
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateUser

  updateUser: async (req, res) => {
    try {
      const User = await USER.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getUser
  
  getUser: async (req, res) => {
    try {
      const User = await USER.findById(req.params.id);
      res.json(User);
    } catch (error) {
      console.error(error.message);
    }
  } 

};
