import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cuisine: {
      type: [String],
      required: true,
    },
    tage: {
      type: String,
      enum: ['veg', 'non-veg', 'both'],
      default: 'both',
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    openingHours: {
      type: String,
    },
    hasDelivery: {
      type: Boolean,
      default: true,
    },
    deliveryTime: {
      type: String,
    },
    deliveryPrice: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    review: {
      type: String,
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Address',
    },
    menu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu',
      },
    ],
  },
  { timestamps: true }
);

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
