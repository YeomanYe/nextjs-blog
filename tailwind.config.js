/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Bright Yellow
        primary: '#FFD700',
        primaryLight: '#FFE44D',
        primaryDark: '#C9A600',
        // Accents
        cyan: '#00F0FF',
        green: '#00FF88',
        orange: '#FF9500',
        red: '#FF2D55',
        purple: '#A855F7',
        // Backgrounds
        background: '#0A0A0B',
        surface: '#141418',
        surfaceElevated: '#1A1A20',
        card: '#141418',
        input: '#0F0F12',
        // Text
        text: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          muted: '#71717A',
          inverse: '#0A0A0B',
        },
        // Borders
        border: {
          DEFAULT: '#27272A',
          light: '#3F3F46',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Space Mono', 'Courier New', 'monospace'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;