import User from '../models/user.js';
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
    const userData = req.body;
    const { email, password } = userData;
    console.log(userData);

    const isEmailExpast = await User.findOne({ email: email });
    if (isEmailExpast) {
        return res.status(400).json({ error: 'Email ya registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    userData.password = passwordHashed;
    const newUser = new User(userData);

    try {
        newUser.save();
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json({ err });
    }
};

const loginUser = async (req, res) => {
    const userData = req.body;
    const { userName, password } = userData;

    let user = await User.findOne({ userName: userName });

    if (!user) {
        return res.status(404).send({ error: 'No hay usuario' });
    }
    let userPassword = user.password;

    const validPassword = bcrypt.compareSync(password, userPassword);
    if (!validPassword) {
        return res.status(400).json({ error: 'Contraseña no valida' });
    }

    console.log('Un lujo rey se inicio sesion');
    res.status(200).send(user);
};

export { createUser, loginUser };
