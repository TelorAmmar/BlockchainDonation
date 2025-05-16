const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Contoh query test
async function testConnection() {
  try {
    await prisma.$connect();
    console.log("Terhubung ke database!");
  } catch (error) {
    console.error("Gagal terhubung:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();

module.exports = prisma;