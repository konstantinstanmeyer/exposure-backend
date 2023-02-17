import User from '../models/user.js';
import Post from '../models/post.js';

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

export const getImageUrl = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.userId }).select('pictureUrl username -_id');

        res.json(user);
    } catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const getProfileEdit = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.userId }).select('pictureUrl username email -_id');

        res.json(user);
    } catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const postProfileEdit = async (req, res) => {
    try {
        const { email, username, imageUrl } = req.body;

        const user = await User.findOneAndUpdate({ _id: req.user.userId  }, { $set: { email: email, username: username, imageUrl: imageUrl }});

        res.json(user);
    } catch(e){
        console.log(e)
        res.status(400).json(e.message);
    }
}