import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const ImageUpdate = async (req, res) => {
    try {
        const {base64}=req.body;
        console.log(base64);
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send({ message: "not logged in" });
        }
        const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
        const user=await User.findOne({_id:decode.userId});
        console.log(user);
        if(!user){
            return res.status(401).send({ message: "not logged in" });
        }
        user.profilePic=base64;
        user.save();
        res.status(200).send({message:"profile pic updated",user});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default ImageUpdate