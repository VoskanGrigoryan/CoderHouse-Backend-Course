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

//GRAPHQL
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import User from './models/facebookUser.js';

import prodRoutes from './routes/prodRoutes.js';
import facebookLogin from './routes/facebook.js';
import user from './routes/user.js';
import { createUser, loginUser } from './controllers/user.js';
// import { userInfo } from 'os';

const app = express();
const conf = dotenv.config();
const __dirname = path.resolve(path.dirname(''));
const FacebookStrategy = strategy.Strategy;
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://VoskanGrigoryan:bLZAxc0fp132@cluster0.qb578.mongodb.net/eCommerce`;

//ACA SE ARMAN LOS SCHEMAS DE LAS QUERYS -> ESQUEMA DE GraphQL
//Aca se puede customizar, se arma es schema de cada cosa acá
let schema = buildSchema(`
    type Query {
        users: [User]
        products: [Product]
    },
    type User {
        userName: String,
        email: String,
        password: String,
    },
    type Product {
        name: String,
        description: String,
        seller: String,
        price: Int,
        location: String,
    }
`);

//Root resolver: Mapa de acciones - funciones -> El objeto del root resolver
//Se pasan funciones createUser y loginUser, que se ejecutan en el controller
let root = {
    hello: () => {
        return 'Hello world!';
    },
    createUser: createUser,
    loginUser: loginUser,
};

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

//Habilita la herramienta de GraphiQL
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);
app.use('/', prodRoutes);
app.use('/', facebookLogin);
app.use('/', user);

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

const logger = log4js.getLogger('default');

try {
    mongoose
        .connect(
            DB_CONNECTION_URL,
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            },
            logger.info('Application connected to DB')
        )
        .then(() => {
            app.listen(PORT, logger.info(`Running on port ${PORT}`));
        })
        .catch((err) => logger.error(err));
} catch (error) {
    logger.error(error);
}
