/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#E55934',
          'orange-hover': '#CC4E2A',
          'orange-light': '#FFF1EC',
          'orange-tint': '#FDEAE0',
          dark: '#1A1A1A',
          body: '#4A4A4A',
          muted: '#888888',
          border: '#E8E8E8',
          bg: '#FFFFFF',
          'bg-soft': '#F8F7F5',
          'bg-dark': '#2B2B2B',
          'bg-darker': '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['"Helvetica Neue"','Helvetica','-apple-system','BlinkMacSystemFont','"Segoe UI"','Arial','sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        snug: '-0.01em',
        wide: '0.02em',
        wider: '0.05em',
        widest: '0.12em',
      },
      boxShadow: {
        soft: '0 2px 16px rgba(0,0,0,0.06)',
        card: '0 4px 24px rgba(0,0,0,0.08)',
        lifted: '0 8px 40px rgba(0,0,0,0.12)',
        orange: '0 4px 20px rgba(229,89,52,0.28)',
        'orange-lg': '0 8px 40px rgba(229,89,52,0.22)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: { '0%': {opacity:0,transform:'translateY(20px)'}, '100%': {opacity:1,transform:'translateY(0)'} },
        float: { '0%,100%': {transform:'translateY(0)'}, '50%': {transform:'translateY(-10px)'} },
      },
    },
  },
  plugins: [],
};
