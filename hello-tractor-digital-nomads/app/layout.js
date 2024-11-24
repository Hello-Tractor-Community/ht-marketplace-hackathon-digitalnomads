import "./globals.css";

import Header from "../components/organisms/navbar";
import { geistSans, geistMono, merriweather, manrope, avenir } from "../lib/fonts";

export const metadata = {
  title: "HelloTractor",
  description: "This is the hellotractor e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${manrope.variable} ${avenir.variable} antialiased`
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
