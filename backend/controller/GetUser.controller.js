import jwt from 'jsonwebtoken';
import User from "../model/user.model.js";

const GetUser = async (req, res) => {
    
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).send({ message: "Authorization header is missing" });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send({ message: "Token is missing" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({ _id: decode.userId });

    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    console.log(error);

  }
}
export default GetUser;