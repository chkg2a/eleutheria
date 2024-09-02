import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb=async()=>{
    try {
        const con=await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("connected to mongodb")).catch((err)=>console.log(err));
        
        return con;
    } catch (error) {
        console.log("error connecting : ",error);

    }
}
export default connectDb