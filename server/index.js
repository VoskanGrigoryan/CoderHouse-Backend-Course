import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import log4js from 'log4js';
import yargs from 'yargs'
import argv from "yargs"
import path from 'path';
import compression from 'compression';
import cors from 'cors';

import prodRoutes from './routes/prodRoutes.js';

const app = express();
const __dirname = path.resolve(path.dirname(''));
dotenv.config();

// console.log(process.env.NODE_ENV)
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qb578.mongodb.net/${process.env.DB_NAME}`;

console.log(argv.name)
        
// console.log(argv)
app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/', prodRoutes);

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'));
});

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
            console.log(`Working in ${process.env.NODE_ENV} mode🥳🥳`);
        })
        .catch((err) => console.log(err));
} catch (error) {
    console.log(error);
}
