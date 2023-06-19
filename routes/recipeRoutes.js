const Router = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const recipeController = require('../controllers/recipeController');

Router.route('/')
    .get(recipeController.readRecipe)
    .post(recipeController.createRecipe);

Router.route('/:id')
    .all(authMiddleware)
    .get(recipeController.readOneRecipe)
    .put(recipeController.updateRecipe)
    .delete(recipeController.deleteRecipe);

module.exports = Router;