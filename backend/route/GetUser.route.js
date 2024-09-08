import express from 'express'
import GetUser from '../controller/GetUser.controller.js';

const GetUserrouter=express.Router();

GetUserrouter.post("/getuser",GetUser);

export default GetUserrouter;