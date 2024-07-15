import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
  // TODO: Connect to database
  mongoose.connect(process.env.MONGO_URI);
  // TODO: Listen for connection events
  mongoose.connection
    .on("error", console.error)
    .on("open", () =>
      console.log(`Connected to MongoDB / ${mongoose.connection.name}`)
    );
}
