import User from '../models/user';
import jwt from 'jsonwebtoken';

export const register = async (req,res) => {
    const {
        email,
        username,
        password
    } = req.body;

    const salt = await jwt.genSalt();
    const passwordHash = await jwt.hash(password, salt);

    const User = new User({
        email: email,
        username: username,
        password: passwordHash
    })
}