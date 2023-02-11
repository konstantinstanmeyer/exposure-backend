import Post from '../models/post.js';

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
        const post = await Post.findOne({ _id: id }).populate('creator', 'username -_id imageUrl');

        res.json(post);
    } catch(e){
        res.status(400).json(e.message)
        console.log(e);
    }
}

export const getSubCategoryPosts = async (req,res) => {
    const { category, subCategory } = req.params;

    const posts = await Post.find({ category: category, subCategory: subCategory }).populate('creator');

    res.json({posts});
}