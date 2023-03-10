import Post from '../models/post.js';
import User from '../models/user.js';

export const postAddProduct = async (req,res) => {
    const user = req.user;

    try {
        const { category, description, subCategory, imageUrl, title } = req.body;

        const post = new Post({ title: title, category: category, description: description, subCategory: subCategory, creator: user.userId, imageUrl: imageUrl })

        const response = await post.save();

        res.json(response);
    } catch(err) {
        res.json(err);
        console.log(err);
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findOne({ _id: id }).populate('creator', 'username -_id pictureUrl date');

        res.json(post);
    } catch(e){
        res.status(400).json(e.message)
        console.log(e);
    }
}

export const getSubCategoryPosts = async (req,res) => {
    try {
        const { category, subCategory } = req.params;

        const posts = await Post.find({ category: category, subCategory: subCategory }).select('category sizing imageUrl title description subCategory creator').populate('creator', 'pictureUrl username -_id');
    
        res.json({posts});
    }catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const getEditPost = async (req,res) => {
    try {
        const { id } = req.params;

        const post = await Post.findById(id).select('imageUrl description creator, title').populate('creator', 'username');

        res.json(post);
    } catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const postEditPost = async (req, res) => {
    try {
        const { title, username, imageUrl, description } = req.body;

        const user = await User.findById(req.user.userId);

        const validatedUsername = user.username;

        if(username === validatedUsername) {
            const response = await Post.findOneAndUpdate({ _id:req.params.id}, { $set: { imageUrl: imageUrl, title: title, description: description } });
            res.json(response);
            console.log(response);
        } else {
            res.status(400).json({ message: 'Unauthorized' });
        }
    } catch(e) {
        console.log(e);
        res.json(e.message);
    }
}