import User from '../models/facebookUser.js';
import nodemailer from 'nodemailer';

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
        // attachment: [{}],
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

const logout = async (req, res) => {
    //Case for user logout form facebook
    let now = new Date();
    let userInfo = {
        logout: now,
        restOfData: 'I havent implemented the option to send this from the front, shoot',
    };
};

const facebookLogin = async (req, res) => {
    const user = req.body;

    const userExists = await fbUser.findOne({ userName: req.body.name });
    if (userExists) {
        return res.status(409).json({ error: 'User already exists' });
    }
    const newUser = new fbUser(user);

    try {
        newUser.save();
        res.status(200).json(req.body);
    } catch (err) {
        res.status(409).json({ err });
    }
};

// export default { login, logout, facebookLogin };
export default login;
