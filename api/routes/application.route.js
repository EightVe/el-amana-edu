import express from 'express';
import { sendApplication,getApplicationStatus } from '../controllers/application.controller.js';
import { authenticateToken } from '../utils/verifyUser.js';
const router = express.Router();


router.post('/send',authenticateToken, sendApplication);
router.get('/application-status/:trackingNumber', getApplicationStatus);
export default router;