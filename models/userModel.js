// Create mongoose schema and model for users

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type : String, required: true},
    password: {type : String, required: true},
    email : {type : String, required: true},
    firstName: {type : String, required: true},
    lastName: {type : String, required: true},
    recipes: {
        type: [Schema.Types.ObjectId],
        ref: 'recipe',
        default: [],
    },
    likes : {
        type: [Schema.Types.ObjectId],
        ref: 'recipe',
        default: [],
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;