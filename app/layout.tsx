import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Wisdom Divine / Software Engineer",
    template: "%s / Wisdom Divine",
  },
  description:
    "Building systems that solve real operational problems. Product engineering, automation, and scalable backend systems.",
  metadataBase: new URL("https://wisdomdivine.dev"),
  keywords: [
    "software engineer",
    "product engineering",
    "backend systems",
    "automation",
    "SaaS",
    "web3",
    "Next.js",
    "full-stack developer",
  ],
  authors: [{ name: "Wisdom Divine" }],
  creator: "Wisdom Divine",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wisdomdivine.dev",
    siteName: "Wisdom Divine",
    title: "Wisdom Divine / Software Engineer",
    description:
      "Building systems that solve real operational problems. Product engineering, automation, and scalable backend systems.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Wisdom Divine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Divine / Software Engineer",
    description:
      "Building systems that solve real operational problems.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
