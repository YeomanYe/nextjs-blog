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
        primary: '#00d4ff',
        secondary: '#7b68ee',
        accent: '#ff0080',
      },
      backgroundColor: {
        background: '#0a0e27',
        card: '#111827',
      },
      borderColor: {
        DEFAULT: '#1e293b',
      },
    },
  },
  plugins: [],
};

export default config;