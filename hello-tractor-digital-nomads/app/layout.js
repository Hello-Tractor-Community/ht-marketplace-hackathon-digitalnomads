import "./globals.css";

import { getServerSession } from "next-auth/next"

import Header from "../components/organisms/navbar";
import { geistSans, geistMono, merriweather, manrope, avenir } from "../lib/fonts";
import SessionProvider from "@/components/session-provider";

export const metadata = {
  title: "HelloTractor",
  description: "This is the hellotractor e-commerce",
};

export default async function RootLayout({ children }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${manrope.variable} ${avenir.variable} antialiased`
        }
      >
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
