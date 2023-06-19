module.exports = async function() {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const mongoose = require('mongoose');
    const redisClient = require('./cache/cache');

    mongoose.connect('mongodb://127.0.0.1:27017/recipes').then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

    app.use(bodyParser.json());
    app.use(cors());

    const port = process.env.PORT || 3000;

    // router user
    // router recipe
    app.use((req, res, next) => {
        res.send('Hello from Express!');
    })

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });

}