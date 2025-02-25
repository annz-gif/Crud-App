import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGODB_URI); // Log the URI

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }
    await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

export default connectMongoDB;
