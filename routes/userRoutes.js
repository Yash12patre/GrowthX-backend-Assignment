import express from "express";
import { verifyToken } from "../middleware/token.js";
import { getAllAdmins, uploadAssignment } from "../controller/user.js";

const router = express.Router();

router.get('/admins', verifyToken, getAllAdmins);
router.post('/upload', verifyToken, uploadAssignment);

export default router;