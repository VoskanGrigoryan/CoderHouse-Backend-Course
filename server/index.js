import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
// import log4js from 'log4js';
import nodemailer from 'nodemailer'
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import passport from "passport";
import strategy from "passport-facebook";
import User from './models/facebookUser.js';

import prodRoutes from './routes/prodRoutes.js';
import facebookLogin from './routes/facebook.js';

const app = express();
const conf = dotenv.config();
const __dirname = path.resolve(path.dirname(''));
const FacebookStrategy = strategy.Strategy;
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_URL = `mongodb+srv://VoskanGrigoryan:bLZAxc0fp132@cluster0.qb578.mongodb.net/eCommerce`;

app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENT_FB_ID,
    clientSecret: process.env.CLIENT_SECRET_FB,
    callbackURL: "http://localhost:4000/facebook/callback",
    profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']
  },
  function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        console.log(profile)
        return cb(err, user);
    });
  }
));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'));
});
app.use('/', prodRoutes);
app.use('/', facebookLogin);

// //configurations
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'raymundo.altenwerth49@ethereal.email',
//         pass: 'Juq47KZWQe8CNmwGnm'
//     }
// });
// //mail options
// const mailOptions = {
//     from: 'Servidor Node.js',
//     to: 'voskan.grigoryan.arg@gmail.com',
//     subject: 'Mail de prueba desde Node.js',
//     html: '<h1 style="color: blue"> Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span> </h1>'
// }
// //sending action
// transporter.sendMail(mailOptions, (err, info) => {
//     if (err) {
//         console.log(err)
//         return err
//     }
//     console.log(info)
// })

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
