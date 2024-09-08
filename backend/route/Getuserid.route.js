import express from 'express'
import getUserId from '../controller/GetUserId.controller.js';

const GetUserrouterid=express.Router();
GetUserrouterid.post("/getuserid",getUserId);
export default GetUserrouterid