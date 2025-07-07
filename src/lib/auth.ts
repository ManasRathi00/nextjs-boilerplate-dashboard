import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Github,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const email = "sup@email.com";
        const password = "12345";

        if (credentials.email == email && credentials.password == password) {
          return { email, password };
        } else {
          throw new Error("invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
