import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Restaurant',
      required: true,
    },
    items: [
      {
        menu: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Menu',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalAmmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid', 'Failed'],
      default: 'Pending',
    },
    paymentMethod: {
      type: String,
      enum: ['COD', 'Card', 'UPI', 'Wallet'],
      default: 'COD',
    },
    orderStatus: {
      type: String,
      enum: [
        'Placed',
        'Confirmed',
        'Preparing',
        'Out for delivery',
        'Delivered',
        'Cancelled',
      ],
      default: 'Placed',
    },
    placedAt: {
      type: Date,
      default: Date.now,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
