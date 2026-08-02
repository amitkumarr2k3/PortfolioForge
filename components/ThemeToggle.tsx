'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
