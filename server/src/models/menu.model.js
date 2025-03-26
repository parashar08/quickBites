import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ['Starter', 'Main Course', 'Dessert', 'Beverage'],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    isVeg: {
      type: Boolean,
      default: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

export const Menu = mongoose.model('Menu', menuSchema);
