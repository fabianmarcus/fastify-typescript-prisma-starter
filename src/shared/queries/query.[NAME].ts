/**
 * Sammlung von wiederverwendbaren Datenbank-Abfragen
 */
import { Prisma } from "@prisma/client";
import { prisma } from "../constants";

export async function queryCountries(where?: Prisma.View_LaenderWhereInput) {
    return prisma.view_Laender.findMany({
        orderBy: {
            Land_Name: 'asc'
        },
        where: where || undefined
    });
}

export default queryCountries;