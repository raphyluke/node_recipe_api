    const redis = require('redis');
    const logger = require('../logs/logs');
    require('dotenv').config();
    
    const redisClient = redis.createClient({
        password: 'SM3g3PxyvnbKr4cniQ5ArvfNYlV9aGeV',
        socket: {
            host: process.env.REDIS_HOST,
            port: 18065
        }
    })

    redisClient.on('connect', () => {
        logger.info('Redis client connected');
    });

    redisClient.on('ready', () => {
        logger.info('Redis client ready');
    });

    redisClient.on('error', (error) => {
        logger.error(error);
    });


    module.exports = redisClient;