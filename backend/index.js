import express from 'express'
import cors from 'cors'
import SignInrouter from './route/Signin.route.js';
import SignUprouter from './route/Signup.route.js';
import connectDb from './db/connectDb.js';
import CreatePostrouter from './route/CreatePost.model.js';
import imageUpdaterrouter from './route/ImageUpdate.route.js';
import GetPostrouter from './route/GetPost.route.js';
//import GetProfile from './route/GetProfilePic.route.js';
import GetPostrouterUser from './route/GetUserPost.route.js';
const app=express();
const PORT=process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173'
  }));


app.use("/api",SignInrouter);
app.use("/api",SignUprouter);
app.use("/post",CreatePostrouter);
app.use("/image",imageUpdaterrouter);
app.use("/home",GetPostrouter);
//app.use("profile",GetProfile);
app.use("/user",GetPostrouterUser);



const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();