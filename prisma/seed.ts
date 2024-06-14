import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      id: "baf0014e-94cf-4980-888c-5f0d437c65f6",
      username: "john.smith",
      name: "John Smith",
      birthday: new Date("1990-01-01T00:00:00Z"),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
