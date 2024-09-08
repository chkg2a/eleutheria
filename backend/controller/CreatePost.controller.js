import Post from "../model/post.model.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const CreatePost=async(req,res)=>{
    try {
    const {title,description,base64}=req.body;
    console.log(base64);
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
    const user=await User.findOne({_id:decode.userId});
    console.log(title,description);
    const post=await Post.create({description,image:base64,User:user._id});
    post.save();
    
    user.posts.push(post);
    user.save();
    res.status(200).json({message:"post created successfully",post});
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });
        console.log(error);
    }

}
export default CreatePost;