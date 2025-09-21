import mongoose from "mongoose";

const dbLink = "mongodb+srv://gayanchinthaka1010_db_user:1vgmCBF7id9B8bqj@cluster0.rkh9t4s.mongodb.net/agri-services-system?retryWrites=true&w=majority&appName=Cluster0"

export const connectDB = async () => {
  try {
    await mongoose.connect(dbLink);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error connecting to MONGODB", error);
    process.exit(1);
  }
};