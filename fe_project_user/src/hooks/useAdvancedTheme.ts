"use client";

import { useEffect, useState } from "react";

interface ThemeColors {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
}

const DEFAULT_COLORS: ThemeColors = {
  primary: "#5DA7CA",
  secondary: "#122148",
  light: "#FAFAFA",
  dark: "#000000",
};

// Color presets for quick selection
export const COLOR_PRESETS = {
  default: {
    name: "NextU Default",
    colors: {
      primary: "#5DA7CA",
      secondary: "#122148",
      light: "#FAFAFA",
      dark: "#000000",
    },
  },
  ocean: {
    name: "Ocean Blue",
    colors: {
      primary: "#0EA5E9",
      secondary: "#0C4A6E",
      light: "#F0F9FF",
      dark: "#082F49",
    },
  },
  sunset: {
    name: "Sunset Orange",
    colors: {
      primary: "#F97316",
      secondary: "#7C2D12",
      light: "#FFF7ED",
      dark: "#431407",
    },
  },
  forest: {
    name: "Forest Green",
    colors: {
      primary: "#10B981",
      secondary: "#064E3B",
      light: "#F0FDF4",
      dark: "#022C22",
    },
  },
  purple: {
    name: "Royal Purple",
    colors: {
      primary: "#A855F7",
      secondary: "#581C87",
      light: "#FAF5FF",
      dark: "#3B0764",
    },
  },
  rose: {
    name: "Rose Pink",
    colors: {
      primary: "#F43F5E",
      secondary: "#881337",
      light: "#FFF1F2",
      dark: "#4C0519",
    },
  },
};

// Helper: Convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "93, 167, 202";

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `${r}, ${g}, ${b}`;
}

export function useAdvancedTheme() {
  const [colors, setColors] = useState<ThemeColors>(DEFAULT_COLORS);
  const [isClient, setIsClient] = useState(false);

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
    root.style.setProperty("--brand-light", newColors.light);
    root.style.setProperty("--brand-dark", newColors.dark);
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

  const setAllColors = (newColors: ThemeColors) => {
    setColors(newColors);
    applyTheme(newColors);
    localStorage.setItem("userThemeColors", JSON.stringify(newColors));
  };

  const resetTheme = () => {
    setColors(DEFAULT_COLORS);
    applyTheme(DEFAULT_COLORS);
    localStorage.removeItem("userThemeColors");
  };

  const exportTheme = () => {
    return JSON.stringify(colors, null, 2);
  };

  const importTheme = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      if (imported.primary && imported.secondary) {
        setAllColors(imported);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  return {
    colors,
    updateColors,
    setAllColors,
    resetTheme,
    exportTheme,
    importTheme,
    isClient,
  };
}
