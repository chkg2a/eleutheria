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
import GetUserrouter from './route/GetUser.route.js';
import UpdateAddressrouter from './route/UpdateAddress.route.js';
import BannerPicrouter from './route/BannerPic.route.js';
const app=express();
const PORT=process.env.PORT || 3001;
app.use(express.json({limit:"50mb"}));
app.use(cors());
app.use(cors({
    origin: 'http://localhost:5173'
  }));


app.use("/api",SignInrouter);
app.use("/api",SignUprouter);
app.use("/post",CreatePostrouter);
app.use("/user",imageUpdaterrouter);
app.use("/home",GetPostrouter);
//app.use("profile",GetProfile);
app.use("/user",GetPostrouterUser);
app.use("/data",GetUserrouter);
app.use("/update",UpdateAddressrouter);
app.use("/user",BannerPicrouter);


const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();
