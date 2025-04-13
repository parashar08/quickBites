import mongoose from 'mongoose';

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      'Database connected successfully!!! DB HOST:',
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log('Database connection FAILED!!!', error);
    process.exit(1);
  }
}

export default connectDB;
