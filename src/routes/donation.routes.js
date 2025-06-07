const express = require('express');
const router = express.Router();
const controller = require('../controllers/donation.controller');
const auth = require('../middlewares/auth.middleware');

// Buat donasi untuk campaign tertentu
router.post('/:campaignId', auth, controller.createDonation);

// (Opsional) Get semua donasi untuk campaign tertentu
router.get('/campaign/:campaignId', controller.getDonationsByCampaign);

// (Opsional) Update & Delete donasi
// router.patch('/:donationId', auth, controller.updateDonation);
// router.delete('/:donationId', auth, controller.deleteDonation);

module.exports = router;