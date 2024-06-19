import { adapter } from "./routes/adapter";
import { user } from "./routes/user";
import { createContext, router } from "./trpc";
import trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { createOpenApiExpressMiddleware } from "trpc-openapi";

const app = express();

export const appRouter = router({
  user,
  adapter,
});

app.use(cors()); // eslint-disable-line @typescript-eslint/no-unsafe-call

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use(
  "/",
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  createOpenApiExpressMiddleware({
    router: appRouter,
    createContext,
    responseMeta: null,
    onError: null,
    maxBodySize: null,
  }),
);

export { app };
