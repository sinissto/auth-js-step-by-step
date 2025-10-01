import * as z from "zod";
import { ResetPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/data/tokens";

export const resetPassword = async (
  values: z.infer<typeof ResetPasswordSchema>
) => {
  const validatedFields = ResetPasswordSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid email!" };

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) return { error: "Email does not exist!" };

  // Here you would typically generate a password reset token,
  // save it to the database, and send an email to the user with
  // instructions on how to reset their password.

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  );

  return {
    success: "Reset email sent! Please check your inbox.",
  };
};
