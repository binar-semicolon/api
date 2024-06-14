import { contract } from "./contract";
import { user } from "./routes/user";
import { createExpressEndpoints } from "@ts-rest/express";
import express from "express";

const app = express();

createExpressEndpoints(
  contract,
  {
    user,
  },
  app,
);

export { app };
