import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isLight}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
      className={`relative inline-flex items-center w-14 h-8 shrink-0 rounded-full border border-edge bg-surface2/60 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-colors duration-300 hover:border-[#00A09A]/40 ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-300 ${isLight ? 'opacity-30 text-ink4' : 'opacity-90 text-[#00A09A]'}`} />
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-300 ${isLight ? 'opacity-90 text-amber-400' : 'opacity-30 text-ink4'}`} />
      </span>
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-[0_2px_8px_rgba(0,0,0,0.35)] transition-transform duration-300 ease-out ${
          isLight ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
};
