// authRoutes.mjs
import express from "express";
import { verifyToken } from "../middleware/token.js";
import {
  registerController,
  loginController,
  logoutController,
} from "../controller/auth.js";

const router = express.Router();

// Define routes
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", verifyToken, logoutController);

// Export the router
export default router;