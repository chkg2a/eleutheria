import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";

const SignUp=async(req,res)=>{
   try {
    const {email,password,name}=req.body;
    console.log(email,password,name);
    if(!email || !password || !name){
        return res.status(400).json({message:"All fields are required"});
    }
    const existingUser=await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword = bcryptjs.hashSync(password);
    const user=await User.create({email,password:hashedPassword,name});
    user.save();
    res.status(200).json({message:"User created successfully",user});
   } catch (error) {
    res.status(500).send({ message: "something went wrong" });
    console.log(error);
   }
};


export default SignUp