/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#003D5B',      // Deep Oceanic Navy (Logo Monogram)
          dark: '#002B40',      // Extra Dark Navy
          navy: '#004B6E',      // Medium Ocean Navy
          teal: '#00A8B5',      // Vibrant Teal / Cyan (Logo Leaf)
          cyan: '#00C2D1',      // Bright Cyan Highlight
          mint: '#E6F7F8',      // Soft Ice Mint / Teal Accent
          bg: '#FAFBFD',        // Crisp Clean Off-White
          surface: '#FFFFFF',   // Pure White
          card: '#F0F5F8',      // Soft Card Fill
          border: '#DCE6ED',    // Light Refined Border
          text: '#1A2B35',      // Dark Charcoal Text
          muted: '#4A6070',     // Readable Body Text
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass': '0 8px 30px 0 rgba(0, 61, 91, 0.05)',
        'header-scroll': '0 4px 20px 0 rgba(0, 43, 64, 0.05)',
        'premium': '0 20px 40px -15px rgba(0, 61, 91, 0.07)',
        'card-hover': '0 16px 32px -8px rgba(0, 168, 181, 0.12)',
      }
    },
  },
  plugins: [],
}
