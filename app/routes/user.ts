import { PrismaClient } from "@prisma/client";
import { contract } from "@semicolon/api/app/contract";
import { initServer } from "@ts-rest/express";

const prisma = new PrismaClient();
const s = initServer();

export const user = s.router(contract.user, {
  get: async ({ params: { id } }) => {
    const user = await prisma.user.findUnique({
      where: { userId: id },
    });

    if (!user) {
      return {
        status: 404,
        body: { message: "The requested user does not exist" },
      };
    }

    return {
      status: 200,
      body: user,
    };
  },
});
