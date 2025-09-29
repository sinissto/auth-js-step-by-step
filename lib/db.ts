import { PrismaClient } from "@prisma/client";

// Ovim se osiguravamo da imamo samo jednu instancu PrismaClient-a tokom razvoja
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
