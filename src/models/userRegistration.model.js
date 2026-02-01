const mongoose = require("mongoose");

// 1. Define the schema
const userSchema = new mongoose.Schema({
    fullname: {
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
        required: true
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
