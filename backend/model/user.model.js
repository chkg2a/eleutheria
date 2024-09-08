import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    public:{
        type:Boolean,
        default:false
    },
    
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:""
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: ""
    },
    profilePic: {
        type: String,
        default: ""
    },
    profileBanner:{
        type: String,
        default: ""
    },
    posts: [postSchema] // Array of post objects
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
