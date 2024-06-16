import { appRouter } from "./app/server";
import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

export type { User, PrismaClient, Prisma } from "@prisma/client";
export { UserSchema } from "@semicolon/api/prisma/generated/zod";
export type AppRouter = typeof appRouter;
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
