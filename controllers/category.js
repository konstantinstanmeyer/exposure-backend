import Category from "../models/category.js";
import User from "../models/user.js";

export const addCategory = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await User.findById(userId);

        if (!user || !user.admin) return res.status(400).json({message: "Not Authorized"});

        const category = new Category({ name: req.body.name });

        const response = await category.save();

        res.json(response);
    } catch (e){
        console.log(e);
        res.json(e.message);
    }
}