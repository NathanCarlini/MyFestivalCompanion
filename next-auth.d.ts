import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      accessToken?: string;
      // Ajoute d'autres propriétés si nécessaire
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    // Ajoute d'autres propriétés si nécessaire
  }
  function verifyGoogleToken()
}

