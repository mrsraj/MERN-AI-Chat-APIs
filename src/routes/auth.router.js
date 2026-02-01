const express = require("express");
const router = express.Router();

const userRegistration = require("../Auth/Register");

router.post("/register", userRegistration);

module.exports = router;
