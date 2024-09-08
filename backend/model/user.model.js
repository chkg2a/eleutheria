import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema({
    public: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const subscriptionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",  // Reference to the User model
        required: true
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
    profileBanner: {
        type: String,
        default: ""
    },
    posts: [postSchema],  // Array of post objects
    subscriptions: [subscriptionSchema]  // Array of user references in subscriptions
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
