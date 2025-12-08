import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    template: "%s | Syahrul Kustiawan Al Zayyan"
  },
  description: "Professional data analyst portfolio showcasing expertise in data analysis, visualization, and business intelligence. Transforming complex datasets into actionable insights.",
  keywords: ["data analyst", "portfolio", "data visualization", "business intelligence", "data science", "analytics"],
  authors: [{ name: "Syahrul Kustiawan Al Zayyan" }],
  creator: "Syahrul Kustiawan Al Zayyan",
  publisher: "Syahrul Kustiawan Al Zayyan",
  icons: {
    icon: '/portfolio.png',
    shortcut: '/portfolio.png',
    apple: '/portfolio.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syahrul-kustiawan-alzayyan-portfolio.vercel.app",
    title: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    description: "Professional data analyst portfolio showcasing expertise in data analysis, visualization, and business intelligence.",
    siteName: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    description: "Professional data analyst portfolio showcasing expertise in data analysis, visualization, and business intelligence.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
