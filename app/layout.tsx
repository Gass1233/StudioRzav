import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rzav.studio"),
  title: {
    default: "RZAV | Cinematic Architectural Visualization",
    template: "%s | RZAV"
  },
  description:
    "RZAV creates high-end architectural renders and cinematic visualization for real estate marketing, luxury property launches, and visionary spaces.",
  keywords: [
    "architectural visualization",
    "3D rendering studio",
    "real estate marketing",
    "luxury property renders",
    "cinematic architecture imagery"
  ],
  openGraph: {
    title: "RZAV | Cinematic Architectural Visualization",
    description:
      "High-end architectural imagery designed to sell future spaces before they exist.",
    url: "https://rzav.studio",
    siteName: "RZAV",
    images: [
      {
        url: "/rzav/projects/northern-courtyard-residences/cover.webp",
        width: 1600,
        height: 1200,
        alt: "Cinematic residential visualization by RZAV"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
