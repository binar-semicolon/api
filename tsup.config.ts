import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["app/index.ts", "app/cli.ts"],
  clean: true,
  external: [/^@prisma\/.*/, /^@trpc\/server\/.*/],
  noExternal: [
    /^chalk$/,
    /^figures$/,
    /^@semicolon\/.*/,
    /^superjson$/,
    /^@auth\/.*/,
  ],
  ...options,
}));
