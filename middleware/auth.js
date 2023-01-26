import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    let decodedToken;
    const auth = req.get('Authorization');
    if (!auth) {
        res.json({ message: "Not logged in" })
    }
    const token = auth.split(' ')[1];
    try{
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    }catch(e){
        console.log(e);
        res.status(400).json({ message: "Authorization failed" })
    }
    req.user = decodedToken;
    next();
}

export default auth;