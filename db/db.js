function dbConnect(){
    const mongoose = require('mongoose');
    const logger = require('../logs/logs');

    mongoose.connect('mongodb://127.0.0.1:27017/recipes').then(() => {
        logger.info('Connected to MongoDB');
    }).catch((err) => {
        logger.error(err);
    });
}

module.exports = dbConnect;