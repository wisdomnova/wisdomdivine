import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
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
    "Software engineer building systems that solve real operational problems. Product engineering, automation, SaaS, and scalable backend infrastructure based in Abuja, Nigeria.",
  metadataBase: new URL("https://wisdomdivine.xyz"),
  keywords: [
    "Wisdom Divine",
    "software engineer",
    "full-stack developer",
    "product engineering",
    "backend systems",
    "automation",
    "SaaS",
    "web3",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Abuja",
    "Nigeria",
    "freelance developer",
    "BeeSeek",
    "Loin Tech",
    "frontend engineer",
    "backend engineer",
    "DeFi",
    "blockchain developer",
  ],
  authors: [{ name: "Wisdom Divine", url: "https://wisdomdivine.xyz" }],
  creator: "Wisdom Divine",
  publisher: "Wisdom Divine",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://wisdomdivine.xyz",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wisdomdivine.xyz",
    siteName: "Wisdom Divine",
    title: "Wisdom Divine / Software Engineer",
    description:
      "Software engineer building systems that solve real operational problems. Product engineering, automation, SaaS, and scalable backend infrastructure.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Wisdom Divine / Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom Divine / Software Engineer",
    description:
      "Software engineer building systems that solve real operational problems.",
    images: ["/logo.png"],
    creator: "@wisdomdivine",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#fafaf8",
    "color-scheme": "light",
    "msapplication-TileColor": "#fafaf8",
  },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CM2LV1EN2S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CM2LV1EN2S');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wisdom Divine",
              url: "https://wisdomdivine.xyz",
              jobTitle: "Software Engineer",
              sameAs: [],
              knowsAbout: [
                "Software Engineering",
                "Product Engineering",
                "Web Development",
                "Backend Systems",
                "Automation",
                "SaaS",
                "Web3",
                "Blockchain",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Abuja",
                addressCountry: "NG",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
