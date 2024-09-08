import User from "../model/user.model.js";
import Post from "../model/post.model.js";


const GetPost=async(req,res)=>{
    
    try {
        const user=await User.find();
       
        res.status(200).json({message:"posts fetched successfully",user});


    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}

export default GetPost
