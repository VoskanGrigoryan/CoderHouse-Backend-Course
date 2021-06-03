import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import log4js from 'log4js';
import path from 'path';
import compression from 'compression';
import cors from 'cors';

import prodRoutes from './routes/prodRoutes.js';

const app = express();
const conf = dotenv.config();
const __dirname = path.resolve(path.dirname(''));
const PORT = process.env.PORT || 4000;
// const DB_CONNECTION_URL = 'mongodb+srv://VoskanGrigoryan:bLZAxc0fp132@cluster0.qb578.mongodb.net/eCommerce';

const DB_CONNECTION_URL = 'mongodb://VoskanGrigoryan:bLZAxc0fp132@cluster0-shard-00-00.qb578.mongodb.net:27017,cluster0-shard-00-01.qb578.mongodb.net:27017,cluster0-shard-00-02.qb578.mongodb.net:27017/eCommerce?replicaSet=atlas-nr2rmk-shard-0&ssl=true&authSource=admin'                           

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'));
});

app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', prodRoutes);

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
