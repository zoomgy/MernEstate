import express from "express";
import { signUpContoller } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUpContoller);

export default router;
