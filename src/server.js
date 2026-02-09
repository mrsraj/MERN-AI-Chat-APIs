require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

const passport = require("passport");
require("./config/passport");

const express = require("express");
const app = express();
const connectDB = require("./config/db");
//call db connection
connectDB();

const corsOptions = {
    origin: "http://localhost:3000", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
};

// app.use(cors(corsOptions));
app.use(cors());

// Json
app.use(express.json());
app.use(passport.initialize());

//router import
const authrouter = require("./routes/auth.router");

//API Call 
app.use("/api/v1/auth", authrouter);


//Just for testing
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// CATCH-ALL ROUTE (must be last)
app.use((req, res) => {
    res.status(404).json({ message: "Path does not exist" });
});

//Server listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
