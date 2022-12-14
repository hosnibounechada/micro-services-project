import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app";

const PORT = process.env.Node_ENV !== "development" ? 3000 : 3001;

const start = async () => {
  if (!process.env.JWT_KEY) throw new Error("JWT_KEY must be defined");
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI must be defined");

  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("connected to mongodb Uri :", process.env.MONGO_URI);
  } catch (err) {
    console.error(err);
  }
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}!`);
  });
};

start();
