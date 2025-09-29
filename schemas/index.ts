import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email(),
  password: z.string(), // no min limit for password to login
});
