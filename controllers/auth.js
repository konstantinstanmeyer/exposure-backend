import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { faker } from '@faker-js/faker';
import jwt from 'jsonwebtoken';

export const register = async (req,res) => {
    try {
        const {
            email,
            password
        } = req.body;
        
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const user = new User({
            email: email,
            username: faker.word.adjective({ length: { min: 4, max: 7 }, strategy: "fail" }) + "-" + faker.word.noun({ length: { min: 4, max: 7 }, strategy: "fail" }),
            password: passwordHash
        });

        const response = await user.save();

        console.log(response)

        const username = response.username;
        const id = response._id;
        
        if (!username) return res.json({ message: "Invalid Credentials" })

        const token = jwt.sign({ userId: id }, process.env.JWT_SECRET);

        res.json({ token, username, id });
    } catch(e){
        if (e.code === 11000){
            res.json({ "message": "An account already uses this email"})
        } else {
            res.json({ "Message": "Authorization Failed"})
        }
        console.log(e);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email }, { username: 1, password: 1 });

        if (!user) return res.status(400).json({ message: "User does not exist." });

        const isTrue = await bcrypt.compare(password, user.password);
        
        if (!isTrue) return res.status(400).json({ message: "Invalid credentials."});

        delete user.password;

        console.log(user)

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

        res.json({ token, username: user.username });
    } catch(e) {
        res.status(400).json({ "message": "Failed Login "});
        console.log(e);
    }
}