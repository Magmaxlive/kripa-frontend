"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    console.log('Theme changed:', { theme, resolvedTheme });
  }, [theme, resolvedTheme]);

  if (!mounted) return null;

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log('Toggling from', theme, 'to', newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      className="px-3 lg:px-2 lg:py-2 py-1 rounded-full border text-sm border-[#454a54] text-[#14181f] dark:border-gray-200 dark:text-gray-200"
    >
      {theme === "dark" ? <Sun/> : <Moon/>}
    </button>
  );
}