import express from 'express'
import cors from 'cors'
import SignInrouter from './route/Signin.route.js';
import SignUprouter from './route/Signup.route.js';
import connectDb from './db/connectDb.js';
import CreatePostrouter from './route/CreatePost.model.js';
import imageUpdaterrouter from './route/ImageUpdate.route.js';
import GetPostrouter from './route/GetPost.route.js';
const app=express();
const PORT=process.env.PORT || 3001;
app.use(express.json());
app.use(cors());



app.use("/api",SignInrouter);
app.use("/api",SignUprouter);
app.use("/post",CreatePostrouter);
app.use("/image",imageUpdaterrouter);
app.use("/get",GetPostrouter);




const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();