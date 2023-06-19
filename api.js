module.exports = async function() {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const redisClient = require('./cache/cache');
    const winston = require('winston');

    const recipeRoutes = require('./routes/recipeRoutes');
    const userRoutes = require('./routes/userRoutes');
    
    const port = process.env.PORT || 3000;

    mongoose.connect('mongodb://127.0.0.1:27017/recipes').then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

    app.use(bodyParser.json());
    app.use(cors());

    const logger = winston.createLogger({
        level : 'info',
        format : winston.format.json(),
        transports : [
            new winston.transports.File({filename : 'error.log', level : 'error'}),
            new winston.transports.File({filename : 'combined.log'}),
            new winston.transports.File({filename : 'info.log', level : 'info'})
        ]
    })

    if(process.env.NODE_ENV !== 'production'){
        logger.add(new winston.transports.Console({
            format : winston.format.simple()
        }))
    }

    // router user
    app.use('/api/users', userRoutes);
    // router recipe
    app.use('/api/recipes', recipeRoutes);
    app.use((req, res, next) => {
        res.send('Hello from Express!');
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

}