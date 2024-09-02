import express from 'express'
import SignIn from '../controller/Signin.controller.js';
const SignInrouter=express.Router();


SignInrouter.post("/signin",SignIn);

export default SignInrouter;