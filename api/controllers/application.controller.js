import crypto from 'crypto-js';
import nodemailer from 'nodemailer';
import Application from '../models/application.model.js';
import User from '../models/user.model.js';

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.lib.WordArray.random(1).words[0] % characters.length;
    result += characters[randomIndex];
  }
  return result;
};

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vexobyte8@gmail.com',
    pass: 'sqzfncwlgczighgv',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'vexobyte8@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export const sendApplication = async (req, res) => {
  try {
    const {
      fullName,
      fatherName,
      motherName,
      gender,
      nation,
      appStatus,
      secondNation,
      country,
      passportNo,
      secondPassportNo,
      phoneNumber,
      secondPhoneNumber,
      email,
      university,
      department,
      departmentLanguage,
      studentPicture,
      certificatePicture,
      passportPicture,
      secondPassportPicture,
      transcriptPicture,
      extraOne,
      extraTwo,
      extraThree,
      extraFour,
      extraFive,
      extraSix,
    } = req.body;

    const trackingNumber = generateRandomString(6);

    const application = new Application({
      userId: req.user.id,
      fullName,
      fatherName,
      motherName,
      gender,
      nation,
      secondNation,
      country,
      passportNo,
      secondPassportNo,
      phoneNumber,
      secondPhoneNumber,
      email,
      university,
      department,
      departmentLanguage,
      studentPicture,
      certificatePicture,
      passportPicture,
      secondPassportPicture,
      transcriptPicture,
      appStatus,
      extraOne,
      extraTwo,
      extraThree,
      trackingNumber,
      extraFour,
      extraFive,
      extraSix,
    });

    await application.save();

    // Send email with tracking number
    await sendEmail(
      email,
      'Application Submitted',
      `Your application has been submitted successfully. Your tracking number is ${trackingNumber}.`
    );

    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getApplicationStatus = async (req, res) => {
  try {
    const { trackingNumber } = req.params;
    const application = await Application.findOne({ trackingNumber });

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({ application });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('userId', 'firstName lastName');
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { appId, status } = req.body;
    const application = await Application.findById(appId);

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    const previousStatus = application.appStatus;
    application.appStatus = status;
    await application.save();

    // Get user email from application
    const user = await User.findById(application.userId);
    if (user) {
      await sendEmail(
        user.emailAddress,
        'Application Status Updated',
        `Your application status has been updated from ${previousStatus} to ${status}.`
      );
    }

    res.status(200).json({ message: 'Application status updated successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getApplicationStatistics = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    const statusCount = await Application.aggregate([
      { $group: { _id: "$appStatus", count: { $sum: 1 } } }
    ]);

    res.status(200).json({
      totalApplications,
      statusCount,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getUserStatistics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    res.status(200).json({
      totalUsers,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
