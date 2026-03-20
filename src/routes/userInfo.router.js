import express from "express";
import getUserInfo from "../controllers/getInfo.controller.js";

const router = express.Router();

router.post("/getuserinfo", getUserInfo);

export default router;