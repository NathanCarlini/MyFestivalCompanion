import "./globals.css";
// import { SessionProvider } from 'next-auth/react';
import NextAuthProvider from "./nextprovider";
type Props = {
  children: ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html>
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}

export default RootLayout;
