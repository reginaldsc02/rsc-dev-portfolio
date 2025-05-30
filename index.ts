import { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

(async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
})();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
