const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const redisClient = require('./cache/cache');
const logger = require('./logs/logs');

const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');

require('./db/db')();

module.exports = function() {
    
    const port = process.env.PORT || 3000;

    app.use(bodyParser);
    app.use(cors());
    // router user
    app.use('/api/users', userRoutes);
    // router recipe
    app.use('/api/recipes', recipeRoutes);

    app.use((req, res, next) => {
        res.send('Hello from Express!');
    })

    app.listen(port, () => {
        logger.info(`Listening on port ${port}`);
    });

}