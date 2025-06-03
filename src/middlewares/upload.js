const path = require('path');
const multer = require('multer');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', 'public', 'uploads'); // __dirname = src/middlewares

// Buat folder jika belum ada
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

module.exports = upload;
