import { app } from "./server";
import chalk from "chalk";
import { config } from "dotenv";
import figures from "figures";

config({ path: [".env.local", ".env"] });

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(
    `${chalk.green(figures.arrowRight)} Listening on ${chalk.cyan(
      "http://localhost:",
    )}${chalk.bold.cyanBright(port)}`,
  );
});

export default app;
