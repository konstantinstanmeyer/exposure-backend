import Post from '../models/post.js';

export const postAddProduct = async (req,res) => {
    const user = req.user;

    if (!user.userId) return res.status(400).json({message: "Not Authorized"});

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