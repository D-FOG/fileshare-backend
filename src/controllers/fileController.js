const cloudinary = require("../utils/cloudinary");

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      folder: process.env.CLOUDINARY_FOLDER || "file-share-app", // Store in a dedicated folder
    });

    res.status(201).json({ url: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "File upload failed" });
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const { resources } = await cloudinary.api.resources({
      type: "upload",
      prefix: process.env.CLOUDINARY_FOLDER || "file-share-app", // Get only files in this folder
    });

    const files = resources.map((file) => ({
      url: file.secure_url,
      public_id: file.public_id,
      format: file.format,
      uploaded_at: file.created_at,
    }));

    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve files" });
  }
};
