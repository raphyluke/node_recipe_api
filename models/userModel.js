// Create mongoose schema and model for users

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    email : String,
    firstName: String,
    lastName: String,
    recipes: [{
        type: Schema.Types.ObjectId,
    }],
    likes : [{
        type: Schema.Types.ObjectId,
    }],
    created: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;