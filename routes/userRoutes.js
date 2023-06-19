const Router = require('express').Router();

const userController = require('../controllers/userController');

Router.route('/login')
    .post(userController.login);

Router.route('/register')
    .post(userController.register);