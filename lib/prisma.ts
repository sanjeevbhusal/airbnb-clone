import { PrismaClient } from "@prisma/client";

// When you create a client, you store it in the globalThis variable. This variable is unaffected by hot reloading. So, next time this file runs, you first check if you already have a prisma instance. If you do, you use it. If you don't, you create a new one.

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  globalThis.prisma = prisma;
}

export { prisma };
