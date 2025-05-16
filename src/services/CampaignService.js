const prisma = require('../config/database');

const CampaignService = {
  // 1. Get all campaigns
  async getAll() {
    return await prisma.campaign.findMany({
      include: {
        user: true,   // Include data user pemilik campaign
        donations: true
      }
    });
  },

  // 2. Create new campaign
  async create({ title, description, targetGoal, userId }) {
    return await prisma.campaign.create({
      data: {
        title,
        description,
        targetGoal,
        userId
      }
    });
  },

  // 3. Get campaign by ID
  async getById(id) {
    return await prisma.campaign.findUnique({
      where: { id },
      include: { donations: true }
    });
  },

  // 4. Update campaign
  async update(id, { title, description, targetGoal }) {
    return await prisma.campaign.update({
      where: { id },
      data: { title, description, targetGoal }
    });
  }
};

module.exports = CampaignService;