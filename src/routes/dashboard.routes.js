const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware');
const controller = require('../controllers/dashboard.controller');

// Semua endpoint dashboard harus login
router.get('/', auth, controller.getDashboard);

module.exports = router;