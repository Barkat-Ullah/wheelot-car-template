import type { Metadata } from "next";
import { Bruno_Ace, Inter } from "next/font/google";
import "./globals.css";

const brunoAce = Bruno_Ace({
  weight: "400",
  variable: "--font-bruno-ace",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wheelot - Vehicles Buy/Sell NextJs Template",
  description:
    "Launch a vehicles buy/sell platform in 24 hours with Wheelot. This Next.js template features smart filters & secure chat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${brunoAce.variable} ${inter.variable} h-full antialiased scroll-smooth bg-[#0b0b0e] max-w-full overflow-x-hidden`}
    >
      <body className="min-h-full w-full max-w-full flex flex-col bg-[#0b0b0e] text-[#fafaf9] font-sans antialiased overflow-x-hidden selection:bg-[#FFB900] selection:text-black">
        {children}
      </body>
    </html>
  );
}
