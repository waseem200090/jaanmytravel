import type { Metadata } from "next";
import { GeistSans, GeistMono } from "next/font/google";
import "./globals.css";

// Fix duplicate imports - only once!
const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Jaan My Travel - Dubai",
  description: "UAE Visa, EK Flights, Luxury Hotels"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
        {/* TIDIO SCRIPT - CORRECT POSITION */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function onTidioChatApiReady() {
                  window.tidioChatApi?.show();
                }
                if (window.tidioChatApi) {
                  onTidioChatApiReady();
                } else {
                  window.addEventListener('tidioChat-ready', onTidioChatApiReady);
                }
              })();
            `
          }}
        />
        {/* TIDIO EXTERNAL SCRIPT - YOUR PUBLIC KEY */}
        <script src="//code.tidio.co/tmtd7vgrdjyakhoixqclboif0bfzguaa.js" async></script>
      </body>
    </html>
  );
}
