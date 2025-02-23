import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'gradient-medium': 'gradient 12s ease infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        wave: 'wave 20s ease-in-out infinite',
        'wave-slow': 'wave 25s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(50px, 50px) rotate(180deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
        },
      },
      colors: {
        light: {
          bg: {
            primary: '#f8f9fc',
            secondary: '#f3f4f8',
            tertiary: '#eef0f5',
            hover: '#e8eaf2',
          },
          text: {
            primary: '#1a1b1e',
            secondary: '#4a4c55',
            muted: '#71747f',
          },
        },
        dark: {
          bg: {
            primary: '#101012', // Your dark background
            secondary: '#1e1e2e', // Terminal background
            tertiary: '#16162a', // Slightly lighter
            hover: '#2D2D3D',
          },
          text: {
            primary: '#FFFFFF', // White text
            secondary: '#a1a1a9', // Your muted text
            muted: '#8F8F98',
          },
        },
        accent: {
          primary: '#4f46e5', // Your main accent
          light: '#818bf8', // Lighter accent
          dark: '#4338ca', // Darker version
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
