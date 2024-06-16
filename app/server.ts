import { user } from "./routes/user";
import { createContext, router } from "./trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import { createOpenApiExpressMiddleware } from "trpc-openapi";

const app = express();

export const appRouter = router({
  user,
});

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

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

export { app };
