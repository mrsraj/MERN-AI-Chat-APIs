const mongoose = require("mongoose");

// 1. Define the schema
const userSchema = new mongoose.Schema({
    googleId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 2. Create the model
const User = mongoose.model("Users", userSchema);

// 3. Export it
module.exports = User;
