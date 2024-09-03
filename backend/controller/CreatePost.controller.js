import Post from "../model/post.model.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
const CreatePost=async(req,res)=>{
    try {
    const {title,description}=req.body;
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const decode=jwt.verify(token,process.env.JWT_SECRET_KEY);
    const user=await User.findOne(decode.userId);
    console.log(title,description);
    const post=await Post.create({title,description,User:user._id});
    post.save();
    user.posts.push(post._id);
    user.save();
    res.status(200).json({message:"post created successfully",post});
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });
        console.log(error);
    }

}
export default CreatePost;