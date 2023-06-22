const recipeModel = require('../models/recipeModel');

// Create
function createRecipe(req,res,next){
    delete req.body._id;
    const recipe = new recipeModel(req.body);
    recipe.save()
    .then(data => {
        res.json(data);
    }).catch(next);
}
// Read
function readRecipe(req,res,next){
    recipeModel.find({})
    .then(data => {
        res.json(data);
    }).catch(next);
}
// Read one
function readOneRecipe(req,res,next){
    recipeModel.findOne({_id: req.params.id})
    .then(data => {
        res.json(data);
    }).catch(next);
}
// Update
function updateRecipe(req,res,next){
    recipeModel.findOneAndUpdate({_id: req.params.id}, req.body)
}
// Delete
function deleteRecipe(req,res,next){
    recipeModel.findOneAndDelete({_id: req.params.id})
    .then(data => {
        res.json(data);
    }).catch(next);
}

module.exports = {
    createRecipe,
    readRecipe,
    readOneRecipe,
    updateRecipe,
    deleteRecipe
}