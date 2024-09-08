import express from "express";
import BannerPic from "../controller/UploadBannerPic.contoller.js";

const BannerPicrouter = express.Router();
BannerPicrouter.post("/update/bannerpic", BannerPic);
export default BannerPicrouter;