import { getToken } from "@auth/core/jwt";
import { PrismaClient } from "@prisma/client";
import { TRPCError, initTRPC } from "@trpc/server";
import trpcExpress from "@trpc/server/adapters/express";
import crypto from "crypto";
import superjson from "superjson";
import { OpenApiMeta } from "trpc-openapi";

const prisma = new PrismaClient();

export const createContext = async ({
  req,
  res, // eslint-disable-line @typescript-eslint/no-unused-vars
}: trpcExpress.CreateExpressContextOptions) => {
  let secret = process.env.AUTH_SECRET;
  let headerSecret = req.header("x-auth-secret");
  let session: Awaited<ReturnType<typeof getToken>> | null = null;

  if (headerSecret && secret) {
    const a = Buffer.from(headerSecret);
    const b = Buffer.from(secret);
    if (!crypto.timingSafeEqual(a, b)) {
      secret = undefined;
      headerSecret = undefined;
    }
  } else {
    secret = undefined;
    headerSecret = undefined;
  }

  if (process.env.AUTH_SECRET && req.headers.cookie) {
    const jwt = await getToken({
      req: { headers: { cookie: req.headers.cookie } },
      secret: process.env.AUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
      salt:
        process.env.NODE_ENV === "production"
          ? "__Secure-authjs.session-token"
          : "authjs.session-token",
    });

    if (jwt?.exp && new Date() < new Date(jwt.exp * 1000)) {
      session = jwt;
    }
  }

  return { secret, session };
};

const t = initTRPC
  .meta<OpenApiMeta>()
  .context<Context>()
  .create({ transformer: superjson });

type Context = Awaited<ReturnType<typeof createContext>>;

export const optUserProcedure = t.procedure.use(
  async ({ ctx: { session }, next }) =>
    next({
      ctx: {
        user: session?.email
          ? await prisma.user.findUnique({
              where: { email: session.email },
            })
          : null,
        session,
      },
    }),
);

export const incompleteUserProcedure = optUserProcedure.use(
  async ({ ctx: { user, ...ctx }, next }) => {
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    } else {
      return next({
        ctx: {
          user: { ...user, name: user.name, username: user.username },
          ...ctx,
        },
      });
    }
  },
);

export const userProcedure = incompleteUserProcedure.use(
  async ({ ctx: { user, ...ctx }, next }) => {
    if (!(user.name && user.username)) {
      throw new TRPCError({ code: "PRECONDITION_FAILED" });
    } else {
      return next({
        ctx: {
          user: { ...user, name: user.name, username: user.username },
          ...ctx,
        },
      });
    }
  },
);

export const privateProcedure = t.procedure.use(
  async ({ ctx: { secret }, next }) => {
    if (!secret) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    } else {
      return next({ ctx: { secret } });
    }
  },
);

export const router = t.router;
export const publicProcedure = t.procedure;
