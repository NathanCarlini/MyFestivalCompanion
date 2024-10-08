// import NextAuth, { User, type DefaultSession } from "next-auth";

// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       token: string;
//       name: string;
//       phone: string;
//       role: string;
//       picture: string;
//     };
//   }
//   interface User {
//     id: string;
//     token: string;
//     name: string;
//     phone: string;
//     role: string;
//     picture: string;
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     user: {
//       id: string;
//       token: string;
//       name: string;
//       phone: string;
//       role: string;
//       picture: string;
//     };
//   }
// }

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
}

