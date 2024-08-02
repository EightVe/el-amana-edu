import crypto from 'crypto-js';
import Application from '../models/application.model.js';

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.lib.WordArray.random(1).words[0] % characters.length;
    result += characters[randomIndex];
  }
  return result;
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