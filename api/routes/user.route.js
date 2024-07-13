import express from 'express';
import { editAccount, editProfile } from '../controllers/user.controller.js';
import { authenticateToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/edit-profile', authenticateToken, editProfile);
router.post('/edit-account', authenticateToken, editAccount);
export default router;
