import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

async function connectDB() {
  await mongoose.connect(
    `mongodb+srv://the69bit:3kNQYhFGoYVFnUsg@quickcluster.smbb5.mongodb.net/${DB_NAME}`
  );
}

export default connectDB;
