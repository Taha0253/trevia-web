/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trevia: {
          darkest: "#02060D",
          navy: "#030A12",
          surface: "#06101E",
          card: "#091426",
          border: "#0E223D",
          borderLight: "#16345C",
          blue: "#00A8FF",
          blueLight: "#36B7FF",
          blueGlow: "rgba(0, 168, 255, 0.4)",
          cyan: "#00F0FF",
          cyanAccent: "#00D2C4",
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
        'electric-glow': '0 0 35px -5px rgba(0, 168, 255, 0.45)',
        'cyan-glow': '0 0 30px -5px rgba(0, 240, 255, 0.4)',
        'subtle-blue': '0 10px 40px -10px rgba(0, 168, 255, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 10, 25, 0.37)'
      },
      animation: {
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
