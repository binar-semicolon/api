import { PrismaClient } from "@prisma/client";
import { router, publicProcedure } from "@semicolon/api/app/trpc";
import { UserSchema } from "@semicolon/api/prisma/generated/zod";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const prisma = new PrismaClient();

export const user = router({
  get: publicProcedure
    .meta({ openapi: { method: "GET", path: "/user/id/{id}" } })
    .input(z.object({ id: z.string().uuid() }))
    .output(UserSchema)
    .query(async ({ input: { id } }) => {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "The requested user does not exist",
        });
      }

      return user;
    }),
});
