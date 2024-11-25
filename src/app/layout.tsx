import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

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

export const metadata: Metadata = {
  title: "Coming To Power Your Team's Productivity | Upshot",
  description: "Be among the first to unlock exclusive access to Upshot's groundbreaking features! Join our waitlist today and enjoy early bird perks designed to give you a seamless head start when we launch. Don’t miss out on this game-changing opportunity!",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    shortcut: "/favicon.ico", // Optional, for older browsers
    apple: "/favicon.png", // Optional, for Apple devices
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
