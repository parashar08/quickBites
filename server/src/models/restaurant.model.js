import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    restaurantType: {
      type: String,
      enum: ['veg', 'non-veg', 'both'],
      default: 'both',
    },
    cuisineType: {
      type: [String],
      required: true,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    // contact info
    contact: {
      phone: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
      },
    },

    openingHours: {
      monday: { open: String, close: String },
      tuesday: { open: String, close: String },
      wednesday: { open: String, close: String },
      thursday: { open: String, close: String },
      friday: { open: String, close: String },
      saturday: { open: String, close: String },
      sunday: { open: String, close: String },
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    deliveryOptions: {
      hasDelivery: {
        type: Boolean,
        default: true,
      },
      deliveryTime: String,
      deliveryPrice: Number,
      deliveryRadius: Number,
    },

    logo: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    gallery: [Number],

    rating: {
      average: {
        type: Number,
        min: 1,
        max: 5,
        default: 1,
      },
      totalReview: {
        type: Number,
        default: 0,
      },
    },
  },
  { timestamps: true }
);

export const Restaurant = mongoose.model('Restaurant', restaurantSchema);
