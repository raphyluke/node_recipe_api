function dbConnect(){
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://127.0.0.1:27017/recipes').then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });
}

module.exports = dbConnect;