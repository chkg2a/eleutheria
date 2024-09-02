import Post from "../model/post.model.js";
import User from "../model/user.model.js";

const CreatePost=async(req,res)=>{
    try {
        const email="test@gmail.com";
    const user=await User.findOne({email});
    const {title,description}=req.body;
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