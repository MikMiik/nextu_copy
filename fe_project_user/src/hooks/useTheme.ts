"use client";

import { useEffect, useState } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
}

const DEFAULT_COLORS: ThemeColors = {
  primary: "#5DA7CA",
  secondary: "#122148",
};

// Helper: Convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "93, 167, 202"; // fallback

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `${r}, ${g}, ${b}`;
}

export function useTheme() {
  const [colors, setColors] = useState<ThemeColors>(DEFAULT_COLORS);
  const [isClient, setIsClient] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem("userThemeColors");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setColors(parsed);
        applyTheme(parsed);
      } catch (e) {
        console.error("Failed to parse saved theme", e);
      }
    }
  }, []);

  const applyTheme = (newColors: ThemeColors) => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.style.setProperty("--brand-primary", newColors.primary);
    root.style.setProperty("--brand-secondary", newColors.secondary);
    root.style.setProperty("--brand-primary-rgb", hexToRgb(newColors.primary));
    root.style.setProperty(
      "--brand-secondary-rgb",
      hexToRgb(newColors.secondary)
    );
  };

  const updateColors = (newColors: Partial<ThemeColors>) => {
    const updated = { ...colors, ...newColors };
    setColors(updated);
    applyTheme(updated);
    localStorage.setItem("userThemeColors", JSON.stringify(updated));
  };

  const resetTheme = () => {
    setColors(DEFAULT_COLORS);
    applyTheme(DEFAULT_COLORS);
    localStorage.removeItem("userThemeColors");
  };

  return {
    colors,
    updateColors,
    resetTheme,
    isClient,
  };
}
