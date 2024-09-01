import express from 'express'
import cors from 'cors'
import SignInrouter from './route/Signin.route.js';
import SignUprouter from './route/Signup.route.js';
import connectDb from './db/connectDb.js';
const app=express();
const PORT=process.env.PORT || 3001;
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("hello");
});

app.use("/api",SignInrouter);

app.use("/api",SignUprouter);




const startServer=async()=>{
    try {
        await connectDb();
        app.listen(PORT,()=>console.log(`server is running on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}
startServer();