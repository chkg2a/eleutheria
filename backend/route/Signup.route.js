import express from 'express'
import SignUp from '../controller/Signup.contoller.js';
const SignUprouter=express.Router();


SignUprouter.post("/signup",SignUp);

export default SignUprouter;