const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/campaign.controller");

router.post("/", auth, controller.createCampaign);
router.get("/", controller.getAllCampaigns);
router.delete("/:id", controller.deleteCampaign);
router.get('/top', controller.getTopCampaigns);
router.get("/:id", controller.getCampaignDetail);
router.patch("/:id", auth, controller.updateCampaign);

module.exports = router;