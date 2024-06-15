import { contract } from "./contract";
import { user } from "./routes/user";
import { createExpressEndpoints } from "@ts-rest/express";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors()); // eslint-disable-line @typescript-eslint/no-unsafe-call
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createExpressEndpoints(
  contract,
  {
    user,
  },
  app,
);

export { app };
