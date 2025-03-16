const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // For JSON body parsing
app.use(express.urlencoded({ extended: true })); // For form data

// Import routes
const fileRoutes = require("./routes/fileRoutes");
app.use("/api/files", fileRoutes);

module.exports = app;
