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

const SITE_URL = "https://ethan-dao.apps.neooi.com";
const TITLE = "Ethan Dao — Realtor | Dallas–Fort Worth Real Estate | eXp Realty";
const DESCRIPTION =
  "Ethan Dao (Tung Dao) is a Top Producer Realtor with eXp Realty and the Texas Ace Team, helping buyers, sellers, and investors across the Dallas–Fort Worth Metroplex. Bilingual English–Vietnamese service.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Ethan Dao",
    "Tung Dao",
    "Realtor Dallas Fort Worth",
    "DFW real estate agent",
    "eXp Realty",
    "Texas Ace Team",
    "McKinney homes",
    "Lavon new homes",
    "Vietnamese realtor Dallas",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ethan Dao — Realtor",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
