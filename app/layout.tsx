import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/shared/ui/Footer";
import { Suspense } from "react";
import { Loader } from "@/components/shared/ui/Loader";
import { LandingPageHeader } from "@/components/shared/ui/LandingPageHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reginald Chand - Developer Portfolio 2025 🙏",
  description:
    "I'm Reginald Chand, a fullstack developer with a passion for clean code and bold design. From backend logic to pixel-perfect interfaces, my work blends React.js, Next.js, Node.js, Express.js, TypeScript, Tailwind CSS, and dynamic layouts built with Grid and Flexbox and many more. Every line of code is crafted with intention — functional, elegant, and uniquely me. This is just a gist of what I know and who am I 🙏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorNeutral: "rgba(249, 250, 251, 1)",
          colorPrimary: "rgba(79, 70, 229, 1)",
          colorText: "rgba(249, 250, 251, 0.5)",
          colorTextSecondary: "rgba(249, 250, 251, 0.5)",
          colorBackground: "rgba(3, 7, 18, 1)",
        },

        elements: {
          avatarBox: {
            width: 50,
            height: 50,
            border: "1px solid rgba(249, 250, 251, 0.5)",
          },
        },
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense fallback={<Loader />}>
            <Toaster position="top-center" reverseOrder={false} />
            <NextTopLoader
              color="var(--rsc-primary)"
              showSpinner={false}
              showForHashAnchor={true}
            />

            <LandingPageHeader />
            {children}
            <Footer />
          </Suspense>

          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
