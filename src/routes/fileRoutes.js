const express = require("express");
const { uploadFile, getAllFiles } = require("../controllers/fileController");
const upload = require("../middlewares/multerConfig");

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/", getAllFiles); // Route to fetch all uploaded files

module.exports = router;
