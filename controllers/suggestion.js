import Suggestion from '../models/suggestion.js'
import User from '../models/user.js';

export const postSuggestion = async(req,res) => {
    try {
        const { username, existingCategory, newCategory, newSubCategory, obscurity, type } = req.body;

        if (type === "Category" && username && newCategory && type){
            const suggestion = new Suggestion({
                username: username,
                newCategory: newCategory,
                type: type
            });

            const response = await suggestion.save();

            res.json(response);

        } else if (type === "SubCategory" && obscurity && existingCategory && newSubCategory){
            const suggestion = new Suggestion({
                username: username,
                existingCategory: existingCategory,
                newSubCategory: newSubCategory,
                obscurity: obscurity,
                type: type
            })

            const response = await suggestion.save();

            res.json(response);
        } else {
            res.json({ message: "Not enough information provided" })
        }
    } catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const getSuggestions = async(req,res) => {
    try {
        const user = await User.findById(req.user.userId);
        
        if (user.admin) {
            const suggestions = await Suggestion.find();
            res.json(suggestions);
        }
    } catch(e){
        console.log(e);
        res.json(e.message);
    }
}

export const deleteById = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId);
        
        if (user.admin) {
            const response = await Suggestion.deleteById(req.params.id);
            res.json(response)
        }
    } catch(e) {
        console.log(e);
        res.json(e.message);
    }
}