import express from "express";
import passport from "passport";

const router = express.Router();

// Controllers
import userRegistration from "../Auth/Register.js";
import loginUser from "../Auth/Login.js";
import getUsers from "../controllers/getUsers.js";

// Middleware
import authentication from "../middlewares/authentication.middleware.js";

// 🔥 DEBUG ROUTE
router.get("/google-test", (req, res) => {
  res.send("AUTH ROUTER WORKING");
});

// Start Google OAuth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("http://localhost:5173/login-success");
  }
);

router.post("/register", userRegistration);
router.post("/login", loginUser);
router.get("/users", authentication, getUsers);

export default router;