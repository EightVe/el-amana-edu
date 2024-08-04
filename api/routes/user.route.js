import express from 'express';
import { editAccount, editProfile,enableTwoFac ,disableTwoFac,deleteAccount,getAllUsers,updateUserRolesAndPermissions} from '../controllers/user.controller.js';
import { authenticateToken,authorizeAdmin } from '../utils/verifyUser.js';
const router = express.Router();

router.post('/edit-profile', authenticateToken, editProfile);
router.post('/edit-account', authenticateToken, editAccount);
router.post('/enable-twofac', authenticateToken, enableTwoFac);
router.post('/disable-twofac', authenticateToken, disableTwoFac);
router.post('/delete-account', authenticateToken, deleteAccount);
router.get('/get-all', authenticateToken, authorizeAdmin, getAllUsers);
router.post('/update-roles-permissions', authenticateToken, authorizeAdmin, updateUserRolesAndPermissions);
export default router;
