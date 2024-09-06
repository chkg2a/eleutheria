import User from "../model/user.model.js";
import Post from "../model/post.model.js";


const GetPostUser=async(req,res)=>{
    const {id}=req.params;


    try {
        const user=await User.findOne({_id:id}).populate('posts');
        console.log(user);
        res.status(200).json({message:"posts fetched successfully",user});


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default GetPostUser