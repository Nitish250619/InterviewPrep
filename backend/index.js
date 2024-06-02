import express from "express";
import mongoose from "mongoose";
// import { connectDB } from "./config/db.js";
import passport from "passport";
import cookieParser from "cookie-parser";
import { router } from "./routes/users.routes.js";
import configurePassport from "./config/passport.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent and received
  })
);

// Connect to the database
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to the database');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Start the server after connecting to the database
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

// Initialize middleware
app.use(express.json());
app.use(cookieParser());

// Passport middleware
app.use(passport.initialize());
configurePassport(passport);

// Define routes
app.use("/auth", router);

