import { PrismaClient } from "@prisma/client";

/**
 * Datenbank Instanz. Wird für alle Datenbankzugriffe verwendet.
 */
export const prisma = new PrismaClient();
