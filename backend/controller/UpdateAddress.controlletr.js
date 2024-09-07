import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const UpdateAddress=async(req,res)=>{
    try {
        const {address}=req.body;
        console.log(address);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
    const user=await User.findOne({_id:decode.userId});
    if(!user){
        return res.status(401).send({ message: "User not found" });
    }
    user.address=address;
    user.save();
    res.status(200).send({message:"address updated successfully",user});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }


}
export default UpdateAddress;