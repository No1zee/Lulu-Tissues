import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "LULU TISSUES | Save the Day, Softly.",
  description: "Zimbabwe's premium tissue brand. The Aloe Vera Range, Soft Premium, and more — crafted for softness, trusted for strength.",
  keywords: ["Lulu Tissues", "Zimbabwe tissues", "premium tissue", "aloe vera tissues", "soft tissues Zimbabwe"],
  openGraph: {
    title: "LULU TISSUES | Save the Day, Softly.",
    description: "Zimbabwe's most premium tissue brand.",
    type: "website",
    locale: "en_ZW",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/logo/favicon.png",
    apple: "/images/logo/favicon.png",
  },
};

import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${playfair.variable} ${greatVibes.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="antialiased relative" suppressHydrationWarning>
        <CustomCursor />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
