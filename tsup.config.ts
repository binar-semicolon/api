import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["app/index.ts"],
  clean: true,
  external: [/^@prisma\/.*/, /^@trpc\/server\/.*/],
  noExternal: [/^chalk$/, /^figures$/, /^@semicolon\/.*/],
  ...options,
}));
