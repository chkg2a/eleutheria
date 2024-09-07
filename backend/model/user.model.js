import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        default:""
        
    },
    profilePic:{
        type:String,
        default:""
    },
    posts:[{
        type:Schema.Types.ObjectId,
        ref:"Post"
    }]
},{
    timestamps:true
});

const User = mongoose.model("User",userSchema);
export default User;