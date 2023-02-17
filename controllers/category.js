import Category from "../models/category.js";
import User from "../models/user.js";

export const addCategory = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user || !user.admin) return res.status(400).json({message: "Not Authorized"});

        const category = new Category({ name: req.body.name, imageUrl: req.body.imageUrl });

        const response = await category.save();

        res.json(response);
    } catch (e){
        console.log(e);
        res.json(e.message);
    }
}

export const addSubCategory = async (req,res) => {
    try{
        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user || !user.admin) return res.status(400).json({message: "Not Authorized"});

        // console.log(req.body)
        
        const category = await Category.findOne({ name: req.body.category });

        category.subs.push({ name: req.body.name, imageUrl: req.body.imageUrl, obscurity: req.body.obscurity })

        const response = await category.save();

        res.json(response);
    } catch(e){
        console.log(e)
        res.json(e)
    }
}

export const getCategories = async (req, res) => {
    try{
        const categories = await Category.find().select('name imageUrl -_id');

        const shuffledCategories = categories.sort((a, b) => 0.5 - Math.random());;
          
        res.json(shuffledCategories)
    }catch(e){
        res.json(e)
    }
}

export const getSubCategories = async (req, res) => {
    try {
        const subCategories = await Category.findOne({ name: req.params.category }).select('-_id name subs')

        // subCategories.subs = [...subCategories.subs.slice((req.params.page - 1) * 4, (req.params.page - 1) * 4 + 4)]

        const newSubs = subCategories.subs.filter(sub => sub.obscurity === +req.params.obscurity).slice((req.params.page - 1) * 4, (req.params.page - 1) * 4 + 4)

        subCategories.subs = newSubs;

        res.json(subCategories);
    } catch(e){

    }
}