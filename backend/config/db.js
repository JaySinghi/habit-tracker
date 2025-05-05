import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  console.log("MONGO_URL:", process.env.MONGO_URL);

  try {
    if (!process.env.MONGO_URL) {
      console.error('MongoDB connection URI is missing in the environment variables');
      return;
    }

    // Remove useNewUrlParser and useUnifiedTopology as they are no longer needed
    await mongoose.connect(process.env.MONGO_URL);

    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
