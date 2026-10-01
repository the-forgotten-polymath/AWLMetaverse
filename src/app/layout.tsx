import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://awlmetaverse.com"),
  title: "AWL Metaverse",
  description:
    "A unified infrastructure platform helping teams build, ship, and scale AI systems, custom ERP, CRM, LMS platforms, and high-growth digital engines.",
  keywords: [
    "AWL Metaverse",
    "AI & Automation",
    "ERP Solutions",
    "CRM Solutions",
    "LMS Platforms",
    "Web Development",
    "App Development",
    "Jind",
    "Chandigarh",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "AWL Metaverse",
    description:
      "A unified infrastructure platform helping teams build, ship, and scale AI systems with confidence.",
    url: "https://awlmetaverse.com",
    siteName: "AWL Metaverse",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWL Metaverse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050505] text-[#fafafa] antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
