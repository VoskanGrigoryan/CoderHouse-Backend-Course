import fbUser from '../models/facebookUser.js';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const accountSid = 'AC01557da25e1fcb106a80e09b97bbc379';
const authToken = 'a1bd7cac502be956e23d1f1c973900b6';
const client = new twilio(accountSid, authToken);
// ---------------------------------------------NODEMAILER-----------------------------------------------------------------
//configurations
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'vinnie.ferry34@ethereal.email',
        pass: 'ySbkgM3YCgdZK6taa9',
    },
});

const gTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'voskan.grigoryan.arg@gmail.com',
        pass: 'bLZAxc0fp',
    },
});

// ---------------------------------------------NODEMAILER-----------------------------------------------------------------

const login = async (req, res) => {
    //Case for user login into facebook
    const now = new Date();

    const userInfo = {
        loginTime: now,
        restOfData: 'I havent implemented that login from the front, shoot',
    };

    //mail options
    const mailOptions = {
        from: 'Gmail',
        to: 'voskan.grigoryan.arg@gmail.com',
        subject: 'Mail de prueba desde Node.js',
        html: `<h1>${userInfo.loginTime}</h1>" message: ${userInfo.restOfData}`,
    };

    //sending action
    gTransporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(info);
    });

    res.status(201).send(userInfo);
};

const facebookLogin = async (req, res) => {
    const user = req.body;
    const { name, email, picture } = user;
    const profilePicture = picture.data.url;
    const time = new Date();

    client.messages
        .create({
            body: `Hello! This is a message send when logging in to facebook. User: ${name}`,
            to: '+541122540293', // Text this number
            from: '+13346030827', // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));

    const userExists = await fbUser.findOne({ name: name });
    if (userExists !== null || userExists !== undefined) {
        return res.status(409).json({ error: 'User already exists' });
    }
    const newUser = new fbUser(user);

    try {
        newUser.save();
        res.status(200).json(req.body);

        const mailOptions = {
            from: 'Gmail',
            to: email,
            subject: 'Facebook login',
            html: `<h1>User connected at ${time} for the user ${name}</h1>`,
            attachments: [
                {
                    filename: 'profile photo.png',
                    path: `${profilePicture}`,
                },
            ],
        };

        //sending action
        gTransporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log(info);
        });
    } catch (err) {
        res.status(409).json({ err });
    }
};

const logout = async (req, res) => {
    //Case for user logout form facebook
    let now = new Date();
    let userInfo = {
        logout: now,
        restOfData: 'No functionality yet from the frontend for logouts, shoot..',
    };
};

export { login, facebookLogin, logout };
