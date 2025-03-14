const express = require("express");

const app = express();

// Simple test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

module.exports = app; // Export app for testing
