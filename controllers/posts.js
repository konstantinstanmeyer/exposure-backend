import Product from '../models/post.js';

export const postAddProduct = async (req,res) => {
    try {
        const { category, description, genre, author } = req.body;

        const product = new Product({category: category, description: description, genre: genre, author: author })

        const response = await product.save();

        res.json(response);
    } catch(err) {
        res.json(err);
        console.log(err);
    }
}