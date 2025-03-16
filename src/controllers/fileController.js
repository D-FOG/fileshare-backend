const cloudinary = require("../utils/cloudinary");

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto", // Supports all file types
    });

    res.status(201).json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "File upload failed" });
  }
};
