import express from 'express';
import { editAccount, editProfile,enableTwoFac ,disableTwoFac} from '../controllers/user.controller.js';
import { authenticateToken } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/edit-profile', authenticateToken, editProfile);
router.post('/edit-account', authenticateToken, editAccount);
router.post('/enable-twofac', authenticateToken, enableTwoFac);
router.post('/disable-twofac', authenticateToken, disableTwoFac);
export default router;
