import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    public:{
        type:Boolean,
        default:false
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
    User:{type:Schema.Types.ObjectId,ref:"User"}
});

const Post = mongoose.model("Post",postSchema);
export default Post;