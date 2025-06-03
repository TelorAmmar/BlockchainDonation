const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboard.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// contoh route dashboard, misal GET /api/dashboard/
router.get("/", authMiddleware, dashboardController.getDashboard);

// contoh route lain, misal GET /api/dashboard/stats
// router.get("/stats", authMiddleware, dashboardController.getDashboardStats);

module.exports = router;
