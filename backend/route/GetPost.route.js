import express from 'express'
import GetPost from '../controller/GetAllPost.controller.js';


const GetPostrouter=express.Router();

GetPostrouter.get("/getpost",GetPost);
export default GetPostrouter;