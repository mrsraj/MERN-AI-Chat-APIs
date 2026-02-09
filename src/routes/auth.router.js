const express = require("express");
const router = express.Router();

const userRegistration = require("../Auth/Register");
const loginUser = require("../Auth/Login");

const passport = require("passport"); // ✅ FIXED

// 🔥 DEBUG ROUTE (NO PASSPORT)
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
    // req.user is now DB user ✅
    res.redirect("http://localhost:5173/login-success");
  }
);

router.post("/register", userRegistration);
router.post("/login", loginUser);

module.exports = router;
