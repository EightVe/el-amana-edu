import express from 'express';
import { sendApplication,getApplicationStatus,getAllApplications,updateApplicationStatus,getUserStatistics ,getApplicationStatistics} from '../controllers/application.controller.js';
import { authenticateToken,authorizeAdmin } from '../utils/verifyUser.js';
const router = express.Router();


router.post('/send',authenticateToken, sendApplication);
router.get('/application-status/:trackingNumber', getApplicationStatus);
router.get('/get-all', authenticateToken, authorizeAdmin, getAllApplications);
router.post('/update-status', authenticateToken, authorizeAdmin, updateApplicationStatus);
router.get('/fetchapp-statistics', authenticateToken, authorizeAdmin, getApplicationStatistics);
router.get('/fetchuser-statistics', authenticateToken, authorizeAdmin, getUserStatistics);
export default router;