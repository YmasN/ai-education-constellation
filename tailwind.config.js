/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vellum: {
          50: '#FFFFFF',
          100: '#FAF9F6',
          200: '#F3F2EE',
          300: '#E7E5DF',
          400: '#D5D2C9',
          900: '#1F1E1D',
        },
        ink: {
          DEFAULT: '#1B1917',
          light: '#44403C',
          muted: '#78716C',
        },
        crimson: {
          DEFAULT: '#A51C30',
          dark: '#801424',
          light: '#FCECEF',
        },
        terracotta: {
          DEFAULT: '#A51C30',
          dark: '#801424',
          light: '#FCECEF',
        },
        sage: {
          DEFAULT: '#4A6B53',
          dark: '#354E3C',
          light: '#EDF3EE',
        },
        indigolight: {
          DEFAULT: '#2C3E6B',
          dark: '#1F2C4C',
          light: '#EBF0F8',
        },
        amberwarm: {
          DEFAULT: '#B8860B',
          dark: '#8C6608',
          light: '#FAF4E6',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
