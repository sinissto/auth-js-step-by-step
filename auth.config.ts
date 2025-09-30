import Credential from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import {LoginSchema} from "@/schemas";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"


// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Credential({
   authorize: async (credentials) => {
      const validatedFields = LoginSchema.safeParse(credentials)

      if (validatedFields.success) {
        const {email, password} = validatedFields.data

        const user = await getUserByEmail(email)

        if(!user || !user.password) return null

        const passwordsMatch = await bcrypt.compare(password, user.password)

        if(passwordsMatch) {
          return user
        }
      }

      return null
    }
  }),


  ],
} satisfies NextAuthConfig