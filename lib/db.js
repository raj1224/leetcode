import { PrismaClient } from "../lib/generated/prisma/client";

import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
});


const globalForPrisma = globalThis ;

export const db= globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;