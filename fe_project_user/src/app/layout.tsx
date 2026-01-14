import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { AuthProvider } from "@/components/auth-context";
import AutoRefreshToken from "@/components/AutoRefreshToken";
import { AccountProvider } from "@/components/account/AccountContext";
import { SessionExpiredProvider } from "@/context/SessionExpiredContext";
import { SessionExpiredModal } from "@/components/SessionExpiredModal";
import ToasterClient from "@/components/ToasterClient";
import { Footer } from "@/components/footer";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Universe - Mindful Co-living & Creative Ecosystem",
  description: "Find your perfect co-living experience with Next U",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SessionExpiredProvider>
            <NextIntlClientProvider>
              <AutoRefreshToken />
              <AccountProvider initialData={null}>
                <div className="min-h-screen bg-brand-light text-brand-secondary">
                  <Navigation />
                  {children}
                  <Footer />
                </div>
                <SessionExpiredModal />
                <ToasterClient />
              </AccountProvider>
            </NextIntlClientProvider>
          </SessionExpiredProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
