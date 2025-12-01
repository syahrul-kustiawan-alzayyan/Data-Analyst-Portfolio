import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        charcoal: {
          900: '#000000', // Pure black
          950: '#111111', // Near black
        },
        gray: {
          50: '#f9f9f9',  // Very light gray
          100: '#f0f0f0', // Light gray
          200: '#e0e0e0', // Light-medium gray
          300: '#d0d0d0', // Medium-light gray
          400: '#b0b0b0', // Medium gray
          500: '#909090', // Medium-dark gray
          600: '#707070', // Dark-medium gray
          700: '#505050', // Dark gray
          800: '#303030', // Very dark gray
          900: '#1a1a1a', // Nearly black
        }
      },
      fontFamily: {
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/images/noise.png')", // Texture for depth
      }
    },
  },
  plugins: [],
};
export default config;