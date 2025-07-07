import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Github from "next-auth/providers/github";
import { prisma } from "./prisma";

const adapter = PrismaAdapter(prisma);
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter,
  providers: [Github],
  pages: {
    signIn: "/login",
  },
});
