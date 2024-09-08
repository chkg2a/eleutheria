import dotenv from 'dotenv';
import User from '../model/user.model.js';
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
dotenv.config();


const SignIn = async(req, res) => {
   try {
      const { email, password } = req.body;
      console.log(email, password);
   if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
   }
   const user=await User.findOne({email});
   if(!user){
      return res.status(400).json({ message: "User does not exist" });
   }
   if(!bcryptjs.compareSync(password,user.password)){
      return res.status(401).json({message:"Invalid credentials"});
  }
  const token=jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY,{
    expiresIn:"2min",
  });
  res.status(200).json({message:"Login successful",user,token});
   } catch (error) {
      res.status(500).send({ message: "something went wrong" });
      console.log(error);
   }
};
export default SignIn   