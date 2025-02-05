import "./globals.css";
// import { SessionProvider } from 'next-auth/react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NextAuthProvider from "./nextprovider";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

async function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Header />
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
