import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

const BannerPic = async (req, res) => {
    try {
        const { base64 } = req.body;
        console.log(base64);

        // Check for authorization header and token
            const authHeader = req.headers['authorization'];
            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).send({ message: "Not logged in" });
            }

            const token = authHeader.split(' ')[1];
            if (!token) {
                return res.status(401).send({ message: "Not logged in" });
            }

        // Verify the token
        let decode;
        try {
            decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        } catch (err) {
            return res.status(403).send({ message: "Invalid token" });
        }

        // Find the user by the decoded token's userId
        const user = await User.findOne({ _id: decode.userId });
        if (!user) {
            return res.status(401).send({ message: "User not found" });
        }

        // Update and save the user's profile picture
        user.profileBanner = base64;
        await user.save(); // Await the save operation

        res.status(200).send({ message: "Profile pic updated", user });
    } catch (error) {
        console.error("Error in ImageUpdate:", error);
        res.status(500).send({ message: "Something went wrong" });
    }
};

export default BannerPic;
