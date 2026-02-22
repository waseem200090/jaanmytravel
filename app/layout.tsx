import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import TidioChat from "../components/TidioChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaan My Travel - Dubai",
  description: "Flights • Hotels • Visa • Best Prices from DXB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <TidioChat />
      </body>
    </html>
  );
}

