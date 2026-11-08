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
        ink: {
          DEFAULT: '#121115',
          950: '#0A090B',
          900: '#121115',
          850: '#1F1F1F',
          800: '#272727',
          750: '#313131',
          700: '#3D3945',
          600: '#524D5C',
        },
        paper: {
          DEFAULT: '#F6F1E8',
          50: '#FAF7F2',
          100: '#F6F1E8',
          200: '#EFE7DB',
          300: '#ECE4D6', // Bone
          400: '#DDD3C1',
        },
        bone: {
          DEFAULT: '#ECE4D6',
          light: '#F2ECE0',
          dark: '#DDD3C1',
        },
        coral: {
          DEFAULT: '#FF5A36',
          100: '#FFECE8',
          200: '#FFD4CB',
          300: '#FFA592',
          400: '#FF7556',
          500: '#FF5A36', // Launch Coral
          600: '#E84622',
          700: '#BD3314',
          hover: '#FF7556',
        },
        stone: {
          DEFAULT: '#7D766B',
          300: '#AFA99E',
          400: '#948E83',
          500: '#7D766B', // Base Stone
          600: '#655F55',
        }
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        display: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
        'phone': '36px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
