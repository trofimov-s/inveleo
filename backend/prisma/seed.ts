import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function seeding() {
  const messageRecord = await prisma.appMessage.upsert({
    where: { id: 1 },
    update: { message: 'Updated application message!' },
    create: {
        id: 1,
        message: 'My first message record!'
    }
  });

  console.log({ messageRecord });
}

seeding()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });