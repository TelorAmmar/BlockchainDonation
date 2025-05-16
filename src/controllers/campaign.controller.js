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

exports.deleteCampaign = async (req, res) => {
  const { id } = req.params;

  try {
    const existing = await prisma.campaign.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ message: "Campaign tidak ditemukan" });
    }

    await prisma.campaign.delete({ where: { id } });

    res.json({ message: "Campaign berhasil dihapus" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal menghapus campaign" });
  }
};