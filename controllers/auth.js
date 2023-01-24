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
        res.json(response);
    } catch(e){
        res.json({ "message": "Failed Request" });
        console.log(e.message);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if (!user) return res.status(400).json({ message: "User does not exist." });

        const isTrue = await bcrypt.compare(password, user.password);
        
        if (!isTrue) return res.status(400).json({ message: "Invalid credentials."});

        delete user.password;

        const token = jwt.sign(
            {
                username: user.username,
                userId: user._id
            }, process.env.JWT_SECRET
        )

        delete user._id;

        res.json({ token, user });
    } catch(e) {
        res.status(400).json({ "message": "Failed Login "});
        console.log(e.message);
    }
}