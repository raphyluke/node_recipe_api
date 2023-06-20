function dbConnect(){
    const mongoose = require('mongoose');
    const logger = require('../logs/logs');
    require('dotenv').config();
    mongoose.connect(process.env.MONGO_HOST).then(() => {
        logger.info('Connected to MongoDB');
    }).catch((err) => {
        logger.error(err);
    });
}

module.exports = dbConnect;