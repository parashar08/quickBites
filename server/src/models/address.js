const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema(
  {
    ownerType: {
      type: String,
      enum: ['User', 'Restaurant'],
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'ownerType',
      required: true,
    },
    addressType: {
      type: String,
      enum: ['home', 'work', 'other'],
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    landmark: {
      type: String,
    },
    locality: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
