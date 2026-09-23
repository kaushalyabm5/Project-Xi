import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Startup Main Site",
  description: "Testing stealth breakdown",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Exact Version වෙනුවට @latest CDN Tag එක යෙදීම (Stealth Point) */}
        <link
          id="stealth-theme"
          rel="stylesheet"
          href="https://unpkg.com/pico-css@latest/css/pico.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}