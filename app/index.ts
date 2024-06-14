import { contract } from "./contract";
import { user } from "./routes/user";
import { createExpressEndpoints } from "@ts-rest/express";
import chalk from "chalk";
import { config } from "dotenv";
import express from "express";
import figures from "figures";

config({ path: [".env.local", ".env"] });

const app = express();
const port = process.env.EXPRESS_PORT ?? 4000;

createExpressEndpoints(
  contract,
  {
    user,
  },
  app,
);

app.listen(port, () => {
  console.log(
    `${chalk.green(figures.arrowRight)} Listening on ${chalk.cyan(
      "http://localhost:",
    )}${chalk.bold.cyanBright(port)}`,
  );
});

export default app;
