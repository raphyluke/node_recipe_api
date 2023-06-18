module.exports = async function() {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const mongoose = require('mongoose');

    const redis = require('redis');

    const redisClient = redis.createClient({
        password: 'SM3g3PxyvnbKr4cniQ5ArvfNYlV9aGeV',
        socket: {
            host: 'redis-18065.c300.eu-central-1-1.ec2.cloud.redislabs.com',
            port: 18065
        }
    })

    redisClient.connect();

    redisClient.on('connect', () => {
        console.log('Redis client connected');
    });

    redisClient.on('ready', () => {
        console.log('Redis client ready to use');
    });

    redisClient.on('error', (error) => {
        console.error('Redis connection error:', error);
    });

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