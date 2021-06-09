import mongoose from 'mongoose';

var fbUserSchema = mongoose.Schema({
    uid: String,
    token: String,
    email: String,
    name: String,
    gender: String,
    pic: String,
});

const User = mongoose.model('usersFB', fbUserSchema);

export default User;
