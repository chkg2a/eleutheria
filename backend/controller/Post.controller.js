import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const Post = async (req, res) => {
    try {
       
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
    const user=await User.findOne(decode.userId);
    
    if(!user){
        return res.status(401).send({ message: "not logged in" });
    }
    user.pub
    } catch (error) {
        
    }
}