"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';

export function ChangeMode(): ReactNode {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="" onClick={() => setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark")} >
      {theme === "dark" || resolvedTheme === "dark" ? (<Moon color='#ffffff' size={24} />) : (<Sun color='#ffd60a' size={24} />)}
    </div>
  );
}
