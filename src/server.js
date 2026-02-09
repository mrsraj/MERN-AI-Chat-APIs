require("dotenv").config();
const PORT = process.env.PORT; 

const passport = require("passport");
require("./config/passport");


const express = require("express");
const app = express();
const connectDB = require("./config/db");
//call db connection
connectDB();

// Json
app.use(express.json());
app.use(passport.initialize());

//router import
const authrouter = require("./routes/auth.router");

app.use("/api/v1/auth", authrouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
