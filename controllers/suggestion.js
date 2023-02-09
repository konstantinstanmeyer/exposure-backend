import Suggestion from '../models/suggestion.js'

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