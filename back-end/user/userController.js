const USER = require("./userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'dfgvhbjnkfd45fgdfg45@<<<,m.?!245gd4sg5gdfg54sdffdg2565156fgh'
module.exports = {
  //add_User

  addUser: async (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const sexe = req.body.sexe
    const telephone = req.body.telephone;
    const email = req.body.email;

    if(!nom || typeof nom !== 'string'){
      return res.json({status:'error',error:' Nom est Invariable '})
    }
    if(!prenom || typeof prenom !== 'string'){
      return res.json({status:'error',error:' Prenom est Invariable '})
    }
    if(password.length < 5){
      return res.json({status:'error',error:' Le mot de passe trop petit doit comporter au moins 6 caractères '})

    }
    //encryption password
    const salt = await bcrypt.genSalt(10);
    const hashedPasswor = await bcrypt.hash(req.body.password, salt);
    const password = hashedPasswor;
    try {
      User = new USER({
        nom,
        prenom,
        telephone,
        sexe,
        email,
        password,
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
  },

  //log in 
  logIn: async (req, res) => {
    const email = req.body.email;
const password = req.body.password
const user = await USER.findOne({email,password}).lean()

if(!user){
  return res.json({status:'error',error:'Mot de passe ou email invalide'})
}

    if(await bcrypt.compare(password,user.password)){
      const token = jwt.sign({
        id:user_id,
        email:user.email
      },JWT_SECRET)
      return res.json({status:'error',error:' Nom est Invariable '})
    }

  
 
  },
  updatePassword: async (req, res) => {
    const {token} = req.body
    const user = jwt.verify(token,JWT_SECRET)
  }
};
