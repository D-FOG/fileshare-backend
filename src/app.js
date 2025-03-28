const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json()); // For JSON body parsing
app.use(express.urlencoded({ extended: true })); // For form data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Error:", err));

// Import routes
const fileRoutes = require("./routes/fileRoutes");
const authRoutes = require("./routes/authRoute");
const { protect } = require("./middlewares/authMiddleware");

app.use("/api/auth", authRoutes);
app.use("/api/files", protect, fileRoutes);

module.exports = app;
