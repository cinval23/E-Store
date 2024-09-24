import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to dabatase successfully");
  } catch (error) {
    console.log("Connection failed", error);
    process.exit(1);
  }
};

export default connectToDatabase;