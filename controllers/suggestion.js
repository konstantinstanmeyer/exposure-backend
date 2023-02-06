import Suggestion from '../models/suggestion.js'

export const postSuggestion = async(req,res) => {
    try {
        const { username, existingCategory, newCategory, newSubCategory, obscurity, type } = req.body;

        if (type === "Category"){
            const suggestion = await Suggestion.new({
                username: username,
                newCategory: newCategory,
                obscurity: obscurity
            });

            const response = await suggestion.save();

            res.json(response);

        } else if (type === "SubCategory"){
            const suggestion = await Suggestion.new({
                username: username,
                existingCategory: existingCategory,
                newSubCategory: newSubCategory
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