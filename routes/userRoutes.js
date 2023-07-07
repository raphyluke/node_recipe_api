const express = require('express');
const passport = require('passport');
const userController = require('../controllers/userController');

const router = express.Router();

function loginPage(req,res){
    res.send('Hello, please <a href="http://localhost:3000/api/users/google">Sign in with Google</a>')
}

// Google Authentication Routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/api/users/google', // Redirect to the login page if authentication fails
        successRedirect: '/api/users/profile', // Redirect to the profile page if authentication succeeds
    })
);

// Login and Register Routes
router.post('/login', userController.login);
router.get('/login', loginPage);
router.post('/register', userController.register);
router.get('/profile', userController.Profile);

module.exports = router;