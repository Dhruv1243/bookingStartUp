import NextAuthModule from "next-auth";
import CredentialsProviderModule from "next-auth/providers/credentials";

import { findUserByEmail, verifyPassword } from "../../../lib/users";

const NextAuth = NextAuthModule.default ?? NextAuthModule;
const CredentialsProvider =
  CredentialsProviderModule.default ?? CredentialsProviderModule;

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET ?? process.env.AUTH0_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await findUserByEmail(credentials.email);
        if (!user) {
          return null;
        }

        const isValid = verifyPassword(credentials.password, user.passwordHash);
        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.username,
          email: user.email,
          userRole: user.userRole,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userRole = user.userRole;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.userRole = token.userRole;
      }

      return session;
    },
  },
};

export default NextAuth(authOptions);
