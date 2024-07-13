// controllers/verification.controller.js
import nodemailer from 'nodemailer';
import OTP from '../models/otp.model.js';
import User from '../models/user.model.js';
import crypto from 'crypto';


// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vexobyte8@gmail.com',
    pass: 'sqzfncwlgczighgv',
  },
  tls: {
    rejectUnauthorized: false, // Add this line
  },
});

// Generate a 6-digit OTP
const generateOTP = () => {
  return crypto.randomInt(100000, 999999).toString();
};


export const sendOTP = async (req, res) => {
  const { userId, email } = req.body;
  const otp = generateOTP();

  const mailOptions = {
    from: 'vexobyte8@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);

    // Save OTP to database
    await OTP.create({ userId, otp });

    res.status(200).json({ message: 'OTP sent to email successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending OTP.', error });
  }
};

// Verify OTP
export const verifyOTP = async (req, res) => {
  const { userId, otp } = req.body;

  try {
    const otpRecord = await OTP.findOne({ userId, otp });

    if (!otpRecord) {
      return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    // Verify the user's email
    await User.findByIdAndUpdate(userId, { verifiedEmail: true });

    // Delete the OTP record
    await OTP.deleteOne({ _id: otpRecord._id });

    res.status(200).json({ message: 'Email verified successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying OTP.', error });
  }
};


