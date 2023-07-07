const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

function loginPage(req,res){
    res.send('Hello, please <a href="http://localhost:3000/api/users/google">Sign in with Google</a>')
}

// Google Authentication Routes
router.get('/google', (req, res, next) => {
    passport.authenticate('google', { scope: ['profile', 'email'] })
});

router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', {
        failureRedirect: '/api/users/login', // Redirect to the login page if authentication fails
        successRedirect: '/api/users/profile', // Redirect to the profile page if authentication succeeds
    })
});

// Login and Register Routes
router.post('/login', userController.login);
router.get('/login', loginPage);
router.post('/register', userController.register);

module.exports = router;