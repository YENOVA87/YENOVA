/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#b300ff',
        'neon-pink': '#ff00ff',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-slow': 'rotate 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: 1,
            filter: 'brightness(100%)',
          },
          '50%': {
            opacity: 0.8,
            filter: 'brightness(150%)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: 1,
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: 0,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
    },
  },
  plugins: [],
};