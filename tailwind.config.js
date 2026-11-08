/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#010405',
        surface: '#010405',
        'on-surface': '#FFFFFF',
        'on-background': '#FFFFFF',
        'on-surface-variant': '#CCCDCD',
        'on-surface-muted': '#7D7D7D',
        'on-surface-subtle': '#666666',
        'surface-container-low': '#010202',
        'surface-container': '#06101A',
        'surface-container-high': '#171717',
        overlay: 'rgba(255, 255, 255, 0.20)',
        'overlay-strong': 'rgba(255, 255, 255, 0.08)',
        outline: 'rgba(0, 0, 0, 0.10)',
        primary: '#E6E6E6',
        'on-primary': '#000000',
        secondary: '#0072F5',
        // Semantic aliases
        ink: '#171717',
        paper: '#FAFAFA',
        // Coordinated card design tokens
        card: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          'light-border': 'rgba(0, 0, 0, 0.08)',
          'light-border-hover': 'rgba(0, 0, 0, 0.20)',
          'light-inset': '#F8F9FA',
          'light-text': '#111827',
          'light-muted': '#52525B',
          dark: '#0A0E14',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
          'dark-border-hover': 'rgba(255, 255, 255, 0.20)',
          'dark-inset': '#06080B',
          'dark-text': '#FFFFFF',
          'dark-muted': '#CCCDCD',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Switzer', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        shell: '1200px',
        container: '588px',
      },
      borderRadius: {
        xs: '6px',
        sm: '12px',
        md: '16px',
        lg: '32px',
        xl: '40px',
        card: '16px',
        accordion: '12px',
      },
      spacing: {
        gutter: '8px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'drift': 'drift 18s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { transform: 'translate3d(-2%, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(2%, -2%, 0) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};
