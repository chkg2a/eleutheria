import express from 'express'
import CreatePost from '../controller/CreatePost.controller.js';
const CreatePostrouter=express.Router();


CreatePostrouter.post("/createpost",CreatePost);

export default CreatePostrouter;