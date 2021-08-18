import NextAuth from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import prisma from "src/server/prisma/prisma";

if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
  throw new Error(
    "Please provide the following variable in your .env file: NEXT_PUBLIC_GOOGLE_CLIENT_ID"
  );
}

if (!process.env.GOOGLE_OAUTH_CLIENT_SECRET) {
  throw new Error(
    "Please provide the following variable in your .env file: GOOGLE_OAUTH_CLIENT_SECRET"
  );
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async session(session, token) {
  //     session.user.id = token.sub as string;
  //     return session;
  //   },
  // },
  // session: {
  //   jwt: true,
  //   // Seconds - How long until an idle session expires and is no longer valid.
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // jwt: {
  //   signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  // },
  // secret: process.env.JWT_SIGNING_PRIVATE_KEY,
  // A database is optional, but required to persist accounts in a database
  adapter: Adapters.Prisma.Adapter({ prisma }),
});
