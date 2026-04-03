import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components/layout";
import { WhatsAppButton } from "@/components/ui";
import { SITE_NAME, SITE_URL } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Jasa Pembuatan Website Company Profile Profesional`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Faintry Studio adalah web development studio profesional yang berspesialisasi dalam pembuatan & pengembangan company profile modern, responsif, dan SEO-friendly.",
  keywords: [
    "web development",
    "company profile",
    "website profesional",
    "jasa pembuatan website",
    "Next.js",
    "Faintry Studio",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Web Development Studio`,
    description:
      "Wujudkan company profile impian Anda bersama Faintry Studio. Website modern, responsif, dan SEO-friendly.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Web Development Studio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Web Development Studio`,
    description:
      "Wujudkan company profile impian Anda bersama Faintry Studio. Website modern, responsif, dan SEO-friendly.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/** JSON-LD structured data for Organization */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Web development studio profesional yang berspesialisasi dalam pembuatan company profile modern dan SEO-friendly.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: "Indonesian",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0A1628]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
