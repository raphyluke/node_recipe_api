// Create mongoose schema and model for users

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {String, required: true},
    password: {String, required: true},
    email : {String, required: true},
    firstName: {String, required: true},
    lastName: {String, required: true},
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