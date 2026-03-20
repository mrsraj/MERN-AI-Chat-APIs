import dotenv from "dotenv";
dotenv.config();

import AtlasConnect from "./config/atlas_db.js";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import chatRoutes from "./routes/chat.routes.js";
import authrouter from "./routes/auth.router.js";
import userInfoRouter from "./routes/userInfo.router.js"
//import connectDB from "./config/db.js";

import "./config/passport.js";
await AtlasConnect()

const PORT = process.env.PORT;

// Create app
const app = express();

// Connect DB
// connectDB();

// CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Passport init
app.use(passport.initialize());

// Routes
app.use("/api/v1/auth", authrouter);
app.use("/api/v1/", userInfoRouter);
app.use("/api", chatRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Path does not exist" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});