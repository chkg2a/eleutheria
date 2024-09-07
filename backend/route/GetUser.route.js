import express from 'express'
import GetUser from '../controller/GetUser.controller.js';

const GetUserrouter=express.Router();

GetUserrouter.get("/getuser",GetUser);

export default GetUserrouter;