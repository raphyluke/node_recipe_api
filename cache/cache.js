    const redis = require('redis');
    const logger = require('../logs/logs');
    const redisClient = redis.createClient({
        password: 'SM3g3PxyvnbKr4cniQ5ArvfNYlV9aGeV',
        socket: {
            host: 'redis-18065.c300.eu-central-1-1.ec2.cloud.redislabs.com',
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