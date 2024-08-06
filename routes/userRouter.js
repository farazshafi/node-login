// routes/userRoute.js
import { userLogin, userValdation, userHome, userLogout } from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.get("/login", userLogin);
router.post("/home",userValdation)
router.get("/home",userHome)
router.post("/logout",userLogout)



export default router;