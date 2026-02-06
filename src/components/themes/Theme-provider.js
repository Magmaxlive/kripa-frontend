"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"  // or "dark" - whatever you prefer as default
      enableSystem  // This stops it from following system preferences
      storageKey="theme"    // Optional: explicitly set storage key
    >
      {children}
    </NextThemesProvider>
  );
}
