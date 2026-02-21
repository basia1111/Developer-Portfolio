import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Backgrounds — use with bg-*
        base: '#0A0A0C', // bg-base (page)
        canvas: '#0C0C0E', // bg-canvas (game)
        surface: '#111114', // bg-surface (cards, buttons)
        elevated: '#141418', // bg-elevated (image areas)
        raised: '#1a1a20', // bg-raised (hover states)

        // Borders — use with border-*
        rule: '#1a1a1a', // border-rule (dividers)
        stroke: '#2a2a2a', // border-stroke (card/tag borders)
        edge: '#3E3C4A', // border-edge (stronger borders)

        // Text — use with text-*
        faint: '#4A475A', // text-faint (least important)
        dim: '#7A7790', // text-dim (labels, hints)
        muted: '#9994A8', // text-muted (nav, captions)
        body: '#A8A4B8', // text-body (paragraphs)
        sub: '#CBC7D4', // text-sub (subheadings)
        primary: '#EDEBE6', // text-primary (headings)

        // Accent
        accent: '#E8735A', // bg-accent, text-accent, border-accent
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'], // font-display — headings, hero, stats numbers
        body: ['Satoshi', 'sans-serif'], // font-body — paragraphs, descriptions
        mono: ['JetBrains Mono', 'monospace'], // font-mono — labels, tags, nav, code
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
} satisfies Config;
