import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const URL = `${process.env.DB_URI}`;
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error Connecting Database : ", error.message);
  }
};

export default Connection;
