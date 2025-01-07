import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
      animation: {
        'twinkle-1': 'twinkle 4s infinite',
        'twinkle-2': 'twinkle 3s infinite 1s',
        'twinkle-3': 'twinkle 5s infinite 0.5s',
      },
      colors: {
        // Dark Mode
        dark: {
          bg: {
            primary: '#09090b',
            secondary: '#101012',
            tertiary: '#17171A',
            hover: '#1C1C21',
          },
          border: {
            primary: '#27272A',
            accent: 'rgba(100, 102, 241, 0.1)',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#A1A1AA',
          },
        },
        // Light Mode
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F8FAFC',
            tertiary: '#F1F5F9',
            hover: '#E2E8F0',
          },
          border: {
            primary: '#E2E8F0',
            accent: 'rgba(100, 102, 241, 0.2)',
          },
          text: {
            primary: '#0F172A',
            secondary: '#334155',
            muted: '#64748B',
          },
        },
        // Accent colors
        accent: {
          primary: '#6466F1',
          light: '#818CF8',
          lighter: '#C7D2FE',
          dark: '#4F46E5',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
