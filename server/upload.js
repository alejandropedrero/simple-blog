import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/uploads", // Folder where uploaded images will be saved
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg"); // Modify the file extension as needed
  },
});

// Create multer instance with the storage configuration
const upload = multer({ storage: storage });

export default upload;
