import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    let decodedToken;
    const auth = req.get('Authorization');
    if (!auth) {
        return res.json({ message: "Not logged in" })
    }
    const token = auth.split(' ')[1];
    try{
        if (token === "null") {
            // console.log('ew')
            return res.status(400).json({ message: "Authorization failed" })
        }
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    }catch(e){
        console.log(e);
        res.status(400).json({ message: "Authorization failed" })
    }
    req.user = decodedToken;
    next();
}

export default auth;