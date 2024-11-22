import localFont from "next/font/local";
import { Manrope, Merriweather } from "next/font/google"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight:[ "300"],
  variable: "--font-merriweather"
})

const avenir = localFont({
  src: "./fonts/avenir_ff/AvenirLTStd-Book.otf",
  variable: "--font-avenir",
  weight: "100 900",
});

export const metadata = {
  title: "HelloTractor",
  description: "This is the hellotractor e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${manrope.variable} ${avenir.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
