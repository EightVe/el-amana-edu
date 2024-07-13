
import express from 'express';
import { sendOTP, verifyOTP } from '../controllers/verification.controller.js';

const router = express.Router();

router.post('/send-email-otp', sendOTP);
router.post('/verify-email-otp', verifyOTP);
export default router;
