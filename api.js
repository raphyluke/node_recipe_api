
module.exports = function() {
    const express = require('express');
    const app = express();
    const cors = require('cors');
    const logger = require('./logs/logs');
    const passport = require('passport');
    const GoogleStrategy = require('passport-google-oauth20').Strategy;
    const session = require('express-session');
    
    const recipeRoutes = require('./routes/recipeRoutes');
    const userRoutes = require('./routes/userRoutes');
    
    require('./db/db')();
    
    const port = process.env.PORT || 3000;
    passport.use(
        new GoogleStrategy(
            {
                clientID: '674461411977-564s8nek5rogkjfg71ovl5bp1df3pb20.apps.googleusercontent.com',
                clientSecret: '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',
                callbackURL: 'http://localhost:3000/api/users/google/callback',
            },
            (accessToken, refreshToken, profile, cb) => {
                console.log('passport callback function fired');
                console.log(profile);
                return cb(null, profile);
            }
        )
    );

    passport.serializeUser((user, cb) => {
        process.nextTick(() => {
            cb(null, user);
        });
    });

    passport.deserializeUser((user, done) => {
        process.nextTick(() => {
            done(null, user);
        });
    });

    app.use(
        session({
            secret: 'secret',
            resave: false,
            saveUninitialized: false,
        })
    );
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    
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