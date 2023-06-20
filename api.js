module.exports = async function() {
    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const redisClient = require('./cache/cache');
    const logger = require('./logs/logs');

    const recipeRoutes = require('./routes/recipeRoutes');
    const userRoutes = require('./routes/userRoutes');
    
    const port = process.env.PORT || 3000;
    require('./db/db')();

    app.use(bodyParser.json());
    app.use(cors());
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