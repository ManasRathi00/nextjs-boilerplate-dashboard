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
  session: {
    strategy: "jwt",
    maxAge: 30,
  },
  callbacks: {
    async jwt({ token, user }) {
      // On sign-in, fetch user from DB to get tier and createdAt
      if (user) {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { id: true, createdAt: true, tier: true },
        });
        if (dbUser) {
          token.id = dbUser.id;
          token.createdAt = dbUser.createdAt;
          token.tier = dbUser.tier;
        }
      }
      return token;
    },
    async session({ session, token }) {
      // Add user id, tier, and createdAt from token to session.user
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
        };
        session.tier = token.tier;
        session.createdAt = token.createdAt;
      }
      return session;
    },
  },
});
