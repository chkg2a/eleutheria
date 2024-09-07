import express from 'express'
import GetPostUser from '../controller/GetUserPost.controller.js'

const GetPostrouterUser=express.Router();
GetPostrouterUser.get("/post/:postId",GetPostUser);

export default GetPostrouterUser;
