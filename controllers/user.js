import User from '../models/user.js';

export const findUserByUsername = async (req, res) => {
    try{
        const user = await User.findOne({ username: req.params.username});
        console.log(user);
    } catch(e){
        
    }
}