import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.comparePassword = function (loginUserPassword) {
  return bcrypt.compare(loginUserPassword, this.password);
};

userSchema.methods.generateJwtToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      role: this.role,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '24h' }
  );
};

export const User = mongoose.model('User', userSchema);
