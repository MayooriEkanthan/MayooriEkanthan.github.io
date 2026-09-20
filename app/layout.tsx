import type { Metadata, Viewport } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayoori Ekanthan - Software Engineer",
  description: "Dedicated BSc (Hons) in Information Systems undergraduate and Software Engineer with hands-on experience in web, mobile, and full-stack development.",
  keywords: [
    "Mayoori Ekanthan",
    "Software Engineer",
    "Full-Stack Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mayoori Ekanthan" }],
  creator: "Mayoori Ekanthan",
  publisher: "Mayoori Ekanthan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/MayooriEkanthan",
    title: "Mayoori Ekanthan - Software Engineer",
    description: "Dedicated BSc in Information Systems undergraduate and Software Engineer with hands-on experience in web, mobile, and full-stack development.",
    siteName: "Mayoori Ekanthan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayoori Ekanthan - Software Engineer",
    description: "Dedicated BSc in Information Systems undergraduate and Software Engineer.",
  },
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body
        className={`${poppins.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
