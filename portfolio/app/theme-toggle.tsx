'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const themeStorageKey = 'hamza-theme-v1';

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const light = !root.classList.contains('light');
    root.classList.toggle('light', light);
    root.classList.toggle('dark', !light);
    try {
      localStorage.setItem(themeStorageKey, light ? 'light' : 'dark');
    } catch {
      // The theme still works when the browser blocks local storage.
    }
  }

  return (
    <Button variant="ghost" className="theme-toggle" onClick={toggleTheme}>
      <span className="show-in-dark">
        <Sun size={16} aria-hidden="true" />
        <span>Light</span>
        <span className="sr-only"> — switch to light theme</span>
      </span>
      <span className="show-in-light">
        <Moon size={16} aria-hidden="true" />
        <span>Dark</span>
        <span className="sr-only"> — switch to dark theme</span>
      </span>
    </Button>
  );
}
