
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        fusion: {
          primary: '#FEF700', // Bright yellow
          secondary: '#FFD700', // Gold yellow
          dark: '#1a1f2c', // Deep dark blue-gray
          light: '#2a2f3c', // Slightly lighter dark blue-gray
          gray: '#8E9196', // Muted gray
        }
      },
      backgroundColor: {
        'dark-background': '#121620', // Very dark background
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1a1f2c 0%, #121620 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

