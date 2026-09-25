/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--c-bg-base) / <alpha-value>)',
        surface: 'rgb(var(--c-bg-surface) / <alpha-value>)',
        surface2: 'rgb(var(--c-bg-surface2) / <alpha-value>)',
        surface3: 'rgb(var(--c-bg-surface3) / <alpha-value>)',
        edge: 'rgb(var(--c-border) / <alpha-value>)',
        edge2: 'rgb(var(--c-border-faint) / <alpha-value>)',
        ink: 'rgb(var(--c-text-primary) / <alpha-value>)',
        ink2: 'rgb(var(--c-text-secondary) / <alpha-value>)',
        ink3: 'rgb(var(--c-text-muted) / <alpha-value>)',
        ink4: 'rgb(var(--c-text-faint) / <alpha-value>)',
        trevia: {
          darkest: "#02060D",
          navy: "#030A12",
          surface: "#06101E",
          card: "#091426",
          border: "#0E223D",
          borderLight: "#16345C",
          blue: "#00A09A",
          blueLight: "#33C4BF",
          blueGlow: "rgba(0, 160, 154, 0.4)",
          cyan: "#00A09A",
          cyanAccent: "#33C4BF",
          slate: "#8BA3C7",
          muted: "#5B7598"
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace']
      },
      boxShadow: {
        'electric-glow': '0 0 35px -5px rgba(0, 160, 154, 0.45)',
        'cyan-glow': '0 0 30px -5px rgba(0, 160, 154, 0.4)',
        'subtle-blue': '0 10px 40px -10px rgba(0, 160, 154, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 10, 25, 0.37)'
      },
      animation: {
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'logo-marquee': 'logo-marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'logo-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
