import chalk from "chalk";
import { config } from "dotenv";
import express from "express";
import figures from "figures";

config({ path: [".env.local", ".env"] });

const app = express();
const port = process.env.EXPRESS_PORT || 4000;

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

// function setup(
//   swaggerDoc?: JsonObject,
//   opts?: SwaggerUiOptions,
//   options?: SwaggerOptions,
//   customCss?: string,
//   customfavIcon?: string,
//   swaggerUrl?: string,
//   customSiteTitle?: string,
// ): (
//   req: Request & { swaggerDoc?: JsonObject },
//   res: Response,
//   next: NextFunction,
// ) => void {
//   return (req, res) => {
//     const html = generateHTML(
//       req.swaggerDoc ? req.swaggerDoc : swaggerDoc,
//       opts,
//       options,
//       customCss,
//       customfavIcon,
//       swaggerUrl,
//       customSiteTitle,
//     );

//     res.send(
//       html
//         .replace(
//           /\.\/(?<file>swagger-ui.*?\.(?:js|css))/g,
//           (_, file) => `./docs/${file}`,
//         )
//         .replace(
//           /\.\/(?<icon>favicon-.*?\.png)/g,
//           (_, icon) => `./docs/${icon}`,
//         ),
//     );
//   };
// }

// app.use(
//   "/docs",
//   serve,
//   setup(openApiDocument, {
//     customCssUrl:
//       "https://cdn.jsdelivr.net/gh/ravisankarchinnam/openapi-swagger-dark-theme@26ad321/dark-theme.css",
//   }),
// );

app.listen(port, () => {
  console.log(
    `${chalk.green(figures.arrowRight)} Listening on ${chalk.cyan(
      "http://localhost:"
    )}${chalk.bold.cyanBright(port)}`
  );
});

export default app;
