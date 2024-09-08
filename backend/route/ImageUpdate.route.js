import express from "express";
import ImageUpdate from "../controller/ImageUpdate.controller.js";
const imageUpdaterrouter = express.Router();


imageUpdaterrouter.post("/update/imageupdate", ImageUpdate);
export default imageUpdaterrouter;
