import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLenght: 50,
    },
    description: {
      type: String,
      required: true,
      minLength: 5,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    contact: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
    },
    cuisine: [
      {
        type: String,
        required: true,
      },
    ],
    menu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    deliveryRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    openingHours: {
      open: {
        type: String,
        requird: true,
      },
      close: {
        type: String,
        required: true,
      },
    },
    restaurantImage: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
