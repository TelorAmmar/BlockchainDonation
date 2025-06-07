const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createDonation = async (req, res) => {
    try {
        const { amount, message } = req.body;
        const { campaignId } = req.params;
        const userId = req.user.id; // dari auth middleware

        const donation = await prisma.donation.create({
            data: {
                amount: Number(amount),
                message,
                campaignId,
                userId,
            },
        });
        res.json({ success: true, data: donation });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getDonationsByCampaign = async (req, res) => {
    try {
        const { campaignId } = req.params;
        const donations = await prisma.donation.findMany({
            where: { campaignId },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        whatsapp: true
                    }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ success: true, data: donations });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// Tambahkan updateDonation dan deleteDonation sesuai kebutuhan