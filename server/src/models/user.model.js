import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 60,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },
    role: {
      type: String,
      required: true,
      enum: ['customer', 'restaurant-owner', 'delivery-boy', 'admin'],
      default: 'customer',
    },
    phoneNumber: {
      type: Number,
      required: true,
      unique: true,
      min: 10,
      max: 10,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
