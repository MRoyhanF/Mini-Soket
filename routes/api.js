import express from "express";
import { messageCtrl } from "../controller/api.js";

const router = express.Router();

router.post("/", messageCtrl);

export default router;
