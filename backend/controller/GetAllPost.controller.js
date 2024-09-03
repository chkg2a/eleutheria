import User from "../model/user.model.js";
import Post from "../model/post.model.js";


const GetPost=async(req,res)=>{
    const id="66d74b1bedaebc6735a2f3cd";


    try {
        const user=await User.findOne({_id:id}).populate("posts");
        console.log(user.posts[0].title);
        res.status(200).json({message:"posts fetched successfully",user});


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default GetPost