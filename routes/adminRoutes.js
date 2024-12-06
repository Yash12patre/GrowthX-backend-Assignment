import express from 'express';
import { verifyToken, checkRole } from '../middleware/token.js';
import { getTaggedAssignments, getSingle, acceptAssignment, rejectAssignment } from '../controllers/admin.js';

const router = express.Router();

// Define routes
router.get('/assignments', verifyToken, checkRole, getTaggedAssignments);
router.get('/assignments/:id', verifyToken, checkRole, getSingle);
router.put('/assignments/:id/accept', verifyToken, checkRole, acceptAssignment);
router.put('/assignments/:id/reject', verifyToken, checkRole, rejectAssignment);

// Export the router
export default router;