import User from '../models/user.js';
import Post from '../models/post.js';
import mongoose from 'mongoose';

export const findUserByUsername = async (req, res) => {
    try{
        const user = await User.findOne({ username: req.params.username }).select('admin email pictureUrl username');

        const posts = await Post.find({ creator: user._id }).populate('creator', 'username -_id imageUrl');

        user.posts = posts;

        res.json(user);
    } catch(e){
        res.json({ message: e.message });
        console.log(e);
    }
}