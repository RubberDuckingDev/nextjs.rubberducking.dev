import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AxiomWebVitals } from "next-axiom";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RubberDucking.Dev",
  description: "Rubber Ducking Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SpeedInsights />
          <AxiomWebVitals />
          <div className="flex min-h-screen flex-col gap-4">
            <Header />
            <main className="flex flex-col items-center justify-between p-24">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
