import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      userId: "baf0014e-94cf-4980-888c-5f0d437c65f6",
      username: "john.smith",
      email: "john.smith@example.com",
      passwordHash: "hashedpassword123",
      bio: "Software developer.",
      fullName: "John Smith",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
