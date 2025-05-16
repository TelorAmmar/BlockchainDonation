const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      orderBy: { createdAt: "desc" }, // terbaru dulu
    });
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch campaigns" });
  }
};

exports.createCampaign = async (req, res) => {
  try {
    const campaign = await prisma.campaign.create({
      data: {
        title: req.body.title,
        description: req.body.description,
        targetAmount: parseFloat(req.body.targetAmount),
        userId: req.user.id,
      },
    });
    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};