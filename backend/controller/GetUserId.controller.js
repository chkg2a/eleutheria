
import User from "../model/user.model.js";

const getUserId=async(req,res)=>{
    try {
        const { userId,user}=req.body;
        console.log(userId);
        const fix=await User.findOne({_id:userId});
        fix.subscriptions.push(fix);
        fix.save();
    // fix.subscriptions.push(fix);
      //  fix.save();
        res.status(200).json({message:"user fetched successfully",fix});
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "something went wrong" });
    }
}
export default getUserId;