import type {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
} from "@auth/core/adapters";
import { Prisma, PrismaClient } from "@prisma/client";
import { router, privateProcedure } from "@semicolon/api/app/trpc";
import _ from "lodash";
import { z } from "zod";

const prisma = new PrismaClient();

export const adapter = router({
  createUser: privateProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string(),
        emailVerified: z.date().nullable(),
      }),
    )
    .mutation(({ input: { id: _id, ...data } }) => {
      return prisma.user.create({ data });
    }),
  getUser: privateProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input: { id } }) => prisma.user.findUnique({ where: { id } })),
  getUserByEmail: privateProcedure
    .input(z.object({ email: z.string().email() }))
    .query(({ input: { email } }) =>
      prisma.user.findUnique({ where: { email } }),
    ),
  getUserByAccount: privateProcedure
    .input(
      z.object({
        provider_providerAccountId: z.object({
          provider: z.string(),
          providerAccountId: z.string(),
        }),
      }),
    )
    .query(async ({ input: { provider_providerAccountId } }) => {
      const account = await prisma.account.findUnique({
        where: { provider_providerAccountId },
        select: { user: true },
      });
      return (account?.user as AdapterUser | null) ?? null;
    }),
  updateUser: privateProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().optional(),
        emailVerified: z.date().nullish(),
      }),
    )
    .mutation(
      ({ input: { id, ...data } }) =>
        prisma.user.update({ where: { id }, data }) as Promise<AdapterUser>,
    ),
  deleteUser: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(
      ({ input: { id } }) =>
        prisma.user.delete({ where: { id } }) as Promise<AdapterUser>,
    ),
  linkAccount: privateProcedure
    .input(
      z.object({
        userId: z.string(),
        type: z.enum(["oauth", "oidc", "email", "webauthn"]),
        provider: z.string(),
        providerAccountId: z.string(),
        expires_at: z.number().optional(),
      }),
    )
    .mutation(
      ({ input: data }) =>
        prisma.account.create({ data }) as unknown as AdapterAccount,
    ),
  unlinkAccount: privateProcedure
    .input(
      z.object({
        provider: z.string(),
        providerAccountId: z.string(),
      }),
    )
    .mutation(
      ({ input: provider_providerAccountId }) =>
        prisma.account.delete({
          where: { provider_providerAccountId },
        }) as unknown as AdapterAccount,
    ),
  getSessionAndUser: privateProcedure
    .input(z.object({ sessionToken: z.string() }))
    .query(async ({ input: { sessionToken } }) => {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      });
      if (!userAndSession) return null;
      const { user, ...session } = userAndSession;
      return { user, session } as {
        user: AdapterUser;
        session: AdapterSession;
      };
    }),
  createSession: privateProcedure
    .input(
      z.object({
        sessionToken: z.string(),
        userId: z.string(),
        expires: z.date(),
      }),
    )
    .mutation(({ input: data }) => prisma.session.create({ data })),
  updateSession: privateProcedure
    .input(
      z.object({
        sessionToken: z.string(),
        userId: z.string().optional(),
        expires: z.date().optional(),
      }),
    )
    .mutation(({ input: data }) =>
      prisma.session.update({
        where: { sessionToken: data.sessionToken },
        data,
      }),
    ),
  deleteSession: privateProcedure
    .input(z.object({ sessionToken: z.string() }))
    .mutation(({ input: { sessionToken } }) =>
      prisma.session.delete({ where: { sessionToken } }),
    ),
  createVerificationToken: privateProcedure
    .input(
      z.object({
        identifier: z.string(),
        expires: z.date(),
        token: z.string(),
      }),
    )
    .mutation(async ({ input: data }) => {
      const verificationToken = await prisma.verificationToken.create({ data });
      // @ts-expect-errors // MongoDB needs an ID, but we don't
      if (verificationToken.id) delete verificationToken.id;
      return verificationToken;
    }),
  useVerificationToken: privateProcedure
    .input(
      z.object({
        identifier: z.string(),
        token: z.string(),
      }),
    )
    .query(async ({ input: identifier_token }) => {
      try {
        const verificationToken = await prisma.verificationToken.delete({
          where: { identifier_token },
        });
        // @ts-expect-errors // MongoDB needs an ID, but we don't
        if (verificationToken.id) delete verificationToken.id;
        return verificationToken;
      } catch (error) {
        // If token already used/deleted, just return null
        // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
        if ((error as Prisma.PrismaClientKnownRequestError).code === "P2025")
          return null;
        throw error;
      }
    }),
  getAccount: privateProcedure
    .input(
      z.object({
        providerAccountId: z.string(),
        provider: z.string(),
      }),
    )
    .query(({ input: { providerAccountId, provider } }) => {
      return prisma.account.findFirst({
        where: { providerAccountId, provider },
      }) as Promise<AdapterAccount | null>;
    }),
});
