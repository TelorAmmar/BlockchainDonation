const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;  // dari JWT token

    // Ambil data user dengan campaigns dan donations terkait
    const userData = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        whatsapp: true,
        campaigns: {
          select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            targetAmount: true,
            collectedAmount: true,
            createdAt: true,
          },
        },
        donations: {
          select: {
            id: true,
            amount: true,
            createdAt: true,
            campaign: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });

    if (!userData) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.json({
      message: `Dashboard user ${userData.name}`,
      data: userData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
};
