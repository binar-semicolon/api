import { initTRPC } from "@trpc/server";
import trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req, // eslint-disable-line @typescript-eslint/no-unused-vars
  res, // eslint-disable-line @typescript-eslint/no-unused-vars
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

const t = initTRPC.context<Context>().create();

type Context = Awaited<ReturnType<typeof createContext>>;

export const router = t.router;
export const publicProcedure = t.procedure;
