import User from "../model/User.js";
import jwt from "jsonwebtoken";
const GetPic=async(req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).send({ message: "Not logged in" });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).send({ message: "Not logged in" });
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user=await User.findOne({_id:decode.userId});
        if(!user){
            return res.status(401).send({ message: "User not found" });
        }

        res.status(200).json({message:"Profile pic fetched successfully",user});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}


export default GetPic