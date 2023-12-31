const winston = require('winston');

const logger = winston.createLogger({
    level : 'info',
    format : winston.format.json(),
    transports : [
        new winston.transports.File({filename : 'error.log', level : 'error'}),
        new winston.transports.File({filename : 'combined.log'}),
        new winston.transports.File({filename : 'info.log', level : 'info'})
    ]
})

if (logger){
    console.log('logger created');
}

if(process.env.NODE_ENV !== 'production'){
    logger.add(new winston.transports.Console({
        format : winston.format.simple()
    }))
}

module.exports = logger;