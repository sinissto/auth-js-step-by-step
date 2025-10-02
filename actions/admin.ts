"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@/lib/generated/prisma";

export const admin = async () => {
  const role = await currentRole();

  if (role !== UserRole.ADMIN) return { error: "Forbidden server action" };

  return { success: "Allowed server action" };
};
