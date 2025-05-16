const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/campaign.controller");

router.post("/", auth, controller.createCampaign);
router.get("/", controller.getAllCampaigns); // kamu bisa tambah fungsinya

module.exports = router;