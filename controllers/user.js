import User from '../models/user.js';

export const findUserByUsername = async (req, res) => {
    try{
        const user = await User.findOne({ username: req.params.username});
        
        console.log(user);

        res.json({ user });
    } catch(e){
        res.json({ message: e.message });
        console.log(e);
    }
}