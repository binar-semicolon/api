import { TRPCError, initTRPC } from "@trpc/server";
import trpcExpress from "@trpc/server/adapters/express";
import crypto from "crypto";
import superjson from "superjson";

export const createContext = ({
  req,
  res, // eslint-disable-line @typescript-eslint/no-unused-vars
}: trpcExpress.CreateExpressContextOptions) => {
  const secret = process.env.AUTH_SECRET;
  const headerSecret = req.header("x-auth-secret");

  if (!headerSecret || !secret) {
    return {};
  }

  const a = Buffer.from(headerSecret);
  const b = Buffer.from(secret);
  if (!crypto.timingSafeEqual(a, b)) {
    return {};
  }

  return { secret: headerSecret };
};

const t = initTRPC.context<Context>().create({ transformer: superjson });

type Context = Awaited<ReturnType<typeof createContext>>;

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
