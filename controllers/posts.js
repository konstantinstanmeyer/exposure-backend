import Post from '../models/post.js';

export const postAddProduct = async (req,res) => {
    const user = req.user;

    if (!user.userId) return res.status(400).json({message: "Not Authorized"});


    try {
        const { category, description, genre, author } = req.body;

        const post = new Post({ category: category, description: description, genre: genre, author: author, creator: user.userId })

        const response = await post.save();

        res.json(response);
    } catch(err) {
        res.json(err);
        console.log(err);
    }
}