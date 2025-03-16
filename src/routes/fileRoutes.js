const express = require("express");
const { uploadFile } = require("../controllers/fileController");
const upload = require("../middlewares/multerConfig"); // Middleware for file handling

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile); // Upload file

module.exports = router;
