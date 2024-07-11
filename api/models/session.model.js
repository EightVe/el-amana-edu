import mongoose from 'mongoose';
import { thirtyDaysFromNow } from '../utils/date';

const sessionSchema = new mongoose.Schema(
  {
    userId: {
      ref : "User",
      required: true,
      type : mongoose.Schema.Types.ObjectId,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
      },
      expiresAt: {
        type: Date,
        required: true,
        default: thirtyDaysFromNow,
      },
      userAgent: {
        type: String,
      },
  },
  { timestamps: true }
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;