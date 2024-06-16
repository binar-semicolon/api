import { UserSchema } from "@/prisma/generated/zod";
import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  user: {
    get: {
      method: "GET",
      path: "/api/user/:user_id",
      pathParams: z.object({
        id: z.string().uuid(),
      }),
      responses: {
        200: UserSchema,
        404: z.object({ message: z.string() }),
      },
      summary: "Get a user by ID",
    },
  },
});
