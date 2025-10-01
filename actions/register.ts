"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/data/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 12);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already exists" };

  await db.user.create({
    data: { email, name, password: hashedPassword },
  });

  // send verification token to email
  const verificationToken = await generateVerificationToken(email);

  return { success: "Conformation email sent!" };
};
