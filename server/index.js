import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import log4js from 'log4js';
import passport from 'passport';
import strategy from 'passport-facebook';
import path from 'path';
import compression from 'compression';
import cors from 'cors';

import User from './models/facebookUser.js';

import prodRoutes from './routes/prodRoutes.js';
import facebookLogin from './routes/facebook.js';
import user from './routes/user.js';
// import { userInfo } from 'os';

const app = express();
const conf = dotenv.config();
const __dirname = path.resolve(path.dirname(''));
const FacebookStrategy = strategy.Strategy;
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://VoskanGrigoryan:bLZAxc0fp132@cluster0.qb578.mongodb.net/eCommerce`;

passport.use(
    new FacebookStrategy(
        {
            clientID: 309747883964855,
            clientSecret: 'db0409fe3b27fe52d96329fd8d19b78b',
            callbackURL: 'http://www.example.com/auth/facebook/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            User.findOrCreate(profile.id, function (err, user) {
                if (err) {
                    return done(err);
                }
            });
        }
    )
);

app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build'));
// });
app.use('/', prodRoutes);
app.use('/', facebookLogin);
app.use('/', user);

try {
    mongoose
        .connect(
            DB_CONNECTION_URL,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            },
            console.log('Connected to db')
        )
        .then(() => {
            app.listen(PORT, console.log(`Running on port ${PORT}`));
        })
        .catch((err) => console.log(err));
} catch (error) {
    console.log(error);
}
