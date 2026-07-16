import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocalBusinessSEO from "@/components/LocalBusinessSEO";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://echohavenmunnar.com"),

  verification: {
    google: "5si3VwqKOHPWy76zyDTRAESd54ngCiy8ZSKQQsHdB7c",
  },

  title: {
    default: "Echo Haven | Camping & Nature Stay in Munnar",
    template: "%s | Echo Haven",
  },

  description:
    "Escape into nature at Echo Haven, Munnar. Stay in comfortable tents surrounded by breathtaking mountains, enjoy campfires, complimentary breakfast, free Wi-Fi, and unforgettable experiences.",

  keywords: [
    "Echo Haven",
    "Echo Haven Munnar",
    "Camping in Munnar",
    "Munnar Camping",
    "Tent Stay Munnar",
    "Nature Stay Kerala",
    "Mountain Camping Kerala",
    "Campfire Munnar",
    "20 Acre Munnar",
    "Kerala Tourism",
  ],

  authors: [
    {
      name: "Echo Haven",
    },
  ],

  creator: "Echo Haven",
  publisher: "Echo Haven",
  applicationName: "Echo Haven",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Echo Haven | Camping & Nature Stay in Munnar",
    description:
      "Experience peaceful camping surrounded by the beautiful hills of Munnar. Comfortable tents, campfires, breakfast included and breathtaking mountain views.",
    url: "https://echohavenmunnar.com",
    siteName: "Echo Haven",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Echo Haven Munnar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Echo Haven | Camping & Nature Stay in Munnar",
    description:
      "Escape into nature at Echo Haven, Munnar. Comfortable tents, mountain views, campfires, breakfast included and unforgettable experiences.",
    images: ["/images/hero.png"],
  },

  category: "Travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <LocalBusinessSEO />
        {children}
      </body>
    </html>
  );
}