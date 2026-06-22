import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Santosh Solanki — Frontend React.js Developer",
  description:
    "Portfolio of Santosh Solanki, a 3.6+ year experienced Frontend React.js Developer from Indore, India. Specializing in React.js, Next.js, TypeScript, and scalable UI development.",
  keywords: [
    "Santosh Solanki",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Indore",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Santosh Solanki" }],
  creator: "Santosh Solanki",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://santoshsolanki.dev",
    title: "Santosh Solanki — Frontend React.js Developer",
    description:
      "3.6+ years of experience building scalable, performant web apps with React.js, Next.js, and TypeScript.",
    siteName: "Santosh Solanki Portfolio",
    images: [
      {
        url: "https://ui-avatars.com/api/?name=Santosh+Solanki&size=1200&background=6366f1&color=ffffff&bold=true",
        width: 1200,
        height: 630,
        alt: "Santosh Solanki — Frontend React.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Santosh Solanki — Frontend React.js Developer",
    description:
      "3.6+ years of experience building scalable web apps with React.js, Next.js, and TypeScript.",
    images: [
      "https://ui-avatars.com/api/?name=Santosh+Solanki&size=1200&background=6366f1&color=ffffff&bold=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://santoshsolanki.dev" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Santosh Solanki",
              jobTitle: "Frontend React.js Developer",
              url: "https://santoshsolanki.dev",
              email: "santoshsolanki0716@gmail.com",
              telephone: "+918717837777",
              address: { "@type": "PostalAddress", addressLocality: "Indore", addressCountry: "IN" },
              sameAs: [
                "https://www.linkedin.com/in/santosh-solanki-36599b186/",
                "https://github.com/Santosh7solanki",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
