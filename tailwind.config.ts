import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // core palette
        surface: {
          DEFAULT: '#0a0a0f',
          50: '#0e0e14',
          100: '#12121a',
          200: '#1a1a24',
          300: '#22222e',
          400: '#2a2a38',
        },
        accent: {
          purple: '#a855f7',
          'purple-light': '#c084fc',
          'purple-dark': '#7c3aed',
          teal: '#06b6d4',
          'teal-light': '#22d3ee',
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
        },
        text: {
          primary: '#f0f0f5',
          secondary: '#a0a0b0',
          muted: '#6b6b80',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 12px 40px rgba(168, 85, 247, 0.15)',
        glow: '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-teal': '0 0 20px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
