import User from "../model/user.model.js";
import Post from "../model/post.model.js";


const GetPost=async(req,res)=>{
    


    try {
        const post=await Post.find({});
       console.log(post);
        res.status(200).json({message:"posts fetched successfully",post});


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default GetPost