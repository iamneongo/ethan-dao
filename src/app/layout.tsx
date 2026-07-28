import type { Metadata } from "next";
import { Sora, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const hanken = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ethan Dao — Realtor | Dallas–Fort Worth Real Estate | eXp Realty",
  description:
    "Ethan Dao (Tung Dao) is a Top Producer Realtor with eXp Realty and the Texas Ace Team, helping buyers, sellers, and investors across the Dallas–Fort Worth Metroplex. Bilingual English–Vietnamese service.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/seo/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${sora.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-ink font-sans"
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
