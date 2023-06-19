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


    module.exports = redisClient;