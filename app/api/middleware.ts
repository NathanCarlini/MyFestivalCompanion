// middleware.ts
import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/signin', // Si non connecté, rediriger vers /auth/signin
  },
});

export const config = {
  matcher: ['/protected', '/another-protected-route'], // Les routes à protéger
};
