const userModel = require('../models/userModel');
const crypto = require("node:crypto");
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { access } = require('node:fs');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
// Login
function login(req,res,next){
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    const user = userModel.findOne({username: req.body.username});
    if(user.password == hash){
        // Create a token
        var token = jwt.sign({username : user.username, email : user.email, firstName : user.firstName, lastName : user.lastName}, process.env.SECRET_KEY, {expiresIn: '24h'})
        res.status(200).json({token : token});
    }
    else {
        res.status(401).json({message: "Wrong password"});
    }
}

// Register
function register(req,res,next){
    const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');
    req.body.password = hash;
    delete req.body._id;

    const checkUsername = userModel.findOne({username: req.body.username});
    const checkEmail = userModel.findOne({email: req.body.email});

    if(checkUsername){
        res.status(409).json({message: "Username already exists"});
    }
    else if(checkEmail){
        res.status(409).json({message: "Email already exists"});
    }
    else {
        const user = new userModel(req.body);
        user.save()
        .then(data => {
            res.status(200).json({message: "User created"});
        }).catch(next);
    }
}


function GoogleAuth(req,res,next){
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })(req,res,next)
}

function GoogleAuthCallback(req,res,next){
    passport.authenticate('google', {
        failureRedirect: '/auth/google',
        successRedirect: '/profile',
    })(req,res,next)
}

function Profile(req,res,next){
    // Access user profile from req.user
  console.log(req.user.photos[0].value);
  // HTML with images
  res.send(`
    <h1>Welcome, ${req.user.displayName}!</h1>
    <img style="border-radius : 50%" src="${req.user.photos[0].value}" /></img>
  `);
}

module.exports = {
    login,
    register,
    GoogleAuth,
    GoogleAuthCallback,
    Profile
}