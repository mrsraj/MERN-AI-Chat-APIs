const User = require("../models/userRegistration.model");
const bcrypt = require("bcryptjs");

const userRegistration = async (req, res) => {
    const { email, fullname, password, googleId } = req.body;

    if (!email || !fullname || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check for existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already registered" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            fullname, // or fullname depending on your schema
            email,
            googleId,
            password: hashedPassword
        });

        await user.save();

        return res.status(201).json({
            message: "User registered successfully",
            user: { name: user.fullname, email: user.email }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = userRegistration;
