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
  weight:[ "300", "400", "700", "900"],
  variable: "--font-merriweather"
})

export const metadata = {
  title: "HelloTractor",
  description: "This is the hellotractor e-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${manrope.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
