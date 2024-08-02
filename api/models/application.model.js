
import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    fatherName: {
        type: String,
        required: true,
      },
    motherName: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      nation: {
        type: String,
        required: true,
      },
      secondNation: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
      passportNo: {
        type: String,
        required: true,
      },
      secondPassportNo: {
        type: String,
        required: false,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      secondPhoneNumber: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
      },
      university: {
        type: String,
        required: true,
      },
      department: {
        type: String,
        required: true,
      },
      departmentLanguage: {
        type: String,
        required: true,
      },
      studentPicture: {
        type: String,
        required: true,
      },
      certificatePicture: {
        type: String,
        required: true,
      },
      passportPicture: {
        type: String,
        required: true,
      },
      secondPassportPicture: {
        type: String,
        required: false,
      },
      transcriptPicture: {
        type: String,
        required: true,
      },
      extraOne: {
        type: String,
        required: false,
      },
      extraTwo: {
        type: String,
        required: false,
      },
      extraThree: {
        type: String,
        required: false,
      },
      extraFour: {
        type: String,
        required: false,
      },
      extraFive: {
        type: String,
        required: false,
      },
      extraSix: {
        type: String,
        required: false,
      },
      appStatus: {
        type: String,
        enum : ['Pending','Accepted','Rejected','In Process','Awaiting Payment','Final Acceptance Letter','Awaiting Student Card','Completed'],
        default: 'Pending'
      },
      trackingNumber: {
        type: String,
        required: false,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Application = mongoose.model('Application', ApplicationSchema);

export default Application;
