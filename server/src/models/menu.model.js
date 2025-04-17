import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
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
    imageURL: {
      type: String,
      required: true,
    },
    category: {
      type: String, // e.g., "Starters", "Main Course", "Desserts"
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    tags: {
      type: [String], // e.g., ["Spicy", "Vegan"]
    },
  },
  { timestamps: true }
);

export const Menu = mongoose.model('Menu', menuSchema);
