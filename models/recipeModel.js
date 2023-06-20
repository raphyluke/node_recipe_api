// Create mongoose schema and model for recipes

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {type : String, required: true},
    type : {type : String, required: true},
    image : {type : String},
    marks : {
        type : [Number],
        default : [],
    },
    ingredients : {
        type : [String],
        default : [],
    },
    steps : {
        type : [String],
        default : [],
    },
    comments : {
        type : [String],
        default : [],
    },
    pictures : {
        type : [String],
        default : [],
    },
    created: {
        type: Date,
        default: Date.now
    },
    prepatime : Number,
    cooktime : Number,
    resttime : Number,
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;
