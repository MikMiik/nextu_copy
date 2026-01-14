"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AuthStatus } from "@/components/auth-status";
import { useAuth } from "./auth-context";
import { Logo } from "@/components/ui/Logo";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const t = useTranslations("nav");

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo branding: "Next" + "U" với 2 màu tách biệt */}
          <div className="flex items-center h-full flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/locations"
              className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
            >
              {t("rooms")}
            </Link>
            <Link
              href="/packages"
              className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
            >
              {t("packages")}
            </Link>
            <Link
              href="/ecosystem"
              className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
            >
              {t("ecosystem")}
            </Link>
            <LanguageSwitcher />
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <AuthStatus />
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  className="rounded-full border-brand-secondary text-brand-secondary hover:border-brand-primary hover:text-brand-primary"
                  asChild
                >
                  <Link href="/login">{t("signin")}</Link>
                </Button>
                <Button
                  className="rounded-full bg-brand-secondary hover:bg-brand-secondary/90 text-white"
                  asChild
                >
                  <Link href="/register">{t("getstarted")}</Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-brand-primary text-brand-primary hover:border-brand-secondary hover:text-brand-secondary"
                  asChild
                >
                  <Link href="/partner">{t("forpartners")}</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <Link
              href="/rooms"
              className="block text-brand-secondary hover:text-brand-primary font-medium"
            >
              {t("rooms")}
            </Link>
            <Link
              href="/packages"
              className="block text-brand-secondary hover:text-brand-primary font-medium"
            >
              {t("packages")}
            </Link>
            <Link
              href="/ecosystem"
              className="block text-brand-secondary hover:text-brand-primary font-medium"
            >
              {t("ecosystem")}
            </Link>
            {isLoggedIn ? null : (
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="rounded-full border-brand-secondary text-brand-secondary hover:border-brand-primary hover:text-brand-primary"
                  asChild
                >
                  <Link href="/login">{t("signin")}</Link>
                </Button>
                <Button
                  className="rounded-full bg-brand-secondary hover:bg-brand-secondary/90 text-white"
                  asChild
                >
                  <Link href="/register">{t("getstarted")}</Link>
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
