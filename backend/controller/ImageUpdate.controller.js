import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const ImageUpdate = async (req, res) => {
    try {
        const {imageUrl}=req.body;
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send({ message: "not logged in" });
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await User.findOne({_id:decode.userId});
        if(!user){
            return res.status(401).send({ message: "not logged in" });
        }
        user.profilePic=imageUrl;
        user.save();
        res.status(200).send({message:"profile pic updated",user});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default ImageUpdate