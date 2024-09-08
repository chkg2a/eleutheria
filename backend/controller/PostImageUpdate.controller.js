import Post from "../model/post.model.js";

const PostImage=async(req,res)=>{
    const {base64}=req.body;
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}