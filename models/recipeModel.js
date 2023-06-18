// Create mongoose schema and model for recipes

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    type : String,
    image : String,
    marks : [{
        type: Schema.Types.ObjectId,
    }],
    ingredients : [{
        type: Schema.Types.ObjectId,
    }],
    steps : [{
        type: Schema.Types.ObjectId,
    }],
    comments : [{
        type: Schema.Types.ObjectId,
    }],
    pictures : [{
        type: Schema.Types.ObjectId,
    }],
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
