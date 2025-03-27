import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

async function connectDB() {
  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
}

export default connectDB;
