import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    emailAddress: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
      },
      bio: {
        type: String,
      },
    password: {
      type: String,
      required: true,
    },
    verifiedEmail: {
        type: Boolean,
        default : false,
      },
      isAdmin: {
        type: Boolean,
        default : false,
      },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;