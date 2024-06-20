import { PrismaClient } from "@prisma/client";
import {
  router,
  publicProcedure,
  userProcedure,
} from "@semicolon/api/app/trpc";
import { UserSchema } from "@semicolon/api/prisma/generated/zod";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const prisma = new PrismaClient();

export const user = router({
  id: publicProcedure
    .meta({ openapi: { method: "GET", path: "/users/id/{id}" } })
    .input(z.object({ id: z.string().uuid() }))
    .output(
      UserSchema.omit({ email: true, emailVerified: true, updatedAt: true }),
    )
    .query(async ({ input: { id } }) => {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user || !(user.name && user.username)) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "The requested user does not exist",
        });
      }

      return user;
    }),
  me: userProcedure
    .meta({ openapi: { method: "GET", path: "/users/me" } })
    .input(z.void())
    .output(
      UserSchema.merge(z.object({ name: z.string(), username: z.string() })),
    )
    .query(({ ctx: { user } }) => user),
});
