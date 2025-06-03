const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload");
const controller = require("../controllers/campaign.controller");

router.post("/", auth, upload.single('image'), controller.createCampaign);
router.get("/", controller.getAllCampaigns);
// router.get("/page", controller.getAllCampaignsPerPage);
router.delete("/:id", controller.deleteCampaign);
router.get('/top', controller.getTopCampaigns);
router.get("/:id", controller.getCampaignDetail);
router.patch("/:id", auth, controller.updateCampaign);

module.exports = router;