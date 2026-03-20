import User from "../models/userRegistration.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Create Access Token
function createAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });
}

//Create Refresh Token
function createRefreshToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET_REFRESH, { expiresIn: "7d" });
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create payload
    const payload = {
      id: user._id,
      email: user.email
    };

    //Generate Tokens
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    //Set Access Token Cookie
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      // secure: process.env.NODE_ENV === "production",
    });

    //Set Refresh Token Cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      path: "/refresh",
      // secure: process.env.NODE_ENV === "production",
    });

    //Send Response
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.fullname
      }
    });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export default login;