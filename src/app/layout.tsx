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
    icon: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
      ? '/Data-Analyst-Portfolio/portfolio.png'
      : '/portfolio.png',
    shortcut: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
      ? '/Data-Analyst-Portfolio/portfolio.png'
      : '/portfolio.png',
    apple: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
      ? '/Data-Analyst-Portfolio/portfolio.png'
      : '/portfolio.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
      ? "https://syahrul-kustiawan-alzayyan.github.io/Data-Analyst-Portfolio"
      : "https://syahrul-kustiawan-alzayyan-portfolio.vercel.app",
    title: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    description: "Professional data analyst portfolio showcasing expertise in data analysis, visualization, and business intelligence.",
    siteName: "Syahrul Kustiawan Al Zayyan - Data Analyst Portfolio",
    images: [
      {
        url: process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
          ? "/Data-Analyst-Portfolio/images/portfolio.png"
          : "/images/portfolio.png",
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
    images: [
      process.env.DEPLOY_ENV === 'github-pages' || process.env.GITHUB_ACTIONS === 'true'
        ? "/Data-Analyst-Portfolio/images/portfolio.png"
        : "/images/portfolio.png"
    ],
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
