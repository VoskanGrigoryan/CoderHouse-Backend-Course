import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import log4js from 'log4js';
import passport from 'passport';
import strategy from 'passport-facebook';
import path from 'path';
import compression from 'compression';
import cors from 'cors';

import User from './models/facebookUser.js';

import products from './routes/products.js';
import facebookLogin from './routes/facebook.js';
import user from './routes/user.js';

import filesDAO from './arch/filesDAO.js';

const app = express();
const conf = dotenv.config();
const __dirname = path.resolve(path.dirname(''));
const FacebookStrategy = strategy.Strategy;
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qb578.mongodb.net/${process.env.DB_NAME}`;

tests();
//Acá figura que se pudo conectar a la db pero al hacer el llamado a las apis tira error
//Cannot POST /user/login
async function tests() {
    const testDao = new filesDAO();
    await testDao.init();
    // console.log(await testDao.getFyH());
}
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

// app.use('/', products, facebookLogin, user);

log4js.configure({
    appenders: {
        FileErr: { type: 'file', filename: 'error.log' },
        FileWarn: { type: 'file', filename: 'warn.log' },
        Consola: { type: 'console' },
    },
    categories: {
        default: { appenders: ['Consola'], level: 'info' },
        Error: { appenders: ['FileErr'], level: 'error' },
        Warn: { appenders: ['FileWarn'], level: 'warn' },
    },
});

//TEST
const logger = log4js.getLogger('default');
// try {
//     mongoose
//         .connect(
//             DB_CONNECTION_URL,
//             {
//                 useNewUrlParser: true,
//                 useCreateIndex: true,
//                 useUnifiedTopology: true,
//             },
//             logger.info('Application connected to DB')
//         )
//         .then(() => {
//             app.listen(PORT, logger.info(`Running on port ${PORT}`));
//         })
//         .catch((err) => logger.error(err));
// } catch (error) {
//     logger.error(error);
// }
