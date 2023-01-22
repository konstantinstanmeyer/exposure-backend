import Product from '../models/post.js';

export const postAddProduct = (req,res) => {
    const category = req.body.category;
    const description = req.body.description;

    const product = new Product({category: category, description: description})
    product
        .save()
        .then(response => {
            res.json(response);
        })
        .catch(err => {
            console.log(err);
        })
}