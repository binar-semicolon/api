import { PrismaClient } from "@prisma/client";
import { router, publicProcedure } from "@semicolon/api/app/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

const prisma = new PrismaClient();

export const search = router({
  searchPosts: publicProcedure.input(z.string()).query(async ({ input }) => {
    const results = await prisma.post.findMany({
      where: {
        content: {
          search: input,
        },
      },
      include: {
        user: true,
      },
    });

    if (!results.length) {
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No results matched",
      });
    }

    return results;
  }),
});
