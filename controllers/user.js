import User from '../models/user.js';

export const findUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        console.log(user);
    } catch(e){

    }
}