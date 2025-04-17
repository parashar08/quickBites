import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    addressOf: {
      type: String,
      enum: ['User', 'Restaurant'],
      required: true,
    },
    addressOfId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'addressOf',
      required: true,
    },
    addressType: {
      type: String,
      enum: ['Home', 'Work', 'Other'],
      required: true,
    },

    // Address Details
    street: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
      trim: true,
    },
    postalCode: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      default: 'India',
      trim: true,
    },

    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: function (coords) {
            return (
              coords.length === 2 &&
              coords[0] >= -180 &&
              coords[0] <= 180 &&
              coords[1] >= -90 &&
              coords[1] <= 90
            );
          },
          message: 'Invalid coordinates. Must be [longitude, latitude].',
        },
      },
    },

    landmark: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model('Address', addressSchema);
