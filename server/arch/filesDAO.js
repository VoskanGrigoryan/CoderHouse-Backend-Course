import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import User from '../models/user.js';
import bcrypt from 'bcrypt';

const conf = dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qb578.mongodb.net/${process.env.DB_NAME}`;

class FileDao {
    async init() {
        try {
            mongoose
                .connect(
                    DB_CONNECTION_URL,
                    {
                        useNewUrlParser: true,
                        useCreateIndex: true,
                        useUnifiedTopology: true,
                    },
                    console.log('Application connected to DB')
                )

                .then(() => {
                    app.listen(PORT, console.log(`Running on port ${PORT}`));
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }
    }

    getFyH() {
        return new Date().toLocaleString();
    }
}

export default FileDao;
