
module.exports = function() {
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const logger = require('./logs/logs');
    
    const recipeRoutes = require('./routes/recipeRoutes');
    const userRoutes = require('./routes/userRoutes');
    
    require('./db/db')();
    
    const port = process.env.PORT || 3000;

    app.use(express.json());
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

    return app;
}