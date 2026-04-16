import type { Metadata, Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./global.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solar.ashlr.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ashlr Solar — open knowledge graph + docs",
    template: "%s · Ashlr Solar",
  },
  description:
    "The open knowledge graph + docs for US + Canadian solar permitting. 55 AHJs codified, NEC clauses, glossary, integration guides. Built by Ashlr.ai.",
  keywords: [
    "solar permitting",
    "AHJ",
    "NEC",
    "SolarAPP+",
    "open data",
    "solar API",
    "permit automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ashlr Solar Docs",
  },
  twitter: { card: "summary_large_image", creator: "@ashlrai" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0807",
  colorScheme: "dark",
};

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ashlr.ai",
  url: "https://ashlr.ai",
  sameAs: ["https://github.com/ashlrai"],
  description:
    "AI permitting agent for US + Canadian solar installers. Open knowledge graph at solar.ashlr.ai.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ink text-parchment antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <div className="fx-grain" aria-hidden />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
