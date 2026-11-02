

const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("MongoDB URI loaded:", Boolean(process.env.MONGO_URI));

const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// Student Routes
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Student Management API is running!");
});

// Health check
app.get("/health", (req, res) => {
    res.json({
        success: true,
        message: "Server is healthy"
    });
});

// Connect database and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
