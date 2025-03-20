const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    isOpen: {
      type: Boolean,
      default: false,
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
    restaurantUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Restaurant', restaurantSchema);
